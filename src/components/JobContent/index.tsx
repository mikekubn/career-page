import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IJob } from 'src/configs/lan_en';

const JobContent = ({ data }: { data: IJob }): React.ReactElement => {
  const {
    companyName, date, where, position, description, image,
  } = data;

  return (
    <Link aria-label='job-link' href="/experience/[experienceId]" as={`/experience/${data.id}`} passHref>
      <a>
        <div data-testid="job-content" data-cy="job-content" className="inline-block w-full p-3">
          <div className="float-left w-1/4">
            <Image data-cy="image" data-testid="image" src={image} width="60" height="60" priority alt={companyName} />
          </div>
          <div className="float-right w-3/4">
            <h1 data-testid="company-name" data-cy="company-name" className="pb-1 font-AsapItal text-lg">
              {companyName}
            </h1>
            <p data-testid="date" data-cy="date" className="italic font-Asap text-sm">
              {date}
            </p>
            <p data-testid="where" data-cy="where"className="italic font-Asap text-sm">
              {where}
            </p>
            <h1 data-testid="position" data-cy="position" className="pt-5 pb-2 font-bold font-AsapItal text-lg">
              {position}
            </h1>
            <p data-testid="description" data-cy="description" className="text-base truncate">
              {description.join(', ')}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default JobContent;
