import { useEffect, useRef } from 'react';
import '@styles/matrix-rain.css';

const CHARS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';
const CHAR_COUNT = CHARS.length;
const FONT_SIZE = 14;
const FPS_CAP_DESKTOP = 28;
const FPS_CAP_MOBILE = 20;
const MOBILE_BREAKPOINT = 768;

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    let lastTime = 0;
    let drops: Float32Array;
    let width = 0;
    let height = 0;
    let frameMs = 1000 / FPS_CAP_DESKTOP;

    function init() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;

      const isMobile = width < MOBILE_BREAKPOINT;
      frameMs = 1000 / (isMobile ? FPS_CAP_MOBILE : FPS_CAP_DESKTOP);

      ctx!.fillStyle = '#0a0a0a';
      ctx!.fillRect(0, 0, width, height);
      ctx!.font = `${FONT_SIZE}px monospace`;

      const cols = Math.floor(width / FONT_SIZE);
      drops = new Float32Array(cols);
      for (let i = 0; i < cols; i++) {
        drops[i] = Math.random() * -(height / FONT_SIZE);
      }
    }

    function draw(now: number) {
      rafId = requestAnimationFrame(draw);

      if (now - lastTime < frameMs) return;
      lastTime = now;

      ctx!.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx!.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i++) {
        const y = drops[i];
        if (y < 0) {
          drops[i] += 1;
          continue;
        }

        const x = i * FONT_SIZE;
        const yPx = y * FONT_SIZE;

        ctx!.fillStyle = '#00ff41';
        ctx!.fillText(CHARS[Math.floor(Math.random() * CHAR_COUNT)], x, yPx);

        drops[i] += 1;

        if (yPx > height && Math.random() > 0.975) {
          drops[i] = -Math.floor(Math.random() * (height / FONT_SIZE) * 0.5);
        }
      }
    }

    function start() {
      if (!rafId) rafId = requestAnimationFrame(draw);
    }

    function stop() {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        stop();
      } else {
        lastTime = 0;
        start();
      }
    }

    let resizeTimer = 0;
    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(init, 150);
    }

    init();
    start();
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stop();
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="matrix-rain-wrapper">
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
