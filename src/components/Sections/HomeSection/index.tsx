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
    <div data-cy="home-section" id="home" ref={ref} className="mt-10 flex-col-1 lg:flex-row-1 lg:mt-0">
      <div className="justify-center flex-col-1 sm:items-center lg:items-start">
        <Name />
        <Navigation items={navigation} />
      </div>
      <div className="justify-center mx-auto mt-5 flex-col-1 sm:items-center">
        <h1 className="mx-auto my-10 text-2xl font-AsapItal lg:mb-10">Experience</h1>
        <div data-cy="experience" className="flex flex-row overflow-auto h-3/4 w-80 sm:w-96 lg:w-[540px] lg:mx-auto lg:flex-col">
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
