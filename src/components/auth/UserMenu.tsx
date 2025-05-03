import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { User, LogOut } from 'lucide-react';
import AuthModal from './AuthModal';

const UserMenu: React.FC = () => {
  const { theme } = useTheme();
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      setShowDropdown(false);
    } catch (error) {
      console.error('退出登录失败:', error);
    }
  };

  if (!user) {
    return (
      <>
        <button
          onClick={() => setShowAuthModal(true)}
          className="px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-200"
        >
          登录
        </button>
        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      </>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className={`p-2 rounded-full transition-colors duration-200 ${
          theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
        }`}
      >
        <User className="w-5 h-5" />
      </button>
      
      {showDropdown && (
        <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg ${
          theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <div className={`px-4 py-3 border-b ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <p className="text-sm font-medium">{user.email}</p>
          </div>
          
          <div className="p-2">
            <button
              onClick={handleSignOut}
              className={`w-full px-4 py-2 text-left rounded-lg text-sm ${
                theme === 'dark'
                  ? 'hover:bg-gray-700 text-red-400'
                  : 'hover:bg-gray-100 text-red-600'
              } transition-colors duration-200 flex items-center`}
            >
              <LogOut className="w-4 h-4 mr-2" />
              退出登录
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;