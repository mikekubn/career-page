import React from 'react';
import Link from 'next/link';
import { jobs_lan_en } from 'src/configs/lan_en';
import Router from 'next/router';
import { hrefs } from 'src/configs/navigation';
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
    <div id="home" ref={ref} className="mt-10 flex-col-1 lg:flex-row-1 lg:mt-0">
      <div className="justify-center flex-col-1 sm:items-center lg:items-start">
        <Name />
        <Navigation />
      </div>
      <div className="justify-center mx-auto mt-5 flex-col-1 sm:items-center">
        <h1 className="mx-auto my-10 text-2xl font-AsapItal lg:mb-10">Work</h1>
        <div className="flex flex-row overflow-auto w-80 sm:w-96 lg:w-full lg:mx-auto lg:flex-col">
          {
            jobs_lan_en.map((job) => (
              <Link key={job.id} href="/experience/[experienceId]" as={`/experience/${job.id}`} passHref>
                <a>
                  <Card>
                    <JobContent modal={false} truncate data={job} />
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
