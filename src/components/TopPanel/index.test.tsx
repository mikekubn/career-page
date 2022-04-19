import { screen, render } from '@testing-library/react';
import TopPanel from '@/components/TopPanel';

describe('Top panel', () => {
  it('render visible top panel', () => {
    render(
      <TopPanel />,
    );

    expect(screen.getByTestId('top-panel')).toHaveClass('fixed top-0 left-0 z-50 flex flex-row items-center w-full px-7 h-14');
  });
});
