import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <div className="min-h-screen flex flex-col">
    {children}
  </div>
);

export default MainLayout;
