import React from 'react';

const useMatchMedia = () => {
  const [dakrMode, setDarkMode] = React.useState<boolean>();

  React.useEffect(() => {
    if (typeof window !== undefined) {
      const matche = window.matchMedia('(prefers-color-scheme: dark)').matches;

      setDarkMode(matche);
    }
  }, []);

  return {
    dakrMode,
  };
};

export { useMatchMedia };
