import { renderHook } from '@testing-library/react';
import { useWindowSize } from './useWindowSize';

describe('useWindowSize mobile', () => {
  beforeEach(() => (global.innerWidth = 450));
  it('is mobile size', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.isMobile).toEqual(true);
  });
});

describe('useWindowSize desktop', () => {
  beforeEach(() => (global.innerWidth = 800));
  it('is desktop size', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.isMobile).toEqual(false);
  });
});
