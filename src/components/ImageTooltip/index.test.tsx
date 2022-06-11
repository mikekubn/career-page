import { screen, render } from '@testing-library/react';
import ImageTooltip from '.';

describe('Image tooltip', () => {
  it('render image tooltip', () => {
    render(<ImageTooltip root="/root/test.jpg" alt="test_alt" tooltip="Test" positon="center" />);

    expect(screen.getByTestId('image-tooltip-tooltip')).toHaveClass('mt-2 text-xs mx-auto sm:text-sm md:text-sm lg:text-sm');
    expect(screen.getByTestId('image-tooltip-tooltip')).toHaveTextContent('Test');
  });
});
