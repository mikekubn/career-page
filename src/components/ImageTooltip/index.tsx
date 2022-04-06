import React from 'react';
import Image from 'next/image';

interface IImageTooltop {
  root: string,
  height: string,
  width: string,
  alt: string,
  tooltip: string,
  positon: string,
}

const ImageTooltip = ({
  root, height, width, alt, tooltip, positon,
}: IImageTooltop): React.ReactElement => (
  <div className={`flex flex-col ${positon} m-7 w-20`}>
    <Image className="dark:opacity-50" src={`/img/${root}.png`} height={height} width={width} alt={alt} priority />
    <p className="mt-2">{tooltip}</p>
  </div>
);

export default ImageTooltip;
