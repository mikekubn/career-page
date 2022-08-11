import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { IArticle } from 'src/pages/blog';
import { ArticleParagraph, Paragraph, Time } from '@/components/Typography';
import AnimatedButton from '../Button';
import { createdAt } from '@/lib/utils';
import Tags from '../Tags';

interface IProps extends React.HTMLProps<HTMLDivElement> {
  article: IArticle;
}

const BaseArticle: React.FC<IProps> = (props: IProps) => {
  const { article } = props;
  const { date } = article.metadata;

  const createdDate = createdAt(date);

  const HeaderWithLink = (): React.ReactElement => (
    <Link aria-label="post-link" href="/blog/[slug]" as={`/blog/${article.filename}`} passHref>
      <motion.h1
        variants={headerVariant}
        className="pt-2 text-base md:text-lg lg:text-lg xl:text-xl font-semibold mb-4 cursor-pointer tracking-wide hover:text-sky500">
        {article.metadata.title}
      </motion.h1>
    </Link>
  );

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={articleVariants}
      className="m-4 p-4 pt-0 mb-14 border-b border-black border-dashed hover:bg-gray/10 rounded-lg">
      <HeaderWithLink />
      <Tags items={article.metadata.tags} />
      <ArticleParagraph className="my-6 italic text-left">{article.metadata.excerpt}</ArticleParagraph>
      <div className="flex flex-row justify-between mb-3">
        <Time>{createdDate}</Time>
        <Paragraph>{article.metadata.author}</Paragraph>
      </div>
      <div className="text-center mb-3">
        <Link aria-label="post-link" href="/blog/[slug]" as={`/blog/${article.filename}`} passHref>
          <AnimatedButton title="Read more 📚" />
        </Link>
      </div>
    </motion.article>
  );
};

export default BaseArticle;

const articleVariants: Variants = {
  reset: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      stiffness: 300,
    },
  },
};

const headerVariant: Variants = {
  reset: {
    x: 0,
  },
  hover: {
    shadow: '2px solid black',
    scale: 1.1,
    originX: 0,
    transition: {
      duration: 0.4,
      type: 'tween',
    },
  },
};
