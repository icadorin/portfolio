import { useState, useEffect, useRef } from 'react';

export function useHeaderScroll() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const isProgrammaticScroll = useRef(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrolledDown = currentScrollY > lastScrollY.current;
    const nearTop = currentScrollY < 30;

    setIsAtTop(currentScrollY === 0);
    const shouldBeVisible = !scrolledDown || nearTop;
    setIsVisible(shouldBeVisible);

    setHasShadow(shouldBeVisible && currentScrollY > 10);

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    isVisible,
    hasShadow,
    isAtTop,
    isProgrammaticScroll,
    setIsProgrammaticScroll: (value: boolean) => {
      isProgrammaticScroll.current = value;
    },
    forceShadowCheck: () => {
      const scrollY = window.scrollY;
      setHasShadow(isVisible && scrollY > 10);
    },
  };
}
