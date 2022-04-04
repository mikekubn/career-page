import React from 'react';
import Link from 'next/link';
import { navigation } from 'src/configs/navigation';

const Navigation = (): React.ReactElement => (
  <div className="flex-row hidden mt-6 lg:flex lg:mt-0">
    {
        navigation.map((nav) => (
          <Link href={nav.url} key={nav.url} scroll={false} replace passHref>
            <a className="button-style">
              {nav.name}
            </a>
          </Link>
        ))
      }
  </div>
);

export default Navigation;
