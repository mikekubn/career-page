import React from 'react';
import clsx from 'clsx';

const Article: React.FC<{ markdown: React.ReactElement }> = ({ markdown }) => {
  return (
    <article
      className={clsx('prose max-w-screen-lg', {
        'prose-img:-mb-4': true,
        'prose-h3:font-beVietnamPro prose-h3:font-semibold prose-h3:text-[28px] prose-h3:md:text-[34px] prose-h3:text-white': true,
        'prose-h4:font-beVietnamPro prose-h4:font-semibold prose-h4:text-[24px] prose-h4:md:text-[30px] prose-h4:text-white': true,
        'prose-p:font-inter prose-p:font-normal prose-p:text-[18px] prose-p:md:text-[22px] prose-p:text-white': true,
        'prose-a:font-inter prose-a:font-light prose-a:text-blue prose-a:text-[18px] prose-a:md:text-[22px] prose-a:no-underline hover:prose-a:underline':
          true,
        'prose-ul:font-inter prose-ul:font-normal prose-ul:text-[18px] prose-ul:md:text-[22px] prose-ul:text-white': true,
      })}>
      {markdown}
    </article>
  );
};

export default Article;
