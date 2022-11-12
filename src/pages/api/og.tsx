import { getCloudinaryUrl } from '@/lib/utils';
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

const imgUrl = getCloudinaryUrl({ url: 'og.jpg' });

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flex: '1 1 0%',
          backgroundImage: 'url(' + imgUrl + ')',
          flexDirection: 'row',
        }}>
        <div
          style={{
            display: 'flex',
            flex: '1 1 0%',
            fontSize: '80px',
            fontWeight: 'bolder',
            flexDirection: 'row',
            justifyItems: 'center',
            justifyContent: 'center',
            color: 'white',
            letterSpacing: '6px',
            top: '60px',
          }}>
          mikekubn
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
