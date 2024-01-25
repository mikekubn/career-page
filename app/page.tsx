import { getPosts } from 'utils';
import Cooperation from './components/Company';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Posts from './components/Posts';
import WhoIam from './components/WhoIam';
import Technology from './components/Technology';

export const revalidate = 3600;

const getPostsData = async () => {
  const posts = await getPosts();
  return posts;
};

const Home = async (): Promise<React.ReactElement> => {
  const posts = await getPostsData();

  return (
    <section className="flex flex-1 flex-col justify-center items-center">
      <Intro />
      <Posts posts={posts} />
      <div className="mt-44 md:mt-0" />
      <div className="min-h-screen flex flex-col gap-10 md:gap-20">
        <WhoIam />
        <Technology />
      </div>
      <Cooperation />
      <Contact />
    </section>
  );
};
export default Home;
