'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Track {
  id: string;
  title: string;
  url: string;
  duration: number;
}

interface MusicContextType {
  isPlaying: boolean;
  currentTrack: Track | null;
  volume: number;
  tracks: Track[];
  play: () => void;
  pause: () => void;
  next: () => void;
  previous: () => void;
  setTrack: (track: Track) => void;
  setVolume: (volume: number) => void;
}

const defaultTracks: Track[] = [
  {
    id: '1',
    title: '深度专注',
    url: 'https://example.com/focus.mp3',
    duration: 180,
  },
  {
    id: '2',
    title: '雨天编码',
    url: 'https://example.com/rain.mp3',
    duration: 240,
  },
  {
    id: '3',
    title: '环境电子',
    url: 'https://example.com/ambient.mp3',
    duration: 300,
  },
  {
    id: '4',
    title: 'Lo-Fi节拍',
    url: 'https://example.com/lofi.mp3',
    duration: 270,
  },
];

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [volume, setVolume] = useState(0.5);
  const [tracks] = useState<Track[]>(defaultTracks);

  useEffect(() => {
    // Here we would actually initialize and control the audio
    // This is a simplified mock implementation
    return () => {
      // Cleanup
    };
  }, []);

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);
  
  const next = () => {
    if (!currentTrack) {
      setCurrentTrack(tracks[0]);
      return;
    }
    
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
  };
  
  const previous = () => {
    if (!currentTrack) {
      setCurrentTrack(tracks[0]);
      return;
    }
    
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrack(tracks[prevIndex]);
  };

  return (
    <MusicContext.Provider value={{
      isPlaying,
      currentTrack,
      volume,
      tracks,
      play,
      pause,
      next,
      previous,
      setTrack: setCurrentTrack,
      setVolume,
    }}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContext;