import Image from 'next/image';
import React from 'react';
import { IJob } from 'src/configs/lan_en';

const JobContent = ({ data }: { data: IJob }): React.ReactElement => {
  const {
    companyName, date, where, position, description, image,
  } = data;

  return (
    <div data-testid="job-content" data-cy="job-content" className="m-3 lg:m-5 flex-row-1 justify-start">
      <div className="flex">
        <div className="flex flex-col">
          <Image data-cy="image" data-testid="image" src={image} width="60" height="60" priority alt={companyName} />
        </div>
        <div className="flex w-48 ml-2 sm:ml-4 lg:ml-6 flex-col-1 sm:w-56 lg:w-96">
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
    </div>
  );
};

export default JobContent;
