/*
  # 创建 VibeCoding 项目表结构

  1. 新建表
    - vibeCoding_projects: 用户提交的项目信息

  2. 安全
    - 启用 RLS
    - 设置适当的访问策略
*/

-- 项目表
CREATE TABLE IF NOT EXISTS vibeCoding_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES vibeCoding_users(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text NOT NULL,
  project_url text,
  github_url text,
  tech_stack text[],
  image_url text,
  status text DEFAULT 'pending' NOT NULL, -- 'pending', 'approved', 'rejected'
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE vibeCoding_projects ENABLE ROW LEVEL SECURITY;

-- 所有人可以查看已批准的项目
CREATE POLICY "所有人可以查看已批准的项目" ON vibeCoding_projects
  FOR SELECT TO public
  USING (status = 'approved');

-- 用户可以查看自己的项目
CREATE POLICY "用户可以查看自己的项目" ON vibeCoding_projects
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- 用户可以创建自己的项目
CREATE POLICY "用户可以创建自己的项目" ON vibeCoding_projects
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- 用户可以更新自己的项目
CREATE POLICY "用户可以更新自己的项目" ON vibeCoding_projects
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id);

-- 用户可以删除自己的项目
CREATE POLICY "用户可以删除自己的项目" ON vibeCoding_projects
  FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- 为项目表添加更新时间触发器
DO $$ BEGIN
  CREATE TRIGGER update_vibeCoding_projects_updated_at
    BEFORE UPDATE ON vibeCoding_projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;
