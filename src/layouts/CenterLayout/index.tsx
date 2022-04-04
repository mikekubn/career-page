import React from 'react';

interface IProps {
  children: React.ReactNode,
}
const CenterLayout = ({ children }: IProps): React.ReactElement => (
  <main className="center-layout-conteiner">
    {children}
  </main>
);

export default CenterLayout;
