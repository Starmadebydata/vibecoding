import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Bot, Sparkles, Code, ArrowRight, X } from 'lucide-react';

interface GetStartedProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStarted: React.FC<GetStartedProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const [step, setStep] = useState(1);
  
  const steps = [
    {
      title: '选择你的工具',
      description: '根据你的需求选择合适的 AI 编程工具',
      options: [
        {
          icon: <Bot className="w-6 h-6" />,
          title: 'Cursor',
          description: '强大的 AI 驱动代码编辑器'
        },
        {
          icon: <Code className="w-6 h-6" />,
          title: 'Windsurf',
          description: '专注前端开发的 AI 助手'
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: 'bolt.new',
          description: '在线 AI 编程环境'
        }
      ]
    },
    {
      title: '安装插件',
      description: '添加增强功能的插件',
      options: [
        {
          icon: <Code className="w-6 h-6" />,
          title: 'Cline',
          description: 'AI 代码助手插件'
        },
        {
          icon: <Bot className="w-6 h-6" />,
          title: 'Roo Code',
          description: '代码审查和优化插件'
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: 'Augment Code',
          description: '增强型代码智能助手'
        }
      ]
    }
  ];
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className={`relative w-full max-w-4xl rounded-2xl ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } shadow-2xl`}>
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors duration-200 ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {steps[step - 1].title}
                </span>
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {steps[step - 1].description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps[step - 1].options.map((option, index) => (
                <button
                  key={index}
                  className={`p-6 rounded-xl text-left transition-all duration-200 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    theme === 'dark' ? 'bg-gray-600' : 'bg-white'
                  }`}>
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {option.description}
                  </p>
                </button>
              ))}
            </div>
            
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    theme === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  上一步
                </button>
              )}
              
              <button
                onClick={() => step < steps.length ? setStep(step + 1) : onClose()}
                className="ml-auto px-6 py-2 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center"
              >
                {step < steps.length ? '下一步' : '开始使用'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;