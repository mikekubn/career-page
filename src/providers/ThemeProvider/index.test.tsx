import { renderHook, act } from '@testing-library/react-hooks';
import React from 'react';
import { ThemeProvider, useThemeProvider } from '@/provider/ThemeProvider/index';

describe('Theme provider', () => {
  it('verify theme provider', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => <ThemeProvider>{children}</ThemeProvider>;
    const { result } = renderHook(() => useThemeProvider(), { wrapper });

    expect(document.documentElement.classList.contains('dark')).toBe(false);

    act(() => {
      result.current.toggle(true);
    });

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
