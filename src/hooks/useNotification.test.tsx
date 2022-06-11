import { screen, render, renderHook, act } from '@testing-library/react';
import React from 'react';
import { INotificaiton, useNotification } from './useNotification';

describe('useNotification', () => {
  it('success useNotification', () => {
    const { result } = renderHook(() => useNotification());
    const [, setValue] = result.current;

    act(() => {
      setValue({ visible: true, status: 'success', note: 'Test!' });
    });

    render(<Component notify={result.current[0]} />);

    expect(result.current[0]).toEqual({
      visible: true,
      status: 'success',
      note: 'Test!',
    });
    expect(screen.getByTestId('notification')).toBeInTheDocument();
    expect(screen.getByTestId('notification')).toHaveTextContent('success');
    expect(screen.getByTestId('notification-note')).toHaveTextContent('Test!');
  });

  it('error useNotification', () => {
    const { result } = renderHook(() => useNotification());
    const [, setValue] = result.current;

    act(() => {
      setValue({ visible: true, status: 'error', note: 'Test!' });
    });

    render(<Component notify={result.current[0]} />);

    expect(result.current[0]).toEqual({
      visible: true,
      status: 'error',
      note: 'Test!',
    });
    expect(screen.getByTestId('notification')).toBeInTheDocument();
    expect(screen.getByTestId('notification')).toHaveTextContent('error');
    expect(screen.getByTestId('notification-note')).toHaveTextContent('Test!');
  });

  it('invisible useNotification', () => {
    const { result } = renderHook(() => useNotification());
    const [, setValue] = result.current;

    act(() => {
      setValue({ visible: false, status: 'error', note: 'Test!' });
    });

    render(<Component notify={result.current[0]} />);

    expect(result.current[0]).toEqual({
      visible: false,
      status: 'error',
      note: 'Test!',
    });

    expect(screen.getByTestId('invisible-notification')).toBeInTheDocument();
  });

  it('timeout useNotification', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useNotification());
    const [, setValue] = result.current;

    act(() => {
      setValue({ visible: true, status: 'error', note: 'Test!' });
    });

    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(result.current[0]).toEqual({
      visible: false,
      status: 'error',
      note: 'Test!',
    });
  });
});

const Component = ({ notify }: { notify: INotificaiton | undefined }): React.ReactElement | null => {
  if (!notify?.visible) {
    return <div data-testid="invisible-notification" />;
  }

  return (
    <div data-testid="notification">
      {notify?.status}
      <p data-testid="notification-note">{notify?.note}</p>
    </div>
  );
};
