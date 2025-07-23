'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<{ needsEmailVerification: boolean }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 检查初始会话
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        checkAndSetUser(session.user);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    // 监听认证状态变化
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        await checkAndSetUser(session.user);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // 检查用户是否已验证邮箱并同步到 vibecoding_users 表
  const checkAndSetUser = async (authUser: User) => {
    try {
      // 检查用户是否已验证邮箱
      if (!authUser.email_confirmed_at) {
        setUser(null);
        setLoading(false);
        return;
      }

      // 检查用户是否存在于 vibecoding_users 表中
      const { data: existingUser } = await supabase
        .from('vibecoding_users')
        .select()
        .eq('id', authUser.id)
        .single();

      // 如果用户不存在，则创建用户记录
      if (!existingUser) {
        const { error: insertError } = await supabase
          .from('vibecoding_users')
          .insert([
            {
              id: authUser.id,
              email: authUser.email,
            }
          ]);

        if (insertError) throw insertError;

        // 同时创建用户档案
        const { error: profileError } = await supabase
          .from('vibecoding_profiles')
          .insert([
            {
              id: authUser.id,
              nickname: authUser.email?.split('@')[0] || 'User',
            }
          ]);

        if (profileError) throw profileError;
      }

      setUser(authUser);
    } catch (error) {
      console.error('Error syncing user data:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    
    // 检查邮箱是否已验证
    if (!data.user?.email_confirmed_at) {
      throw new Error('请先验证您的邮箱后再登录');
    }
  };

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: {
          email: email,
        }
      }
    });
    
    if (error) throw error;
    
    return { needsEmailVerification: true };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;