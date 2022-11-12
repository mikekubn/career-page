import clsx from 'clsx';
import React from 'react';

interface IBlogContainer extends React.PropsWithChildren {
  className?: string;
}

const BlogContainer = ({ className, children }: IBlogContainer): React.ReactElement => {
  return <main className={clsx(className, { ['max-w-3xl mx-auto px-4 lg:px-20']: true })}>{children}</main>;
};

export default BlogContainer;
