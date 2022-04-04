import React from 'react';

type TResult<T> = [
  undefined | T,
  (value: T) => void
];

type Status = 'success' | 'error';

export interface INotificaiton {
  visible: boolean,
  status: Status,
  note: string
}

const useNotification = (): TResult<INotificaiton> => {
  const [notification, setNotificaiton] = React.useState<INotificaiton>();

  const setValue = ({ visible, status, note }: INotificaiton) => setNotificaiton({ visible, status, note });

  React.useEffect(() => {
    if (notification?.visible) {
      setTimeout(() => setNotificaiton({ ...notification, visible: false }), 1500);
    }
  }, [notification]);

  return [notification, setValue];
};

export { useNotification };
