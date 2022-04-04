import React from 'react';

interface IDimension {
  ref: React.MutableRefObject<null>
}

const useDimension = ({ ref }: IDimension) => {
  const getDimension = React.useCallback(() => ({
    width: ref.current ? (ref.current as HTMLElement).offsetWidth : 0,
    height: ref.current ? (ref.current as HTMLElement).offsetHeight : 0,
  }), [ref]);

  const [dimension, setDimension] = React.useState<{ height: number, width: number }>(getDimension());

  const handleResize = React.useCallback(() => {
    setDimension(getDimension());
  }, [getDimension]);

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return dimension;
};

export { useDimension };
