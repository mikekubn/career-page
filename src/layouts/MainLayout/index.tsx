import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <main className="mx-auto max-w-7xl block pt-0 p-4 md:p-10 md:py-0 lg:p-20 lg:py-0">{children}</main>
);

export default MainLayout;
