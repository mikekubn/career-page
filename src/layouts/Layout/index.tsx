import React from 'react';
import { waves } from '@/components/Waves';
import clsx from 'clsx';

const MainLayout = ({ children, className }: { children: React.ReactNode; className?: string }): React.ReactElement => {
  React.useEffect(() => {
    waves();
  }, []);

  return (
    <main className={clsx(className, { ['relative flex flex-col flex-1']: true })}>
      <div className="waves dark-mode" />
      {children}
    </main>
  );
};

export default MainLayout;
