import React from 'react';
import { clsx } from 'clsx';

const items: string[] = ['Developer', 'Freelancer', 'Creative', 'Tester', 'Developer'];

const RotateList = ({ className, titleSize }: { className: string; titleSize: string }): React.ReactElement => (
  <div className={`${className}`}>
    <h1 className={clsx({ [titleSize]: true })}>I am</h1>
    <div className={clsx({ 'pl-2 overflow-y-hidden h-8': true, [titleSize]: true })}>
      {items.map((item, index) => (
        <span className="rotate-list" key={index}>
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default RotateList;
