import React from 'react';
import clsx from 'clsx';

type ITypographyHeading = React.PropsWithChildren<Partial<Pick<HTMLHeadingElement, 'className'>>>;

export const H1 = ({ children, className }: ITypographyHeading): React.ReactElement => (
  <h1
    className={clsx(className, {
      ['text-6xl md:text-8xl']: true,
    })}>
    {children}
  </h1>
);

export const H2 = ({ children, className }: ITypographyHeading): React.ReactElement => (
  <h2
    className={clsx(className, {
      ['text-5xl md:text-7xl']: true,
    })}>
    {children}
  </h2>
);

export const H3 = ({ children, className }: ITypographyHeading): React.ReactElement => (
  <h3
    className={clsx(className, {
      ['text-4xl md:text-6xl']: true,
    })}>
    {children}
  </h3>
);

export const H4 = ({ children, className }: ITypographyHeading): React.ReactElement => (
  <h4
    className={clsx(className, {
      ['text-3xl md:text-5xl']: true,
    })}>
    {children}
  </h4>
);

export const H5 = ({ children, className }: ITypographyHeading): React.ReactElement => (
  <h5
    className={clsx(className, {
      ['text-2xl md:text-4xl']: true,
    })}>
    {children}
  </h5>
);

type ITypographyParagraph = React.PropsWithChildren<Partial<Pick<HTMLParagraphElement, 'className'>>>;

export const ParagraphExtraSmall = ({ children, className }: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      ['text-xs']: true,
    })}>
    {children}
  </p>
);

export const ParagraphSmall = ({ children, className }: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      ['text-sm']: true,
    })}>
    {children}
  </p>
);

export const ParagraphBase = ({ children, className }: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      ['text-base']: true,
    })}>
    {children}
  </p>
);

export const ParagraphLarge = ({ children, className }: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      ['text-base md:text-lg']: true,
    })}>
    {children}
  </p>
);

export const ParagrapExtrahLarge = ({ children, className }: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      ['text-2xl md:text-3xl']: true,
    })}>
    {children}
  </p>
);

interface ITypographyProse {
  children: string | React.ReactNode;
  custom?: boolean;
  className?: string;
}

export const Prose = ({ children, className, custom = false }: ITypographyProse): React.ReactElement => (
  <article
    className={clsx(className, {
      ['prose max-w-none dark:text-white']: !custom,
      [prose.h1]: true,
      [prose.h2]: true,
      [prose.h3]: true,
      [prose.h4]: true,
      [prose.h5]: true,
      [prose.a]: true,
      [prose.blockquote]: true,
      [prose.p]: !custom,
      [prose.strong]: true,
    })}>
    {children}
  </article>
);

const prose = {
  h1: 'prose-h1:text-5xl dark:prose-h1-text-white',
  h2: 'prose-h2:text-4xl',
  h3: 'prose-h3:text-3xl',
  h4: 'prose-h4:text-2xl',
  h5: 'prose-h5:text-xl',
  p: 'prose-p:text-xl',
  a: 'prose-a:text-lg prose-a:text-blue hover:prose-a:text-pink',
  blockquote: 'prose-blockquote:text-base',
  strong: 'prose-strong:font-bold',
};

interface IButton extends Omit<HTMLButtonElement, 'children'> {
  children: string | React.ReactNode;
  onClick: () => void;
}

export const Button = (props: Partial<IButton>) => {
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
