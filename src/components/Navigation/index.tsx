import React from 'react';
import Link from 'next/link';
import { INavigation } from 'src/configs/navigation';

const Navigation = ({ items }: { items: INavigation[] }): React.ReactElement => (
  <div data-cy="navigation" className="flex-row hidden mt-6 md:flex lg:mt-0">
    {
      items.map((nav) => (
        <Link href={nav.url} key={nav.url} scroll={false} replace passHref>
          <a
            data-testid={`nav-${nav.name}`}
            className="button-style"
          >
            {nav.name}
          </a>
        </Link>
      ))
    }
  </div>
);

export default Navigation;
