import React from 'react';
import clsx from 'clsx';

export type Fonts = 'light' | 'regular' | 'medium' | 'bold';

interface ITypographyHeading extends React.PropsWithChildren<Partial<Pick<HTMLHeadingElement, 'className'>>> {
  font: Fonts;
}

export const H1 = ({ children, className, font }: ITypographyHeading): React.ReactElement => (
  <h1
    className={clsx(className, {
      ['font-metropolis leading-more-loose md:leading-more-loose text-4xl md:text-6xl']: true,
      ['font-light']: font === 'light',
      ['font-normal']: font === 'regular',
      ['font-semibold']: font === 'medium',
      ['font-extrabold']: font === 'bold',
    })}>
    {children}
  </h1>
);

export const H2 = ({ children, className, font }: ITypographyHeading): React.ReactElement => (
  <h2
    className={clsx(className, {
      ['font-metropolis leading-more-loose md:leading-more-loose text-3xl md:text-5xl']: true,
      ['font-light']: font === 'light',
      ['font-normal']: font === 'regular',
      ['font-semibold']: font === 'medium',
      ['font-extrabold']: font === 'bold',
    })}>
    {children}
  </h2>
);

export const H3 = ({ children, className, font }: ITypographyHeading): React.ReactElement => (
  <h3
    className={clsx(className, {
      ['font-inter leading-more-loose md:leading-more-loose text-2xl md:text-4xl']: true,
      ['font-light']: font === 'light',
      ['font-normal']: font === 'regular',
      ['font-semibold']: font === 'medium',
      ['font-extrabold']: font === 'bold',
    })}>
    {children}
  </h3>
);

export const H4 = ({ children, className, font }: ITypographyHeading): React.ReactElement => (
  <h4
    className={clsx(className, {
      ['font-inter leading-more-loose md:leading-more-loose text-xl md:text-3xl']: true,
      ['font-light']: font === 'light',
      ['font-normal']: font === 'regular',
      ['font-semibold']: font === 'medium',
      ['font-extrabold']: font === 'bold',
    })}>
    {children}
  </h4>
);

export const H5 = ({ children, className, font }: ITypographyHeading): React.ReactElement => (
  <h5
    className={clsx(className, {
      ['font-inter leading-more-loose md:leading-more-loose text-base md:text-2xl']: true,
      ['font-light']: font === 'light',
      ['font-normal']: font === 'regular',
      ['font-semibold']: font === 'medium',
      ['font-extrabold']: font === 'bold',
    })}>
    {children}
  </h5>
);

interface ITypographyParagraph extends React.PropsWithChildren<Partial<Pick<HTMLParagraphElement, 'className'>>> {
  font: Fonts;
}

export const ParagraphExtraSmall = ({ children, className, font }: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      ['font-inter leading-more-relaxed md:leading-more-relaxed text-xs']: true,
      ['font-light']: font === 'light',
      ['font-normal']: font === 'regular',
      ['font-semibold']: font === 'medium',
      ['font-extrabold']: font === 'bold',
    })}>
    {children}
  </p>
);

export const ParagraphSmall = ({ children, className, font }: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      ['font-inter leading-more-relaxed md:leading-more-relaxed text-xs md:text-sm']: true,
      ['font-light']: font === 'light',
      ['font-normal']: font === 'regular',
      ['font-semibold']: font === 'medium',
      ['font-extrabold']: font === 'bold',
    })}>
    {children}
  </p>
);

export const ParagraphBase = ({ children, className, font }: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      ['font-inter leading-more-relaxed md:leading-more-relaxed text-sm md:text-base']: true,
      ['font-light']: font === 'light',
      ['font-normal']: font === 'regular',
      ['font-semibold']: font === 'medium',
      ['font-extrabold']: font === 'bold',
    })}>
    {children}
  </p>
);

export const ParagraphLarge = ({ children, className, font }: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      ['font-inter leading-more-relaxed md:leading-more-relaxed text-base md:text-lg']: true,
      ['font-light']: font === 'light',
      ['font-normal']: font === 'regular',
      ['font-semibold']: font === 'medium',
      ['font-extrabold']: font === 'bold',
    })}>
    {children}
  </p>
);

export const ParagrapExtrahLarge = ({ children, className, font }: ITypographyParagraph): React.ReactElement => (
  <p
    className={clsx(className, {
      ['font-inter leading-little-relaxed md:leading-little-relaxed text-2xl md:text-3xl']: true,
      ['font-light']: font === 'light',
      ['font-normal']: font === 'regular',
      ['font-semibold']: font === 'medium',
      ['font-extrabold']: font === 'bold',
    })}>
    {children}
  </p>
);

interface ITypographyProse {
  className?: string;
  children: string | React.ReactNode;
  custom?: boolean;
  imgCustom?: boolean;
}

export const Prose = ({ children, className, imgCustom = false }: ITypographyProse): React.ReactElement => (
  <article
    className={clsx(className, {
      ['prose']: true,
      [prose.h1]: true,
      [prose.h2]: true,
      [prose.h3]: true,
      [prose.h4]: true,
      [prose.h5]: true,
      [prose.a]: true,
      [prose.img]: !imgCustom,
      [prose.blockquote]: true,
      [prose.p]: true,
      [prose.strong]: true,
      [prose.ul]: true,
    })}>
    {children}
  </article>
);

const prose = {
  h1: 'prose-h1:leading-more-loose md:prose-h1:leading-more-loose prose-h1:text-4xl md:prose-h1:text-6xl prose-h1:font-inter prose-h1:text-bright-blue-700',
  h2: 'prose-h2:leading-more-loose md:prose-h2:leading-more-loose prose-h2:text-3xl md:prose-h2:text-5xl prose-h2:font-inter prose-h2:text-bright-blue-700',
  h3: 'prose-h3:leading-more-loose md:prose-h3:leading-more-loose prose-h3:text-2xl md:prose-h3:text-4xl prose-h3:font-inter prose-h3:text-bright-blue-700',
  h4: 'prose-h4:leading-more-loose md:prose-h4:leading-more-loose prose-h4:text-xl md:prose-h4:text-3xl prose-h4:font-inter prose-h4:text-bright-blue-700',
  h5: 'prose-h5:leading-more-loose md:prose-h5:leading-more-loose prose-h5:text-lg md:prose-h5:text-2xl prose-h5:font-inter prose-h5:text-bright-blue-700',
  p: 'md:prose-p:leading-more-relaxed prose-p:leading-more-relaxed prose-p:text-sm md:prose-p:text-base prose-p:text-bright-blue-700 prose-p:font-inter prose-p:font-normal',
  img: 'prose-img:rounded-xl prose-img:mx-auto prose-img:w-[300px] prose-img:h-[250px]',
  a: 'prose-a:leading-more-relaxed md:prose-a:leading-more-relaxed prose-a:text-sm md:prose-a:text-base prose-a:text-primary hover:prose-a:no-underline prose-a:font-inter',
  blockquote:
    'prose-blockquote:leading-more-relaxed md:prose-blockquote:leading-more-relaxed prose-blockquote:text-sm md:prose-blockquote:text-base prose-blockquote:font-inter',
  ul: 'prose-ul:font-inter prose-ul:text-sm md:prose-ul::text-base prose-ol:text-sm md:prose-ol:text-base marker:text-bright-blue-700 prose-ul:text-bright-blue-700 prose-ul:leading-more-relaxed md:prose-ul:leading-more-relaxed prose-ol:leading-more-relaxed md:prose-ol:leading-more-relaxed',
  strong: 'prose-strong:font-inter prose-strong:font-bold prose-strong:text-bright-blue-700',
};
