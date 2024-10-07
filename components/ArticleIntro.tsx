import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Article: React.FC<{ title?: string; date?: string; src?: string; slug?: string }> = ({ title, date, src, slug }) => {
  return (
    <section className="flex flex-col font-sourceCodePro justify-between w-[340px] md:w-[380px] h-[320px] md:h-[400px] rounded-[20px] bg-dark-gray">
      <div className="p-4 flex flex-col flex-1 justify-between">
        <Link href={`/blog/${slug}`} className="font-semibold text-[22px] md:text-[32px] hover:underline underline-offset-4 leading-tight">
          {title}
        </Link>
        <p className="text-start text-[18px] md:text-[24px] text-blue">{date}</p>
      </div>
      <div className="relative mx-auto w-[340px] md:w-[380px] h-[180px] md:h-[200px]">
        <Image fill src={src ?? ''} className="object-cover rounded-[20px]" alt={title ?? ''} title={title} />
      </div>
    </section>
  );
};

export default Article;
