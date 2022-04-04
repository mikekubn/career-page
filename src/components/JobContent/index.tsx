import Image from 'next/image';
import React from 'react';
import { IJob } from 'src/configs/lan_en';

const JobContent = ({ data, truncate, modal }: { data: IJob, truncate: boolean, modal: boolean }): React.ReactElement => {
  const {
    companyName, date, where, position, description, image,
  } = data;

  const abridge = truncate ? 'truncate' : '';

  return (
    <div className="m-3 lg:m-5 flex-row-1">
      <div className={modal ? 'flex mx-auto' : 'flex'}>
        <div className="flex flex-col">
          <div className="w-16 h-16">
            <Image src={image} width={60} height={60} priority />
          </div>
        </div>
        <div className="flex w-48 ml-2 flex-col-1 sm:w-56 lg:w-96">
          <h1 className="pb-1 text-lg font-AsapItal">{companyName}</h1>
          <p className="text-sm italic font-Asap">{date}</p>
          <p className="text-sm italic font-Asap">{where}</p>
          <h1 className="pt-5 pb-2 text-lg font-bold font-AsapItal">{position}</h1>
          {
          modal
            ? (
              <ul className="list-disc leading-6">
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
