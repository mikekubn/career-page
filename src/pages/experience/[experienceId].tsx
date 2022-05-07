import React from 'react';
import { useRouter } from 'next/router';
import { IJob, jobs_lan_en } from 'src/configs/lan_en';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Name from '@/components/Name';
import { useNotificationProvider } from '@/provider/NotificationProvider';
import { useWindowSize } from '@/hooks/index';

interface ITaskId {
  experienceId: string,
}

const JobDescriptionPage = ({ experienceId }: ITaskId): React.ReactElement | null => {
  const router = useRouter();
  const description: IJob | undefined = jobs_lan_en.find((job) => job.id === experienceId);
  const { dispatch } = useNotificationProvider();
  const { width, height, isMobile } = useWindowSize();

  console.log('size', width, height, isMobile);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.href}`);
      dispatch({ visible: true, status: 'success', note: 'Copied success.' });
    } catch (e) {
      dispatch({ visible: true, status: 'error', note: 'Copied failed.' });
    }
  };

  React.useEffect(() => {
    router.prefetch('/');
  }, [router]);

  if (!description) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{description?.companyName}</title>
        <meta name="description" content={`Michael Kubín - ${description.companyName}`} />
        <meta property="og:title" content={`Michael Kubin - Experience ${description.companyName}`} />
        <meta property="og:description" content={`Experience - ${description.description}`} />
        <meta property="og:url" content={`https://mikekubn.cz/experience/${experienceId}`} />
        <meta property="og:type" content="website" />
      </Head>
      <section className="fullscreen-layout">
        <div className="home-layout">
          <div className="home-children">
            <Name post={description.position}/>
            { !isMobile ? <Buttons handleCopy={copy}/> : null }
          </div>

          <div className="experience">
            <div className="flex flex-col">
              <h1 className="headerH1 text-center lg:text-right my-3">{description.companyName}</h1>
              <Image src={description.cover} width="620" height="220" priority alt={description.companyName} />
              <p className="italic font-Asap text-sm mt-2 text-right">{description.where}</p>
              <p className="italic font-Asap text-sm my-2 text-right">{description.date}</p>
            </div>
            <div data-cy="job-content" className="flex justify-center mt-3">
              <ul aria-label="position" className="list-disc leading-10 w-60 lg:text-base lg:leading-9">
                {description.description.map((val) => (<li key={val}>{val}</li>))}
              </ul>
            </div>
            { isMobile
              ? (
                <div className="flex justify-center mt-6">
                  <Buttons handleCopy={copy}/>
                </div>
              )
              : null
                }
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDescriptionPage;

export function getStaticProps({ params: { experienceId } }: { params: ITaskId }) {
  return { props: { experienceId } };
}

export function getStaticPaths() {
  return {
    paths: jobs_lan_en.map((job) => ({
      params: { experienceId: job.id },
    })),
    fallback: false,
  };
}

const Buttons = ({ handleCopy }: { handleCopy: () => void }) => (
  <div className='flex flex-row'>
    <Link href="/" passHref>
      <a className="button-style" data-cy="close-btn">
        Go Home
      </a>
    </Link>
    <div onClick={handleCopy} className="button-style ml-4">
      <p className="mr-3">Copy Link</p>
      <Image data-cy="image-link" src="/img/link.png" width="28" height="28" alt="Copy link" />
    </div>
  </div>
);
