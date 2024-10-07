'use client';

import React from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Article: React.FC<{ content: any }> = ({ content }) => {
  return (
    <BlocksRenderer
      content={content}
      modifiers={{
        bold: ({ children }) => <strong className="font-semibold">{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
      blocks={{
        paragraph: ({ children }) => (
          <>
            <p className="font-ptSerif font-normal text-[20px] md:text-[28px]">{children}</p>
            <br />
          </>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="font-beVietnamPro font-semibold text-[28px] md:text-[52px] md:mb-4 my-[38px]">{children}</h1>;
            case 3:
              return <h3 className="font-beVietnamPro font-semibold text-[28px] md:text-[34px] md:mb-4 my-[38px]">{children}</h3>;
            default:
              return <h3 className="font-beVietnamPro font-semibold text-[28px] md:text-[34px] md:mb-4 my-[38px]">{children}</h3>;
          }
        },
        link: ({ children, url }) => (
          <Link href={url} className="inline-flex items-center gap-2 text-blue font-ptSerif font-light text-[20px] md:text-[28px] hover:underline">
            {children}
            <ArrowRight size={24} />
          </Link>
        ),
      }}
    />
  );
};

export default Article;
