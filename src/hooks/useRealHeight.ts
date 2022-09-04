import React from 'react';
import { useWindowSize } from './useWindowSize';

const useRealHeight = () => {
  const { height: clientHight } = useWindowSize();
  const [realHeight, setRealHeight] = React.useState<number>(1000);

  React.useEffect(() => {
    const header = document.getElementById('header-content')?.clientHeight || clientHight;
    const footer = document.getElementById('footer-content')?.clientHeight || clientHight;
    const totalSize = header + footer;

    setRealHeight(() => clientHight - header);
  });

  React.useEffect(() => {
    const header = document.getElementById('header-content')?.clientHeight || clientHight;
    const footer = document.getElementById('footer-content')?.clientHeight || clientHight;
    const totalSize = header + footer;

    if (clientHight) {
      setRealHeight(() => clientHight - header);
    }
  }, [clientHight, setRealHeight]);

  return {
    height: realHeight,
  };
};

export { useRealHeight };
