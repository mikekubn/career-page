import React from 'react';
import { clsx } from 'clsx';

const Typography = {
  heading: 'font-title text-xl',
};

const H1 = ({ children, className }: React.PropsWithChildren<Partial<Pick<HTMLHeadingElement, 'className'>>>) => (
  <h1 className={`${Typography.heading} text-lg font-semibold ${className}`}>{children}</h1>
);

const H2 = ({ children, className }: React.PropsWithChildren<Partial<Pick<HTMLHeadingElement, 'className'>>>) => (
  <h2 className={`${Typography.heading} text-lg ${className}`}>{children}</h2>
);

const Time = ({ children, className }: React.PropsWithChildren<Partial<Pick<HTMLTimeElement, 'className'>>>) => (
  <time data-testid="time" className={`text-xs font-light ${className}`}>
    {children}
  </time>
);

const Paragraph = ({ children, className }: React.PropsWithChildren<Partial<Pick<HTMLParagraphElement, 'className'>>>) => (
  <p className={`font-light text-sm md:text-base leading-normal ${className}`}>{children}</p>
);

interface IButton extends Omit<HTMLButtonElement, 'children'> {
  children: string | React.ReactNode;
  onClick: () => void;
}

const Button = (props: Partial<IButton>) => {
  const { className, children, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={clsx({
        'bg-blue rounded-full no-underline cursor-pointer hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white transition duration-700 ease-in-out':
          true,
        [className as string]: !!className,
      })}>
      {children}
    </button>
  );
};

export { H1, H2, Paragraph, Time, Button };
