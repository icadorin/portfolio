import { useEffect } from 'react';

export const useMenuScrollControl = (isMenuOpen: boolean) => {
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, parseInt(scrollY.toString()));
      };
    }
  }, [isMenuOpen]);
};
