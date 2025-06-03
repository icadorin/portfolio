import { useState, useEffect, useRef } from 'react';

export function useHeaderScroll() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);
  const lastScrollY = useRef(0);
  const isProgrammaticScroll = useRef(false);

  const handleScroll = () => {
    if (isProgrammaticScroll.current) return;

    const currentScrollY = window.scrollY;
    const scrolledDown = currentScrollY > lastScrollY.current;
    const nearTop = currentScrollY < 30;

    setIsVisible(!scrolledDown || nearTop);
    setHasShadow(currentScrollY > 10);

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    isVisible,
    hasShadow,
    isProgrammaticScroll,
    setIsProgrammaticScroll: (value: boolean) => {
      isProgrammaticScroll.current = value;
    },
  };
}
