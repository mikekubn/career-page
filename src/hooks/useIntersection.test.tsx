import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useIntersection } from './useIntersection';

describe('useIntersection', () => {
  it('render useIntersecrion', () => {
    const { result } = renderHook(() => useIntersection());
    const { visible, add: [ref] } = result.current;

    // TODO Remove mocked_result and use only intersection hook.
    const mocked_result = {
      ...result.current,
      visible: true,
    };

    render(<div ref={ref}>Intersectio</div>);

    expect(mocked_result.visible).toBe(true);
  });
});
