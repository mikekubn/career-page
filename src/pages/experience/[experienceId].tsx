import React from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { IJob, jobs_lan_en } from 'src/configs/lan_en';
import { theme } from 'tailwind.config';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useMediaQueries } from '@react-hook/media-query';
import { useThemeProvider } from '@/provider/ThemeProvider';
import Name from '@/components/Name';
import JobContent from '@/components/JobContent';
import { useNotificationProvider } from '@/provider/NotificationProvider';
import MotionDiv from '@/components/Motions/MotionDiv';
import CenterLayout from '@/layouts/CenterLayout';
import MainLayout from '@/layouts/MainLayout';

interface ITaskId {
  experienceId: string,
}

Modal.setAppElement('#__next');

const JobDescriptionPage = ({ experienceId }: ITaskId): React.ReactElement | null => {
  const router = useRouter();
  const { state: darkMode } = useThemeProvider();
  const description: IJob | undefined = jobs_lan_en.find((job) => job.id === experienceId);
  const { dispatch } = useNotificationProvider();
  const { matches: isDesktop } = useMediaQueries({
    screen: 'screen',
    width: '(min-width: 700px)',
  });

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
      <Modal
        isOpen // The modal should always be shown on page load, it is the 'page'
        onRequestClose={() => {
          router.push('/');
        }}
        contentLabel="JobDescriptionPage modal"
        style={{
          overlay: {
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
          },
          content: {
            padding: '0px',
            display: 'flex',
            flex: '1',
            border: '0px',
            borderRadius: '0px',
            position: 'revert',
            background: `${darkMode ? `${theme.colors.gray900}` : `${theme.colors.white}`}`,
          },
        }}
      >
        <MainLayout>
          <CenterLayout>
            <div className="main-page-layout">
              <MotionDiv>
                {
                  isDesktop.width
                    ? <DesktopModal data={description} handleClick={copy} />
                    : <MobileModal data={description} handleClick={copy} />
                }
              </MotionDiv>
            </div>
          </CenterLayout>
        </MainLayout>
      </Modal>
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

const DesktopModal = ({ data, handleClick }: { data: IJob, handleClick: () => void }) => (
  <div className="flex-row-1">
    <div className="flex-col-1">
      <Name />
      <Link href="/" passHref>
        <a className="button-style">
          Close
        </a>
      </Link>
    </div>
    <div className="flex-col-1">
      <div className="flex items-center flex-1">
        <JobContent modal truncate={false} data={data} />
      </div>
      <div className="flex justify-end">
        <div onClick={handleClick} className="flex items-center justify-center w-12 h-12 border border-b-4 rounded-full cursor-pointer text-sky500 hover:bg-sky500/5 hover:border-b">
          <Image src="/img/link.png" width="28" height="28" alt="Copy link" />
        </div>
        <div className="pl-4 flex-col-center-content">
          <Image src="/img/fork.png" width="28" height="28" alt="Moved from home page" />
          <p className="pl-2">{data.companyName}</p>
        </div>
      </div>
    </div>
  </div>
);

const MobileModal = ({ data, handleClick }: { data: IJob, handleClick: () => void }) => (
  <div className="mt-10 flex-col-1">
    <Name />
    <div className="items-center mt-10 flex-row-1">
      <JobContent modal truncate={false} data={data} />
    </div>
    <div className="my-5 flex-row-1">
      <div className="justify-end flex-col-1">
        <Link href="/" passHref>
          <a className="flex items-center justify-center w-10 h-10 border border-b-4 rounded-full cursor-pointer text-sky500 hover:bg-sky500/5 hover:border-b">
            <Image src="/img/cross.png" width={24} height={24} alt="Cross" />
          </a>
        </Link>
      </div>
      <div className="items-end justify-end flex-row-1">
        <div onClick={handleClick} className="flex items-center justify-center w-10 h-10 border border-b-4 rounded-full cursor-pointer text-sky500 hover:bg-sky500/5 hover:border-b">
          <Image src="/img/link.png" width={24} height={24} alt="Copy link" />
        </div>
        <div className="flex items-center justify-center w-10 h-10">
          <Image src="/img/fork.png" width={24} height={24} alt="Moved from home page" />
        </div>
      </div>
    </div>
  </div>
);
