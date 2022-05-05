import { screen, renderHook, act } from '@testing-library/react';
import React from 'react';
import {
  INotificaiton, NotificationProvider, useNotificationProvider, NotificaitonBox,
} from '@/provider/NotificationProvider/index';

const default_state_notification: INotificaiton = { visible: false, status: 'undefined', note: '' };
const succes_state_notification: INotificaiton = { visible: true, status: 'success', note: 'Test success.' };
const error_state_notification: INotificaiton = { visible: true, status: 'error', note: 'Test success.' };

describe('Notification provider', () => {
  it('verify success notification provider', () => {
    jest.useFakeTimers();

    const wrapper = ({ children }: { children: React.ReactNode }) => <NotificationProvider>{children}</NotificationProvider>;
    const { result } = renderHook(() => useNotificationProvider(), { wrapper });

    expect(result.current.state).toEqual(default_state_notification);

    act(() => {
      result.current.dispatch(succes_state_notification);
    });

    expect(result.current.state).toEqual(succes_state_notification);
    expect(result.current.state).not.toEqual(default_state_notification);
    expect(result.current.state).not.toEqual(error_state_notification);

    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(result.current.state).toEqual(default_state_notification);
    expect(result.current.state).not.toEqual(error_state_notification);
  });

  it('verify success notification provider', () => {
    jest.useFakeTimers();

    const wrapper = ({ children }: { children: React.ReactNode }) => <NotificationProvider>{children}</NotificationProvider>;
    const { result } = renderHook(() => useNotificationProvider(), { wrapper });

    expect(result.current.state).toEqual(default_state_notification);

    act(() => {
      result.current.dispatch(error_state_notification);
    });

    expect(result.current.state).toEqual(error_state_notification);
    expect(result.current.state).not.toEqual(default_state_notification);
    expect(result.current.state).not.toEqual(succes_state_notification);

    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(result.current.state).toEqual(default_state_notification);
    expect(result.current.state).not.toEqual(succes_state_notification);
  });

  it('render notification', () => {
    jest.useFakeTimers();
    const wrapper = ({ children }: { children: React.ReactNode }) => <NotificationProvider>{children}</NotificationProvider>;
    const { result } = renderHook(() => useNotificationProvider(), { wrapper });

    act(() => {
      result.current.dispatch(succes_state_notification);
    });

    expect(screen.getByTestId('notificaiton-box-note')).toHaveTextContent('Test success.');
    expect(screen.getByTestId('notificaiton-box-image')).toHaveAttribute('alt', 'Notification');

    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(result.current.state).toEqual(default_state_notification);
  });
});
