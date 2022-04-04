import React from 'react';

const useScroll = () => {
  const [startPositionY, setStartPositionY] = React.useState<number>();
  const [position, setPosition] = React.useState<{ move: 'up' | 'down', num: number }>({ move: 'up', num: 0 });

  React.useEffect(() => {
    const { scrollY } = window;
    setStartPositionY(scrollY);
  }, [startPositionY]);

  const handleScroll = React.useCallback((e: Event) => {
    if (!e.currentTarget) {
      return;
    }

    if (!('scrollY' in e.currentTarget)) {
      return;
    }

    const { scrollY } = e.currentTarget;

    if (startPositionY !== undefined) {
      if (startPositionY > scrollY) {
        setPosition({ move: 'up', num: scrollY });
      } else if (startPositionY < scrollY) {
        setPosition({ move: 'down', num: scrollY });
      }
      setStartPositionY(scrollY);
    }
  }, [startPositionY]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    move: position?.move,
    num: position?.num,
  };
};

export { useScroll };
