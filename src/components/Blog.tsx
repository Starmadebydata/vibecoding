import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Calendar, User, Tag, ArrowRight, Book, Code, Sparkles, BookOpen, Brain, Terminal } from 'lucide-react';

const Blog: React.FC = () => {
  const { theme } = useTheme();
  
  const articles = [
    {
      id: 1,
      title: '提示工程完全指南',
      excerpt: '深入探讨如何编写高质量的提示词，包括最佳实践和常见陷阱。',
      date: '2024-03-15',
      author: 'AI 编程专家',
      category: '提示工程',
      readTime: '15 分钟',
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'AI 编程工具对比：2024版',
      excerpt: '最新 AI 编程工具的深度对比分析，帮助开发者选择合适的工具。',
      date: '2024-03-12',
      author: '技术评测组',
      category: '工具评测',
      readTime: '12 分钟',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'AI 代码重构最佳实践',
      excerpt: '使用 AI 工具进行代码重构的实用技巧和注意事项。',
      date: '2024-03-10',
      author: '架构师小组',
      category: '最佳实践',
      readTime: '10 分钟',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
  
  const categories = [
    { name: '入门指南', icon: <BookOpen className="w-4 h-4" />, count: 15 },
    { name: '工具使用', icon: <Terminal className="w-4 h-4" />, count: 12 },
    { name: '提示工程', icon: <Brain className="w-4 h-4" />, count: 18 },
    { name: '最佳实践', icon: <Sparkles className="w-4 h-4" />, count: 20 }
  ];

  return (
    <section id="articles" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              精选文章
            </span>
          </h2>
          <p className={`mt-2 max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            深入的技术文章和实践经验分享
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className={`rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gray-800 border border-gray-700'
                      : 'bg-white border border-gray-200 shadow-lg'
                  }`}
                >
                  <div className="relative h-48 sm:h-64">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {article.date}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {article.author}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <Book className="w-4 h-4 mr-2 text-gray-400" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 hover:text-purple-500 transition-colors duration-200">
                      <a href={`/articles/${article.id}`}>{article.title}</a>
                    </h3>
                    
                    <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        theme === 'dark' ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'
                      }`}>
                        <Tag className="w-4 h-4 mr-1" />
                        {article.category}
                      </span>
                      
                      <a
                        href={`/articles/${article.id}`}
                        className="inline-flex items-center text-purple-500 hover:text-purple-600 transition-colors duration-200"
                      >
                        阅读全文
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className={`rounded-xl p-6 ${
              theme === 'dark'
                ? 'bg-gray-800 border border-gray-700'
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <h3 className="text-lg font-bold mb-4">知识分类</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a
                      href={`/articles/category/${category.name}`}
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                        theme === 'dark'
                          ? 'hover:bg-gray-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        {category.icon}
                        <span className="ml-2">{category.name}</span>
                      </div>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`mt-6 rounded-xl p-6 ${
              theme === 'dark'
                ? 'bg-gray-800 border border-gray-700'
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <h3 className="text-lg font-bold mb-4">订阅更新</h3>
              <p className={`mb-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                订阅我们的更新，获取最新的 AI 编程技术文章和教程。
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={`w-full px-4 py-2 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600'
                      : 'bg-gray-50 border-gray-200'
                  } border focus:outline-none focus:ring-2 focus:ring-purple-500`}
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-200"
                >
                  订阅
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;