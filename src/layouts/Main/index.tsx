import { useWindowSize } from '@/hooks/useWindowSize';
import React from 'react';

const Main = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const { height } = useWindowSize();
  const [_height, setRealHeight] = React.useState<number>(0);

  React.useEffect(() => {
    const header = document.getElementById('header-content')?.clientHeight || 0;
    const footer = document.getElementById('footer-content')?.clientHeight || 0;
    const totalSize = header + footer;

    setRealHeight(() => height - totalSize);
  }, []);

  return (
    <main className={'container flex flex-1 flex-col mx-auto'} style={{ height: `${_height}px` }}>
      {children}
    </main>
  );
};

export default Main;
