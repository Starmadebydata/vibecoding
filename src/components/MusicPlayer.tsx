'use client';

import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useMusic } from '../contexts/MusicContext';
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const { theme } = useTheme();
  const { isPlaying, currentTrack, volume, tracks, play, pause, next, previous, setTrack, setVolume } = useMusic();
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const handlePlayPause = () => {
    if (!currentTrack) {
      setTrack(tracks[0]);
      play();
    } else if (isPlaying) {
      pause();
    } else {
      play();
    }
  };
  
  const VolumeIcon = () => {
    if (volume === 0) return <VolumeX />;
    if (volume < 0.5) return <Volume1 />;
    return <Volume2 />;
  };
  
  return (
    <section id="music" className="py-20 bg-gradient-to-b from-transparent to-blue-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              编码氛围音乐
            </span>
          </h2>
          <p className={`mt-2 max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            精选的背景音乐和环境声音，帮助您进入心流状态。
          </p>
        </div>
        
        <div className={`max-w-3xl mx-auto rounded-xl overflow-hidden ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-xl'}`}>
          <div className={`p-6 ${theme === 'dark' ? 'bg-gradient-to-r from-purple-900/30 to-blue-900/30' : 'bg-gradient-to-r from-purple-100 to-blue-100'}`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold">
                  {currentTrack?.title || "选择一个音轨"}
                </h3>
                <p className={`mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  编码氛围音乐
                </p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={previous}
                    className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200`}
                    aria-label="上一首"
                  >
                    <SkipBack className="w-5 h-5" />
                  </button>
                  
                  <button 
                    onClick={handlePlayPause}
                    className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md transition-all duration-200 hover:scale-105"
                    aria-label={isPlaying ? "暂停" : "播放"}
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  
                  <button 
                    onClick={next}
                    className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200`}
                    aria-label="下一首"
                  >
                    <SkipForward className="w-5 h-5" />
                  </button>
                  
                  <div className="relative">
                    <button 
                      onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                      onBlur={() => setTimeout(() => setShowVolumeSlider(false), 200)}
                      className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200`}
                      aria-label="音量"
                    >
                      <VolumeIcon />
                    </button>
                    
                    {showVolumeSlider && (
                      <div className={`absolute bottom-full mb-2 -left-8 w-24 p-2 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volume}
                          onChange={(e) => setVolume(parseFloat(e.target.value))}
                          className="w-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {currentTrack && (
              <div className="mt-6">
                <div className="bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full w-1/3"></div>
                </div>
                <div className="flex justify-between mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <span>0:44</span>
                  <span>{formatTime(currentTrack.duration)}</span>
                </div>
              </div>
            )}
          </div>
          
          <div>
            <ul>
              {tracks.map((track) => (
                <li 
                  key={track.id}
                  onClick={() => {
                    setTrack(track);
                    play();
                  }}
                  className={`px-6 py-4 flex justify-between items-center cursor-pointer ${
                    currentTrack?.id === track.id 
                      ? theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100' 
                      : ''
                  } hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} transition-colors duration-200`}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 ${
                      currentTrack?.id === track.id 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                        : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      {currentTrack?.id === track.id && isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium">{track.title}</h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        环境音乐
                      </p>
                    </div>
                  </div>
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    {formatTime(track.duration)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${
            theme === 'dark' 
              ? 'bg-gray-800 hover:bg-gray-700 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
          }`}>
            浏览更多音乐
          </button>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;