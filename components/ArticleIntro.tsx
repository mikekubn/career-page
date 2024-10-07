import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ArticleIntro: React.FC<{ title: string; date: string; src: string; slug?: string; isLink?: boolean }> = ({
  title,
  date,
  src,
  slug,
  isLink = false,
}) => {
  return (
    <section className="flex flex-col mt-[70px] md:mt-[140px]">
      {isLink ? (
        <Link
          href={`/blog/${slug}`}
          className="line-height-article font-beVietnamPro font-semibold text-[28px] md:text-[52px] hover:underline underline-offset-4">
          {title}
        </Link>
      ) : (
        <h1 className="line-height-article font-beVietnamPro font-semibold text-[28px] md:text-[52px]">{title}</h1>
      )}
      <p className="text-start text-[24px] md:text-[34px] font-beVietnamPro font-semibold text-blue mb-4 md:mb-8">{date}</p>
      <div className="relative w-[350px] h-[160px] md:w-[720px] md:h-[308px] lg:w-[962px] lg:h-[614px] mx-auto">
        <Image fill src={src} className="object-cover rounded-[20px]" alt={title} title={title} />
      </div>
    </section>
  );
};

export default ArticleIntro;
