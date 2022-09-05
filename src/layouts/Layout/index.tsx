import React from 'react';
import Metadata, { IMetadata } from '@/components/Metadata';
import { useRouter } from 'next/router';
import { firstLetterToUpperCase, urlPathnameSanity } from '@/lib/utils';
import { waves } from '@/components/Waves';

const title = 'Michael Kubin';

const MainLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const { asPath, query } = useRouter();

  const description = firstLetterToUpperCase(urlPathnameSanity(asPath));

  const metadata: IMetadata = {
    title,
    query: query,
    description,
    url: asPath,
  };

  React.useEffect(() => {
    waves();
  }, []);

  return (
    <main className="container mx-auto relative flex flex-1">
      <div className="waves dark-mode" />
      <Metadata metadata={metadata} />
      {children}
    </main>
  );
};

export default MainLayout;
