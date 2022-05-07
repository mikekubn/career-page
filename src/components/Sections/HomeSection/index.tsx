import React from 'react';
import Link from 'next/link';
import { jobs_lan_en } from 'src/configs/lan_en';
import Router from 'next/router';
import { hrefs, navigation } from 'src/configs/navigation';
import Card from '@/components/Card';
import Navigation from '@/components/Navigation';
import Name from '@/components/Name';
import JobContent from '@/components/JobContent';
import { useIntersection } from '@/hooks/index';

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
    <div data-cy="home-section" id="home" ref={ref} className="home-layout">
      <div className="home-children">
        <Name />
        <Navigation items={navigation} />
      </div>

      <div className="experience">
        <h1 className="headerH1 mx-auto mt-10 mb-20 lg:mb-10">Experience</h1>
        <div data-cy="experience" className="flex flex-row overflow-auto w-80 sm:w-96 lg:w-[540px] lg:h-[650px] lg:mx-auto lg:flex-col">
          {
            jobs_lan_en.map((job) => (
              <Link key={job.id} href="/experience/[experienceId]" as={`/experience/${job.id}`} passHref>
                <a>
                  <Card>
                    <JobContent data={job} />
                  </Card>
                </a>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
