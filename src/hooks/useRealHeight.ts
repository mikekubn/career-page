import React from 'react';
import { useWindowSize } from './useWindowSize';

const useRealHeight = () => {
  const { height } = useWindowSize();
  const [_height, setRealHeight] = React.useState<number>(height);

  React.useEffect(() => {
    const header = document.getElementById('header-content')?.clientHeight || height;
    const footer = document.getElementById('footer-content')?.clientHeight || height;
    const totalSize = header + footer;

    setRealHeight(() => height - totalSize);
  }, [height]);

  return {
    height: _height,
  };
};

export { useRealHeight };
