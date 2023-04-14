import { ParagraphSmall } from './Typography';

const Footer = (): React.ReactElement => (
  <footer className="py-6 sm:px-4 px-2 text-center block cursor-default">
    <ParagraphSmall font="regular" className="bg-gradient-to-r from-blue to-light-blue gradient-text">
      Powered by{' '}
      <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
        Next.js
      </a>{' '}
      and{' '}
      <a href="https://vercel.com/home" target="_blank" rel="noreferrer">
        Vercel
      </a>
      .
    </ParagraphSmall>
    <ParagraphSmall font="regular" className="bg-gradient-to-r from-purple to-light-blue gradient-text">
      Created by{' '}
      <a href="https://mikekubn.cz/" target="_blank" rel="noreferrer">
        Michael Kubin
      </a>
      .
    </ParagraphSmall>
  </footer>
);

export default Footer;
