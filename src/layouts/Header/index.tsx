import React from 'react';
import Navigation from '@/components/Navigation';

const Header = (): React.ReactElement => {
  return (
    <div className="sticky top-0 h-20 z-50 bg-gradient-to-b from-blue flex justify-center items-center">
      <Navigation />
    </div>
  );
};

export default Header;
