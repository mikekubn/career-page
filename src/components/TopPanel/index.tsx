import React from 'react';
import Image from 'next/image';
import ToggleButton from '@/components/ToggleButton';
import { useScroll } from '@/hooks/index';
import { useThemeProvider } from '@/provider/ThemeProvider';

const TopPanel = (): React.ReactElement => {
  const { move } = useScroll();
  const { state, toggle } = useThemeProvider();

  const display = move === 'down' ? 'hidden' : 'flex';

  return (
    <header data-testid="top-panel" className={`fixed top-0 left-0 z-50 ${display} flex-row items-center w-full px-7 h-14`}>
      <div className="flex ml-auto">
        <RenderThemeImage val={state} />
        <ToggleButton value={state} callback={(val) => toggle(val)} />
      </div>
    </header>
  );
};

export default TopPanel;

const ProvideImage = ({ val }: { val: boolean }) => {
  if (val) {
    return (
      <Image data-cy="moon-image" src="/img/moon.png" alt="Moon" height="28" width="28" />
    );
  }

  return (
    <Image data-cy="sun-image" src="/img/sun.png" alt="Sun" height="28" width="28" />
  );
};

const RenderThemeImage = ({ val }: { val: boolean }) => (
  <div className="flex flex-row items-center p-2">
    <ProvideImage val={val} />
  </div>
);
