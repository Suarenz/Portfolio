import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Use refs for mouse position to avoid re-renders on every mouse move
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();

  // Smooth interpolation loop
  const animate = useCallback(() => {
    // Cursor ring follows with slight lag (lerp factor 0.15)
    cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
    cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;
    
    // Dot follows with faster lerp (almost instant)
    dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.5;
    dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.5;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
    }
    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px, 0)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || !target.closest) return;

      const cursorElement = target.closest('[data-cursor]') as HTMLElement;
      if (cursorElement) {
        setCursorText(cursorElement.getAttribute('data-cursor') || null);
        setIsHovering(true);
        return;
      }
      
      const isClickable = 
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      if (isClickable) {
        setCursorText(null);
        setIsHovering(true);
      } else {
        setCursorText(null);
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);

    document.body.style.cursor = 'none';
    
    // Start animation loop
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  // Calculate dynamic size/offset based on state
  const getSize = () => {
    if (cursorText) return 80;
    if (isHovering) return 64;
    return 32;
  };
  
  const size = getSize();
  const offset = size / 2;

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-black font-semibold text-[10px] tracking-widest will-change-transform"
        style={{
          width: size,
          height: size,
          marginLeft: -offset,
          marginTop: -offset,
          backgroundColor: cursorText ? 'rgba(255, 255, 255, 1)' : (isHovering ? 'rgba(255, 255, 255, 1)' : 'transparent'),
          border: (!isHovering && !cursorText) ? '2px solid rgba(255, 255, 255, 0.5)' : 'none',
          mixBlendMode: cursorText ? 'normal' : 'difference',
          transition: 'width 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), margin 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), background-color 0.3s ease, border 0.3s ease',
        }}
      >
        <AnimatePresence>
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {/* Small dot in the center */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[10000] mix-blend-difference will-change-transform"
        style={{
          opacity: (isHovering || cursorText) ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  );
}
