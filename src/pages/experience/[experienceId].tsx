import React from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { IJob, jobs_lan_en } from 'src/configs/lan_en';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Name from '@/components/Name';
import { useNotificationProvider } from '@/provider/NotificationProvider';

interface ITaskId {
  experienceId: string,
}

Modal.setAppElement('#__next');

const JobDescriptionPage = ({ experienceId }: ITaskId): React.ReactElement | null => {
  const router = useRouter();
  const description: IJob | undefined = jobs_lan_en.find((job) => job.id === experienceId);
  const { dispatch } = useNotificationProvider();

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
        <div className="mt-2 flex-col-1 lg:flex-row-1 lg:mt-0">
          <div className="flex-col-1">
            <Name post={description.position}/>
            <div className='flex flex-row'>
              <Link href="/" passHref>
                <a className="button-style" data-cy="close-btn">
                  Go Home
                </a>
              </Link>
              <div onClick={copy} className="button-style ml-4">
                <p className="mr-3">Copy Link</p>
                <Image data-cy="image-link" src="/img/link.png" width="28" height="28" alt="Copy link" />
              </div>
            </div>
          </div>

          <div className="flex-col-1">
            <div  className="justify-center flex-col-1  w-80 sm:w-96 lg:w-[540px]">
              <h1 className="text-3xl my-3 italic font-AsapItal text-center lg:mt-0 lg:text-right">{description.companyName}</h1>
              <Image src={description.cover} width="620" height="220" priority alt={description.companyName} />
              <p className="italic font-Asap text-sm my-1 text-right">{description.where}</p>
              <p className="italic font-Asap text-sm my-1 text-right">{description.date}</p>
              <div className="flex justify-center mt-3">
                <ul data-cy="position" aria-label="position" className="list-disc leading-6 lg:text-base lg:leading-9">
                  {description.description.map((val) => (<li key={val}>{val}</li>))}
                </ul>
              </div>
            </div>
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
