import singletonRouter from 'next/router';
import mockRouter from 'next-router-mock';
import { renderHook, waitFor } from '@testing-library/react';
import { useActiveItem } from './useActiveItem';

// Mocking router
jest.mock('next/router', () => require('next-router-mock'));

describe('useActiveItem', () => {
  beforeEach(() => mockRouter.setCurrentUrl('/blog'));

  it('hook - active item', async () => {
    const { result } = renderHook(() => useActiveItem());
    const { items } = result.current;

    await waitFor(() => {
      expect(singletonRouter).toMatchObject({
        asPath: '/blog',
        pathname: '/blog',
      });
    });

    expect(items).toEqual([
      { enabled: true, level: 'main', name: 'Home', url: '/' },
      {
        enabled: true,
        level: 'main',
        name: 'Blog',
        url: '/blog',
        active: true,
      },
      {
        enabled: true,
        level: 'main',
        name: 'Experience',
        url: '/experience',
      },
    ]);
  });
});
