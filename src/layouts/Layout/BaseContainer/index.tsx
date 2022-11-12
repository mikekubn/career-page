import React from 'react';
import clsx from 'clsx';

interface IBaseContainer extends React.PropsWithChildren {
  className?: string;
}

const BaseContainer = ({ children, className }: IBaseContainer): React.ReactElement => (
  <section className={clsx(className, { [styles.base]: true })}>{children}</section>
);

export default BaseContainer;

const styles = {
  base: 'max-w-6xl mx-auto px-4 xl:px-0',
};
