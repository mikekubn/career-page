import React from 'react';
import { jobs_lan_en } from 'src/configs/lan_en';
import Router from 'next/router';
import { hrefs, navigation } from 'src/configs/navigation';
import Navigation from '@/components/Navigation';
import { useIntersection } from '@/hooks/index';
import dynamic from 'next/dynamic';

const Name = dynamic(() => import('@/components/Name'));
const Card = dynamic(() => import('@/components/Card'));
const JobContent = dynamic(() => import('@/components/JobContent'));

const HomeSection = () => {
  const { visible, add: [ref] } = useIntersection();

  React.useEffect(() => {
    if (visible) {
      Router.push({
        pathname: '/',
        hash: hrefs.home,
      }, undefined, { scroll: false });
    }
  }, [visible]);

  return (
    <section data-cy="home-section" id="home" className="section-layout">
      <div ref={ref} className="content-name">
        <Name />
        <Navigation items={navigation} />
      </div>

      <div className="experience">
        <h1 className="headerH1 mx-auto mb-8 lg:mb-10">Experience</h1>
        <div data-cy="experience" className="overflow-auto flex flex-col items-center h-128 p-6">
          {
            jobs_lan_en.map((job) => (
              <Card key={job.id}>
                <JobContent data={job} />
              </Card>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
