import React from 'react';
import { clsx } from 'clsx';

const Typography = {
  heading: 'font-title text-xl',
};

const H1 = ({ children, className }: React.PropsWithChildren<Partial<Pick<HTMLHeadingElement, 'className'>>>) => (
  <h1 className={`${Typography.heading} pt-2 text-lg font-semibold ${className}`}>{children}</h1>
);

const H2 = ({ children, className }: React.PropsWithChildren<Partial<Pick<HTMLHeadingElement, 'className'>>>) => (
  <h2 className={`${Typography.heading} text-lg underline underline-offset-4 ${className}`}>{children}</h2>
);

const Time = ({ children, className }: React.PropsWithChildren<Partial<Pick<HTMLTimeElement, 'className'>>>) => (
  <time data-testid="time" className={`text-xs font-light ${className}`}>
    {children}
  </time>
);

const Paragraph = ({ children, className }: React.PropsWithChildren<Partial<Pick<HTMLParagraphElement, 'className'>>>) => (
  <p className={`text-sm font-light ${className}`}>{children}</p>
);

const ArticleParagraph = ({ children, className }: React.PropsWithChildren<Partial<Pick<HTMLParagraphElement, 'className'>>>) => (
  <p className={`text-sm md:text-base lg:text-lg xl:text-lg font-light leading-normal ${className}`}>{children}</p>
);

const LgParagraph = ({ children, className }: React.PropsWithChildren<Partial<Pick<HTMLParagraphElement, 'className'>>>) => (
  <p className={`text-base md:text-lg md:tracking-wide font-light leading-7 md:leading-10 ${className}`}>{children}</p>
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

export { H1, H2, Paragraph, LgParagraph, Time, ArticleParagraph, Button };
