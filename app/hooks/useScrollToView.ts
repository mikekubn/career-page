'use client';

import React from 'react';

interface IReturnScrollIntoView {
  scroll: (to: string) => void;
}

export const useScrollIntoView = (): IReturnScrollIntoView => {
  const [scrollToId, setScrollToId] = React.useState<string>('');
  const [scrollIntoView, setScrollIntoView] = React.useState(false);

  const setScroll = React.useCallback((to: string): void => {
    if (to) {
      setScrollToId(to);
      setScrollIntoView(true);
    }
  }, []);

  React.useEffect(() => {
    const element = document.getElementById(scrollToId);

    if (scrollIntoView) {
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }

    return () => {
      setScrollToId('');
      setScrollIntoView(false);
    };
  }, [scrollIntoView, scrollToId]);

  return { scroll: setScroll };
};
