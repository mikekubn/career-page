import React from 'react';
import { waves } from '@/components/Waves';

const MainLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  React.useEffect(() => {
    waves();
  }, []);

  return (
    <main className="relative flex flex-col flex-1">
      <div className="waves dark-mode" />
      {children}
    </main>
  );
};

export default MainLayout;
