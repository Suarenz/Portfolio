import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';
import Hls from 'hls.js';

export function Background() {
  const { theme } = useTheme();
  const darkVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (darkVideoRef.current) {
      const videoSrc = 'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8';
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(darkVideoRef.current);
      } else if (darkVideoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        darkVideoRef.current.src = videoSrc;
      }
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Dark Mode Video */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
      >
        <video
          ref={darkVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Light Mode Video */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
      >
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_074327_a4d6275d-82d9-4c83-bfbe-f1fb2213c17c.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
