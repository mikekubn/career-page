import Cooperation from 'app/components/Company';
import Contact from 'app/components/Contact';

const PostLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <section className="flex flex-col mt-28 md:mt-32 lg:mt-36">
    {children}
    <Cooperation />
    <Contact />
  </section>
);

export default PostLayout;
