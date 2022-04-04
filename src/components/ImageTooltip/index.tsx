import React from 'react';
import Image from 'next/image';

interface IImageTooltop {
  root: string,
  height: number,
  width: number,
  alt: string,
  tooltip: string,
  positon: string,
}

const ImageTooltip = ({
  root, height, width, alt, tooltip, positon,
}: IImageTooltop): React.ReactElement => (
  <div className={`flex flex-col ${positon} m-7`}>
    <Image className="dark:opacity-50" src={`/img/${root}.png`} height={height} width={width} alt={alt} priority />
    <p className="mt-2">{tooltip}</p>
  </div>
);

export default ImageTooltip;
