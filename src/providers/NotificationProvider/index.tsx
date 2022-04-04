import React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

interface INotificaitonBox {
  display: boolean,
  note: string,
  img: string,
}

interface INotificaiton {
  visible: boolean,
  status: Status,
  note: string
}

type Status = 'success' | 'error' | 'undefined';

type NotificationProviderProps = {
  children: React.ReactNode,
};

type Notificationtate = {
  state: INotificaiton,
  dispatch: (val: INotificaiton) => void,
};

const DefaultValue: Notificationtate = {
  state: { status: 'undefined', visible: false, note: '' },
  dispatch: () => {},
};

const NotificationContext = React.createContext<Notificationtate | undefined>(DefaultValue);

const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notification, setNotificaiton] = React.useState<INotificaiton>(DefaultValue.state);

  React.useEffect(() => {
    const timetout = setTimeout(() => setNotificaiton(DefaultValue.state), 1500);

    return () => { clearTimeout(timetout); };
  }, [notification]);

  return (
    <NotificationContext.Provider value={{ state: notification, dispatch: (val) => setNotificaiton(val) }}>
      {
        notification
          ? <NotificaitonBox display={notification.visible} note={notification.note} img={notification.status === 'success' ? '/img/success.png' : '/img/error.png'} />
          : null
        }
      {children}
    </NotificationContext.Provider>
  );
};

const useNotificationProvider = () => {
  const context = React.useContext(NotificationContext);

  if (context === undefined) {
    throw new Error('useNotificationProvider must be used within a ThemeProvider');
  }

  return context;
};

const NotificaitonBox = ({ display, img, note }: INotificaitonBox) => (
  <AnimatePresence>
    {
        display ? (
          <motion.div
            key="notification"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: -28, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="fixed right-0 z-50 mt-12"
          >
            <div className="flex items-center px-4 rounded-lg h-9 w-36 lg:w-60 lg:h-11 bg-sky500/5">
              <Image src={img} width={18} height={18} />
              <p className="pl-2 text-sm lg:pl-4">{note}</p>
            </div>
          </motion.div>
        )
          : null
      }
  </AnimatePresence>
);

export { NotificationProvider, useNotificationProvider };
