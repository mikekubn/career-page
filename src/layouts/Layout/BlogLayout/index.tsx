import React from 'react';

const BlogLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return <main className="bg-white dark:bg-black overflow-x-hidden">{children}</main>;
};

export default BlogLayout;
