import React from 'react';

export const name = 'Michael Kubín';
export const position = 'Frontend developer';

const Name = ({ post }: { post?: string }): React.ReactElement => (
  <div className="justify-center flex-col-1 sm:items-center md:items-start lg:items-start">
    <h1 data-cy="name" data-testid="name" className="pt-5 pb-10 text-6xl font-Asap">{name}</h1>
    <p data-cy="position" data-testid="position" className="text-3xl italic font-AsapItal">{post?.length ? post : position}</p>
  </div>
);

export default Name;
