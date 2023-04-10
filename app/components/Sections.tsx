'use client';

import { motion } from 'framer-motion';

export const SectionLeft = ({
  children,
  isInView,
  className,
}: {
  children: React.ReactNode;
  isInView: boolean;
  className?: string;
}): React.ReactElement => (
  <motion.div
    className={className}
    style={{
      transform: isInView ? 'none' : 'translateX(-200px)',
      opacity: isInView ? 1 : 0,
      transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
    }}>
    {children}
  </motion.div>
);

export const SectionRight = ({
  children,
  isInView,
  className,
}: {
  children: React.ReactNode;
  isInView: boolean;
  className?: string;
}): React.ReactElement => (
  <motion.div
    className={className}
    style={{
      transform: isInView ? 'none' : 'translateX(200px)',
      opacity: isInView ? 1 : 0,
      transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
    }}>
    {children}
  </motion.div>
);
