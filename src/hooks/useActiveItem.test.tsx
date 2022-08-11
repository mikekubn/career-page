import { menuItemConfig } from '@/configs/navigation';
import { act, fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import { useActiveItem } from './useActiveItem';
import React from 'react';

describe.skip('useActiveItem', () => {
  it('hook - active item', () => {
    const { result } = renderHook(() => useActiveItem());
    const { callback, items } = result.current;

    const Component = () => {
      return <button onClick={() => callback({ url: '/blog' })}>Click</button>;
    };

    const { getByRole } = render(<Component />);

    const button = getByRole('button');

    fireEvent.click(button);
  });
});
