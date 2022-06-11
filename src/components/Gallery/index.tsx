import React, { ReactEventHandler } from 'react';
import { cleanTitle } from '@/lib/utils';
import { IParamsProps } from 'src/pages';
import ImageTooltip from '../ImageTooltip';

type TImages = IParamsProps['resources'];
type TArr = { item: string; title: string; sort: number }[];
const Gallery = ({ images }: { images: TImages }) => {
  const [arrFirst, setArrFirst] = React.useState<TArr>();
  const [arrSecond, setArrSecond] = React.useState<TArr>();
  const { technology } = images;

  React.useEffect(() => {
    const shuffled = technology
      .map((item) => ({ item, sort: Math.random(), title: cleanTitle(item) }))
      .sort((a, b) => b.sort - a.sort)
      .map((item) => item);

    const items_first = shuffled.slice(0, 3);
    const items_seconds = shuffled.filter((val) => !items_first.includes(val)).slice(0, 3);

    setArrFirst(items_first);
    setArrSecond(items_seconds);
  }, []);

  return (
    <div className="justify-center mx-auto mb-10 mt-5 flex flex-col md:my-auto lg:h-96">
      <div className="flex flex-row">
        {arrFirst?.map((val) => (
          <ImageTooltip key={val.sort.toString()} positon="justify-center" root={val.item} alt={`Technology ${val.title}`} tooltip={val.title} />
        ))}
      </div>
      <div className="flex flex-row">
        {arrSecond?.map((val) => (
          <ImageTooltip key={val.sort.toString()} positon="justify-center" root={val.item} alt={`Technology ${val.title}`} tooltip={val.title} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
