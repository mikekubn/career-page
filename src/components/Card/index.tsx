import React from 'react';

interface ICard {
  children: React.ReactNode,
  handleClick?: () => void,
}

const Card = ({ children, handleClick }: ICard): React.ReactElement => (
  <section
    onClick={handleClick}
    className="card border-sky500/5 shadow-sky500/5 hover:shadow-sky500/20 hover:bg-transparent/10"
  >
    {children}
  </section>
);

export default Card;
