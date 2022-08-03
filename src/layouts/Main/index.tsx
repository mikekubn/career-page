import React from 'react';
import { useRealHeight } from '@/hooks/useRealHeight';

const Main = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const { height } = useRealHeight();

  return (
    <main className={'container block mx-auto mb-auto'} style={{ minHeight: `${height}px` }}>
      {children}
    </main>
  );
};

export default Main;
