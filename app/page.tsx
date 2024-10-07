import Clients from '@/components/Clients';
import Talk from '@/components/Talk';
import Welcome from '@/components/Welcome';
import Intro from '@/components/Intro';
import Stack from '@/components/Stack';
import Video from '@/components/Video';
import Experience from '@/components/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.the12st.com/',
  },
};

const HomePage = () => (
  <section className="flex flex-col items-center md:items-stretch w-full max-w-screen-lg mx-auto px-6">
    <Intro title="Hello," />
    <Stack />
    <Welcome />
    <Clients title="Where I've been coding" className="mx-auto mb-40 md:mb-60" />
    <Experience />
    <div className="my-20">
      <Video />
    </div>
    <Talk className="mx-auto my-40 md:my-60" />
  </section>
);

export default HomePage;
