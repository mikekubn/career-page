import Cooperation from './components/Company';
import Contact from './components/Contact';
import Intro from './components/Intro';
import WhoIam from './components/WhoIam';

const Home = async (): Promise<React.ReactElement> => (
  <section className="flex flex-1 flex-col justify-center items-center">
    <Intro />
    <WhoIam />
    <Cooperation />
    <Contact />
  </section>
);

export default Home;
