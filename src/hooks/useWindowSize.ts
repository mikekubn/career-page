import React from 'react';

interface IWindowSize {
  width: number;
  height: number;
  isMobile: boolean;
}

const useWindowSize = (): IWindowSize => {
  const isSSR = typeof window === 'undefined';
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [size, setSize] = React.useState<{
    height: IWindowSize['height'];
    width: IWindowSize['width'];
  }>({
    height: isSSR ? 1200 : window.innerHeight,
    width: isSSR ? 800 : window.innerWidth,
  });

  const changeWindowSize = () => {
    setSize({ height: window.innerHeight, width: window.innerWidth });
  };

  React.useEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  React.useEffect(() => {
    if (size.width < 767) {
      setIsMobile(true);
    }

    return () => {
      setIsMobile(false);
    };
  }, [size.width]);

  return {
    width: size?.width,
    height: size?.height,
    isMobile,
  };
};

export { useWindowSize };
