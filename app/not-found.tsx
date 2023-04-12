import { H2, ParagraphLarge } from './components/Typography';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = (): React.ReactElement => (
  <section className="flex flex-1 flex-col items-center justify-center">
    <H2 font="regular" className="gradient-text">
      Not Found
    </H2>
    <Image loading="eager" src="/assets/not_found.gif" width="700" height="450" alt="Not found" className="rounded-3xl my-10 md:my-14" />
    <div className="inline-flex text-center">
      <ParagraphLarge font="regular" className="gradient-blue-text">
        Could not find requested resource
      </ParagraphLarge>
      &nbsp;
      <Link className="gradient-blue-text hover:to-purple" href="/">
        <ParagraphLarge font="regular" className="gradient-blue-text hover:to-purple">
          go home.
        </ParagraphLarge>
      </Link>
    </div>
  </section>
);

export default NotFound;
