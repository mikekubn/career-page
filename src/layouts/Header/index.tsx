import React from 'react';
import Navigation from '@/components/Navigation';

const Header = (): React.ReactElement => {
  return (
    <div className="sticky top-0 z-20 bg-gradient-to-b from-blue h-14 pt-3 lg:pt-6">
      <Navigation />
    </div>
  );
};

export default Header;
