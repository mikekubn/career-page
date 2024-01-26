'use client';

import React from 'react';

export const useWindowResize = () => {
  let _window: Window & typeof globalThis = {} as Window & typeof globalThis;
  const hasWindow = typeof window !== 'undefined';

  if (hasWindow) {
    _window = window;
  }

  const [windowSize, setWindowSize] = React.useState({ width: _window.innerWidth ?? 0, height: _window.innerHeight ?? 0 });

  React.useEffect(() => {
    if (hasWindow) {
      const handleWindowResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener('resize', handleWindowResize);

      return () => removeEventListener('resize', handleWindowResize);
    }
  }, [hasWindow]);

  return {
    width: windowSize.width,
    height: windowSize.height,
  };
};
