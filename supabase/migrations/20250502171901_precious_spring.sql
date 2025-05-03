/*
  # VibeCoding 数据库表结构

  1. 新建表
    - vibeCoding_users: 用户基本信息
    - vibeCoding_profiles: 用户详细资料
    - vibeCoding_articles: 文章内容
    - vibeCoding_comments: 评论
    - vibeCoding_tutorials: 教程
    - vibeCoding_progress: 学习进度
    - vibeCoding_bookmarks: 收藏

  2. 安全
    - 所有表启用 RLS
    - 为每个表设置适当的访问策略
*/

-- 用户信息表
CREATE TABLE IF NOT EXISTS vibeCoding_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE vibeCoding_users ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "用户可以读取自己的数据" ON vibeCoding_users
    FOR SELECT TO authenticated
    USING (auth.uid() = id);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- 用户档案表
CREATE TABLE IF NOT EXISTS vibeCoding_profiles (
  id uuid PRIMARY KEY REFERENCES vibeCoding_users(id) ON DELETE CASCADE,
  nickname text NOT NULL,
  avatar_url text,
  bio text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE vibeCoding_profiles ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "所有人可以查看用户档案" ON vibeCoding_profiles
    FOR SELECT TO public
    USING (true);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "用户可以更新自己的档案" ON vibeCoding_profiles
    FOR UPDATE TO authenticated
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- 文章表
CREATE TABLE IF NOT EXISTS vibeCoding_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  author_id uuid REFERENCES vibeCoding_users(id) ON DELETE CASCADE,
  category text NOT NULL,
  tags text[],
  is_published boolean DEFAULT false,
  views integer DEFAULT 0,
  likes integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE vibeCoding_articles ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "所有人可以查看已发布的文章" ON vibeCoding_articles
    FOR SELECT TO public
    USING (is_published = true);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "作者可以管理自己的文章" ON vibeCoding_articles
    FOR ALL TO authenticated
    USING (auth.uid() = author_id);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- 评论表
CREATE TABLE IF NOT EXISTS vibeCoding_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content text NOT NULL,
  author_id uuid REFERENCES vibeCoding_users(id) ON DELETE CASCADE,
  article_id uuid REFERENCES vibeCoding_articles(id) ON DELETE CASCADE,
  parent_id uuid REFERENCES vibeCoding_comments(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE vibeCoding_comments ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "所有人可以查看评论" ON vibeCoding_comments
    FOR SELECT TO public
    USING (true);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "已登录用户可以发表评论" ON vibeCoding_comments
    FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = author_id);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "作者可以管理自己的评论" ON vibeCoding_comments
    FOR ALL TO authenticated
    USING (auth.uid() = author_id);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- 教程表
CREATE TABLE IF NOT EXISTS vibeCoding_tutorials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  content text NOT NULL,
  author_id uuid REFERENCES vibeCoding_users(id) ON DELETE CASCADE,
  level text NOT NULL,
  category text NOT NULL,
  duration integer NOT NULL,
  is_published boolean DEFAULT false,
  views integer DEFAULT 0,
  likes integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE vibeCoding_tutorials ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "所有人可以查看已发布的教程" ON vibeCoding_tutorials
    FOR SELECT TO public
    USING (is_published = true);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "作者可以管理自己的教程" ON vibeCoding_tutorials
    FOR ALL TO authenticated
    USING (auth.uid() = author_id);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- 学习进度表
CREATE TABLE IF NOT EXISTS vibeCoding_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES vibeCoding_users(id) ON DELETE CASCADE,
  tutorial_id uuid REFERENCES vibeCoding_tutorials(id) ON DELETE CASCADE,
  progress integer DEFAULT 0,
  completed boolean DEFAULT false,
  last_accessed timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, tutorial_id)
);

ALTER TABLE vibeCoding_progress ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "用户可以查看自己的进度" ON vibeCoding_progress
    FOR SELECT TO authenticated
    USING (auth.uid() = user_id);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "用户可以更新自己的进度" ON vibeCoding_progress
    FOR ALL TO authenticated
    USING (auth.uid() = user_id);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- 收藏表
CREATE TABLE IF NOT EXISTS vibeCoding_bookmarks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES vibeCoding_users(id) ON DELETE CASCADE,
  article_id uuid REFERENCES vibeCoding_articles(id) ON DELETE CASCADE,
  tutorial_id uuid REFERENCES vibeCoding_tutorials(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, article_id),
  UNIQUE(user_id, tutorial_id),
  CHECK (
    (article_id IS NOT NULL AND tutorial_id IS NULL) OR
    (article_id IS NULL AND tutorial_id IS NOT NULL)
  )
);

ALTER TABLE vibeCoding_bookmarks ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "用户可以管理自己的收藏" ON vibeCoding_bookmarks
    FOR ALL TO authenticated
    USING (auth.uid() = user_id);
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- 创建更新时间触发器函数
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 为所有需要更新时间的表添加触发器
DO $$ BEGIN
  CREATE TRIGGER update_vibeCoding_users_updated_at
    BEFORE UPDATE ON vibeCoding_users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TRIGGER update_vibeCoding_profiles_updated_at
    BEFORE UPDATE ON vibeCoding_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TRIGGER update_vibeCoding_articles_updated_at
    BEFORE UPDATE ON vibeCoding_articles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TRIGGER update_vibeCoding_comments_updated_at
    BEFORE UPDATE ON vibeCoding_comments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TRIGGER update_vibeCoding_tutorials_updated_at
    BEFORE UPDATE ON vibeCoding_tutorials
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TRIGGER update_vibeCoding_progress_updated_at
    BEFORE UPDATE ON vibeCoding_progress
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;