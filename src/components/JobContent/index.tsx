import Image from 'next/image';
import React from 'react';
import { IJob } from 'src/configs/lan_en';

const JobContent = ({ data, truncate, modal }: { data: IJob, truncate: boolean, modal: boolean }): React.ReactElement => {
  const {
    companyName, date, where, position, description, image,
  } = data;

  const abridge = truncate ? 'truncate' : '';

  return (
    <div className={`m-3 lg:m-5 flex-row-1 ${modal ? 'justify-center sm:justify-center md:justify-end lg:justify-end' : 'justify-start'}`}>
      <div className="flex">
        <div className="flex flex-col">
          <div className="w-16 h-16">
            <Image src={image} width={60} height={60} priority />
          </div>
        </div>
        <div className="flex w-48 ml-2 sm:ml-4 lg:ml-6 flex-col-1 sm:w-56 lg:w-96">
          <h1 className={`pb-1 font-AsapItal ${modal ? 'lg:text-3xl' : 'text-lg'}`}>{companyName}</h1>
          <p className={`italic font-Asap ${modal ? 'lg:text-lg' : 'text-sm'}`}>{date}</p>
          <p className={`italic font-Asap ${modal ? 'lg:text-lg' : 'text-sm'}`}>{where}</p>
          <h1 className={`pt-5 pb-2 font-bold font-AsapItal ${modal ? 'lg:text-2xl' : 'text-lg'}`}>{position}</h1>
          {
          modal
            ? (
              <ul className="list-disc leading-6 lg:text-base lg:leading-9">
                { description.map((val) => (<li key={val}>{val}</li>))}
              </ul>
            )
            : <p className={`text-base ${abridge}`}>{description.join(', ')}</p>
        }
        </div>
      </div>
    </div>
  );
};

export default JobContent;
