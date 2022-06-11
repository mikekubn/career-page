import React from 'react';

interface ICard {
  children: React.ReactNode;
  handleClick?: () => void;
}

const Card = ({ children, handleClick }: ICard): React.ReactElement => (
  <div
    data-cy="card"
    data-testid="card"
    onClick={handleClick}
    className="card border-sky500/5 shadow-sky500 hover:shadow-sky500/20 hover:bg-transparent/10">
    {children}
  </div>
);

export default Card;
