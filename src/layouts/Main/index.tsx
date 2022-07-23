import React from 'react';

const Main = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <main className="block container mx-auto bg-yellow">{children}</main>
);

export default Main;
