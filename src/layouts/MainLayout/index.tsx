import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <div className="flex-col-1">
    {children}
  </div>
);

export default MainLayout;
