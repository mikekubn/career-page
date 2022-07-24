import { useWindowSize } from '@/hooks/useWindowSize';
import React from 'react';

const Main = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const { height } = useWindowSize();
  const [_height, setRealHeight] = React.useState<number>(height);

  React.useEffect(() => {
    const header = document.getElementById('header-content')?.clientHeight || height;
    const footer = document.getElementById('footer-content')?.clientHeight || height;
    const totalSize = header + footer;

    setRealHeight(() => height - totalSize);
  }, [height]);

  return (
    <main className={'container block mx-auto mb-auto'} style={{ minHeight: `${_height}px` }}>
      {children}
    </main>
  );
};

export default Main;
