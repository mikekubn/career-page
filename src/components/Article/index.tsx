import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { Button, ParagraphBase } from '@/components/Typography';
import { createdAt } from '@/lib/utils';
import Tags from '../Tags';
import { IArticle } from '@/lib/types';

interface IProps extends React.HTMLProps<HTMLDivElement> {
  article: IArticle;
}

const BaseArticle: React.FC<IProps> = (props: IProps) => {
  const { article } = props;
  const { date, title, excerpt, author, tags } = article.frontmatter;

  const createdDate = createdAt(date);

  const HeaderWithLink = (): React.ReactElement => (
    <Link aria-label="post-link" href="/blog/[slug]" as={`/blog/${article.slug}`} passHref>
      <motion.h1 variants={headerVariant} className="pt-2 text-2xl md:text-4xl font-semibold mb-4 cursor-pointer tracking-wide hover:underline">
        {title}
      </motion.h1>
    </Link>
  );

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={articleVariants}
      className="m-4 p-4 pt-0 mb-10 border-b border-black border-dashed rounded-lg hover:bg-blue/50 bg-blue/80">
      <HeaderWithLink />
      <Tags items={tags} />
      <ParagraphBase className="my-4 italic text-left">{excerpt}</ParagraphBase>
      <div className="flex flex-row justify-between mb-1">
        <ParagraphBase>{createdDate}</ParagraphBase>
        <ParagraphBase>{author}</ParagraphBase>
      </div>
      <div className="text-center">
        <Link aria-label="post-link" href="/blog/[slug]" as={`/blog/${article.slug}`} passHref>
          <Button className="px-4 py-1 text-sm">Read more 📚</Button>
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
    scale: 1.02,
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
    scale: 1.05,
    originX: 0,
    transition: {
      duration: 0.4,
      type: 'tween',
    },
  },
};
