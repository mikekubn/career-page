import React from 'react';

export const name = 'Michael Kubín';
export const position = 'Frontend developer';

const Name = ({ post }: { post?: string }): React.ReactElement => (
  <div className="flex-col-1 justify-center items-center md:items-start lg:items-start">
    <h1 data-cy="name" data-testid="name" className="font-Asap pt-5 pb-7 text-5xl md:text-6xl md:pt-5 md:pb-10 lg:text-6xl">
      {name}
    </h1>
    <p data-cy="position" data-testid="position" className="italic font-AsapItal text-3xl">
      {post?.length ? post : position}
    </p>
  </div>
);

export default Name;
