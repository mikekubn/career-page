import React from 'react';

interface IProps extends React.HTMLProps<HTMLDivElement> {
  items: string[];
}

const Tags: React.FC<IProps> = (props: IProps): React.ReactElement => {
  const { items, className } = props;

  return (
    <div className={`flex flex-row flex-1 flex-wrap ${className}`}>
      {items.map((tag, index) => (
        <p
          key={index}
          className="cursor-default text-xs md:text-sm px-2 lg:px-4 py-1 first:ml-0 ml-1 my-1 lg:mx-2 rounded-lg shadow-sm bg-black text-white shadow-black dark:bg-white dark:text-black dark:shadow-white">
          {tag}
        </p>
      ))}
    </div>
  );
};

export default Tags;
