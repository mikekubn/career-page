import React from 'react';

interface IOutsideClick {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
}

export const useOutsideClick = ({ ref, callback }: IOutsideClick) => {
  React.useEffect(() => {
    // Invoke Function onClick outside of element

    const handleOutsideClick = ({ target }: MouseEvent) => {
      if (ref.current && !ref.current.contains(target as Node)) {
        callback();
      }
    };

    // Bind
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, callback]);
};
