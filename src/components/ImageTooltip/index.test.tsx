import { render, screen } from '@testing-library/react';
import ImageTooltip from '.';

describe('Image tooltip', () => {
  it('render image tooltip', () => {
    render(<ImageTooltip root="root" alt="Unit" tooltip="Test" positon="center" rtl />);

    // TODO Mock observe
    // expect(observe).toHaveBeenCalled();
    expect(screen.getAllByTestId('image-tooltip-img')).toBeInTheDocument();
    expect(screen.getAllByTestId('image-tooltip-tooltip')).toBeInTheDocument();
  });
});
