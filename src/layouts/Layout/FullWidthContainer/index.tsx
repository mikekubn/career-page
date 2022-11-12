import React from 'react';
import clsx from 'clsx';

interface IFullWidthContainer extends React.PropsWithChildren {
  className?: string;
}

const FullWidthContainer = ({ children, className }: IFullWidthContainer): React.ReactElement => (
  <section className={clsx(className, { [styles.base]: true })}>{children}</section>
);

export default FullWidthContainer;

const styles = {
  base: 'w-full',
};
