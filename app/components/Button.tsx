'use client';

import React from 'react';
import clsx from 'clsx';

type ButtonTypes = 'button' | 'submit' | 'reset';

type AnimationType = 'base';

interface IButton {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  type?: ButtonTypes;
  id: string;
  animation?: AnimationType;
  className?: string;
}

const Button = ({ children, onClick, disabled = false, type, id, className, animation = 'base' }: IButton): React.ReactElement => (
  <button
    form={id}
    id={`button-${id}`}
    data-cy={`button-${id}`}
    disabled={disabled}
    type={type}
    onClick={(e): void => onClick?.(e)}
    className={clsx(className, {
      ['animation-base']: animation === 'base',
    })}>
    {children}
  </button>
);

export const ButtonWithGradient = ({ children, onClick, disabled = false, type, id, className }: IButton): React.ReactElement => (
  <Button
    id={id}
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={clsx(className, 'relative overflow-hidden isolate rounded-md md:rounded-lg')}>
    <span className="absolute z-10 bg-black inset-px flex items-center justify-center rounded-md md:rounded-lg">{children}</span>
    <span
      aria-hidden
      className="absolute inset-0 z-0 scale-x-[4.0] blur before:absolute before:inset-0 before:top-1/2 before:animate-disco before:bg-gradient-conic before:from-blue before:via-purple before:to-light-blue"
    />
  </Button>
);

export default Button;
