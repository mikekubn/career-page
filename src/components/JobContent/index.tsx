import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { imgPaths } from 'src/lib/utils';
import { IPostsProps } from 'src/pages';

const JobContent = ({ data }: { data: IPostsProps['posts'][0] }): React.ReactElement => {
  const { title, from, to, where, image, position } = data.frontmatter;

  return (
    <Link aria-label='job-link' href="/experience/[id]" as={`/experience/${data.filename}`} passHref>
      <a>
        <div data-testid="job-content" data-cy="job-content" className="inline-block w-full p-3">
          <div className="float-left w-1/4 p-2">
            <Image data-cy="image" data-testid="image" src={imgPaths(image)} width="60" height="60" priority alt={title} />
          </div>
          <div className="float-right w-3/4">
            <h1 data-testid="company-name" data-cy="company-name" className="pb-1 font-AsapItal text-lg">
              {title}
            </h1>
            <div className="flex-row-1">
              <p data-testid="date-from" data-cy="date" className="italic font-Asap text-sm">
                {`${from}`}&nbsp;
              </p>
              <p data-testid="date-tp" data-cy="date" className="italic font-Asap text-sm">
                {`- ${to}`}
              </p>
            </div>
            <p data-testid="where" data-cy="where"className="italic font-Asap text-sm">
              {where}
            </p>
            <h1 data-testid="position" data-cy="position" className="pt-5 pb-2 font-bold font-AsapItal text-lg">
              {position}
            </h1>
            {/* <p data-testid="description" data-cy="description" className="text-base truncate">
              {description.join(', ')}
            </p> */}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default JobContent;
