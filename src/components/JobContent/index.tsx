import Image from 'next/image';
import React from 'react';
import { IJob } from 'src/configs/lan_en';

const JobContent = ({ data, truncate, modal }: { data: IJob, truncate: boolean, modal: boolean }): React.ReactElement => {
  const {
    companyName, date, where, position, description, image,
  } = data;

  const abridge = truncate ? 'truncate' : '';

  return (
    <div
      data-testid={modal ? 'modal' : 'card'}
      className={`m-3 lg:m-5 flex-row-1 ${modal ? 'justify-center sm:justify-center md:justify-end lg:justify-end' : 'justify-start'}`}
    >
      <div className="flex">
        <div className="flex flex-col">
          <Image data-testid="image" src={image} width="60" height="60" priority alt={companyName} />
        </div>
        <div className="flex w-48 ml-2 sm:ml-4 lg:ml-6 flex-col-1 sm:w-56 lg:w-96">
          <h1
            data-testid={modal ? 'modal-company-name' : 'company-name'}
            className={`pb-1 font-AsapItal ${modal ? 'lg:text-3xl' : 'text-lg'}`}
          >
            {companyName}
          </h1>
          <p
            data-testid={modal ? 'modal-date' : 'date'}
            className={`italic font-Asap ${modal ? 'lg:text-lg' : 'text-sm'}`}
          >
            {date}

          </p>
          <p
            data-testid={modal ? 'modal-where' : 'where'}
            className={`italic font-Asap ${modal ? 'lg:text-lg' : 'text-sm'}`}
          >
            {where}
          </p>
          <h1
            data-testid={modal ? 'modal-position' : 'position'}
            className={`pt-5 pb-2 font-bold font-AsapItal ${modal ? 'lg:text-2xl' : 'text-lg'}`}
          >
            {position}
          </h1>
          {
          modal
            ? (
              <ul
                aria-label="position"
                className="list-disc leading-6 lg:text-base lg:leading-9"
              >
                {description.map((val) => (<li key={val}>{val}</li>))}
              </ul>
            )
            : (
              <p
                data-testid="description"
                className={`text-base ${abridge}`}
              >
                {description.join(', ')}
              </p>
            )
        }
        </div>
      </div>
    </div>
  );
};

export default JobContent;
