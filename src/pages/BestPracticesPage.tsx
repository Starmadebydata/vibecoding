import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowLeft, CheckCircle, XCircle, AlertCircle, Code, Terminal, Brain, MessageSquare, Zap, FileCode, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const BestPracticesPage: React.FC = () => {
  const { theme } = useTheme();
  
  const practices = [
    {
      title: "提示工程最佳实践",
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      description: "编写高效提示词的技巧和方法",
      practices: [
        {
          do: [
            "使用清晰、具体的指令",
            "提供上下文和背景信息",
            "分解复杂任务为多个步骤",
            "指定输出格式和风格"
          ],
          dont: [
            "使用模糊不清的描述",
            "省略重要的技术细节",
            "一次请求过多功能",
            "使用不必要的复杂语言"
          ]
        }
      ]
    },
    {
      title: "代码生成最佳实践",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      description: "使用 AI 生成高质量代码的方法",
      practices: [
        {
          do: [
            "指定编程语言、框架和版本",
            "提供代码风格和命名约定",
            "要求包含注释和文档",
            "分批生成代码，逐步构建"
          ],
          dont: [
            "接受未经审查的代码",
            "忽略错误处理和边缘情况",
            "生成过于复杂的单个函数",
            "跳过代码测试和验证"
          ]
        }
      ]
    },
    {
      title: "代码审查与优化",
      icon: <FileCode className="w-6 h-6 text-green-500" />,
      description: "使用 AI 审查和优化代码的策略",
      practices: [
        {
          do: [
            "要求 AI 解释生成的代码",
            "寻求性能优化建议",
            "请求多种实现方案对比",
            "使用 AI 识别潜在的安全问题"
          ],
          dont: [
            "忽略 AI 提出的警告",
            "跳过对关键代码的人工审查",
            "过度优化不重要的部分",
            "盲目接受所有优化建议"
          ]
        }
      ]
    },
    {
      title: "AI 辅助调试",
      icon: <Terminal className="w-6 h-6 text-red-500" />,
      description: "使用 AI 高效调试代码的方法",
      practices: [
        {
          do: [
            "提供完整的错误信息和堆栈跟踪",
            "描述预期行为和实际行为",
            "分享相关代码上下文",
            "询问多种可能的解决方案"
          ],
          dont: [
            "只提供错误消息而无上下文",
            "忽略 AI 的澄清问题",
            "应用修复而不理解根本原因",
            "过度依赖 AI 而不学习调试技能"
          ]
        }
      ]
    },
    {
      title: "AI 与开发流程集成",
      icon: <Workflow className="w-6 h-6 text-amber-500" />,
      description: "将 AI 工具集成到开发流程中的最佳实践",
      practices: [
        {
          do: [
            "建立团队 AI 使用指南",
            "在代码审查中标记 AI 生成的代码",
            "使用版本控制跟踪 AI 贡献",
            "定期评估 AI 工具的效果"
          ],
          dont: [
            "在没有人工审查的情况下部署 AI 代码",
            "对 AI 能力过度承诺",
            "忽略团队成员的 AI 工具培训",
            "让 AI 替代团队协作和讨论"
          ]
        }
      ]
    }
  ];

  const examples = [
    {
      title: "有效的提示示例",
      content: `我需要一个 React 组件，用于显示产品列表。要求：
1. 使用 TypeScript 和函数式组件
2. 支持分页、排序和筛选功能
3. 响应式设计，适配移动端和桌面端
4. 使用 Tailwind CSS 进行样式设计
5. 包含适当的错误处理和加载状态

请首先创建组件的基本结构和类型定义。`,
      type: "good"
    },
    {
      title: "低效的提示示例",
      content: `帮我做一个产品列表组件。`,
      type: "bad"
    },
    {
      title: "有效的代码生成提示",
      content: `请使用 Node.js 和 Express 创建一个 RESTful API 端点，用于用户注册。要求：
1. 验证电子邮件和密码
2. 密码加密存储
3. 生成 JWT 令牌
4. 错误处理
5. 遵循 MVC 架构模式

请使用 async/await 语法，并添加适当的注释。`,
      type: "good"
    },
    {
      title: "低效的代码生成提示",
      content: `写一个用户注册 API。`,
      type: "bad"
    }
  ];

  return (
    <div className={`min-h-screen w-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <Link to="/" className={`flex items-center text-sm font-medium ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
            <ArrowLeft className="w-4 h-4 mr-1" />
            返回首页
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              AI 编程最佳实践
            </span>
          </h1>
          <p className={`mt-4 text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            提高 AI 辅助编程效率和质量的关键策略和方法
          </p>
        </div>

        <div className="mb-16">
          <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'} mb-8`}>
            <h2 className="text-2xl font-bold mb-6">为什么最佳实践很重要？</h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              AI 编程工具虽然强大，但其输出质量很大程度上取决于你如何使用它们。遵循最佳实践可以帮助你：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                <div className="flex items-center mb-3">
                  <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                  <h3 className="font-bold">提高效率</h3>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  减少反复修改的时间，更快地获得满意的代码输出。
                </p>
              </div>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                <div className="flex items-center mb-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <h3 className="font-bold">提升质量</h3>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  获得更高质量、更可靠、更安全的代码输出。
                </p>
              </div>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                <div className="flex items-center mb-3">
                  <MessageSquare className="w-5 h-5 text-blue-500 mr-2" />
                  <h3 className="font-bold">改善协作</h3>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  建立团队共同的 AI 使用标准，提高协作效率。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12 mb-16">
          {practices.map((practice, index) => (
            <div key={index} className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'}`}>
              <div className="flex items-start mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} mr-4`}>
                  {practice.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{practice.title}</h2>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {practice.description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-green-900/20 border border-green-800/30' : 'bg-green-50 border border-green-100'}`}>
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    推荐做法
                  </h3>
                  <ul className="space-y-3">
                    {practice.practices[0].do.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-red-900/20 border border-red-800/30' : 'bg-red-50 border border-red-100'}`}>
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <XCircle className="w-5 h-5 text-red-500 mr-2" />
                    避免做法
                  </h3>
                  <ul className="space-y-3">
                    {practice.practices[0].dont.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              提示词示例
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl ${
                  theme === 'dark' 
                    ? example.type === 'good' 
                      ? 'bg-green-900/20 border border-green-800/30' 
                      : 'bg-red-900/20 border border-red-800/30'
                    : example.type === 'good'
                      ? 'bg-green-50 border border-green-100'
                      : 'bg-red-50 border border-red-100'
                }`}
              >
                <div className="flex items-center mb-4">
                  {example.type === 'good' ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mr-2" />
                  )}
                  <h3 className="font-bold text-lg">{example.title}</h3>
                </div>
                <div className={`p-4 rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-700' 
                    : 'bg-gray-100'
                } font-mono text-sm whitespace-pre-wrap`}>
                  {example.content}
                </div>
                {example.type === 'bad' && (
                  <div className="mt-4 flex items-start">
                    <AlertCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      这个提示过于简短和模糊，缺乏必要的细节和要求，很可能导致 AI 生成不符合预期的代码。
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'} mb-16`}>
          <h2 className="text-2xl font-bold mb-6 text-center">常见问题</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>如何判断 AI 生成的代码质量？</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                评估 AI 生成代码的关键指标包括：代码可读性、性能效率、安全性、错误处理、可维护性和测试覆盖率。始终对生成的代码进行审查，并在可能的情况下运行测试。
              </p>
            </div>
            <div>
              <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>如何处理 AI 生成的不正确代码？</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                当 AI 生成不正确的代码时，不要简单放弃，而是提供具体的错误信息和期望结果，要求 AI 修复。这种迭代过程不仅能得到更好的代码，还能帮助你理解问题所在。
              </p>
            </div>
            <div>
              <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>团队中如何统一 AI 编程实践？</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                建立团队 AI 使用指南，包括推荐的工具、提示模板和代码审查标准。定期分享成功案例和经验教训，并考虑创建团队共享的提示词库和最佳实践文档。
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              开始应用最佳实践
            </span>
          </h2>
          <p className={`mb-8 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            现在你已经了解了 AI 编程的最佳实践，是时候将它们应用到你的项目中了。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/tools"
              className="px-8 py-3 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg transform transition-all duration-200 hover:scale-105 text-center"
            >
              探索 AI 工具
            </Link>
            <Link 
              to="/tutorials"
              className={`px-8 py-3 rounded-lg font-medium ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} shadow-lg transform transition-all duration-200 hover:scale-105 text-center`}
            >
              查看教程
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPracticesPage;