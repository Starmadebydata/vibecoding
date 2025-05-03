/*
  # 初始数据库架构

  1. 新建表
    - `users` - 用户表
      - `id` (uuid, 主键)
      - `email` (text, 唯一)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `diary_entries` - 日记条目表
      - `id` (uuid, 主键)
      - `user_id` (uuid, 外键关联 users)
      - `title` (text)
      - `content` (text)
      - `mood` (text)
      - `image_url` (text)
      - `is_public` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. 安全设置
    - 为所有表启用 RLS
    - 设置适当的访问策略
*/

-- 创建用户表
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 启用 RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- 创建用户访问策略
CREATE POLICY "用户可以读取自己的数据"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- 创建日记条目表
CREATE TABLE IF NOT EXISTS diary_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  title text,
  content text,
  mood text,
  image_url text,
  is_public boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 启用 RLS
ALTER TABLE diary_entries ENABLE ROW LEVEL SECURITY;

-- 创建日记条目访问策略
CREATE POLICY "所有人可以查看公开的日记条目"
  ON diary_entries
  FOR SELECT
  TO public
  USING (is_public = true);

CREATE POLICY "用户可以查看自己的日记条目"
  ON diary_entries
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "用户可以创建自己的日记条目"
  ON diary_entries
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "用户可以更新自己的日记条目"
  ON diary_entries
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "用户可以删除自己的日记条目"
  ON diary_entries
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);