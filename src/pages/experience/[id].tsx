import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Name from "@/components/Name";
import { useNotificationProvider } from "@/provider/NotificationProvider";
import { useWindowSize } from "@/hooks/index";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { IParamsProps } from "..";
import { getCloudinaryUrl, getPaths, getPost } from "@/lib/utils";
import cloudinary from "cloudinary.config";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface IPost {
  post: {
    frontmatter: IParamsProps["posts"][0]["frontmatter"];
    image: string;
  };
}

const JobDescriptionPage: NextPage<IPost> = ({ post }) => {
  const router = useRouter();
  const { dispatch } = useNotificationProvider();
  const { isMobile } = useWindowSize();
  const { title, from, to, where, cover, position, description } =
    post.frontmatter;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.href}`);
      dispatch({ visible: true, status: "success", note: "Copied success." });
    } catch (e) {
      dispatch({ visible: true, status: "error", note: "Copied failed." });
    }
  };

  React.useEffect(() => {
    router.prefetch("/");
  }, [router]);

  if (!post) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`Michael Kubin - ${title}`} />
        <meta property="og:title" content={`Michael Kubin - ${title}`} />
        <meta property="og:description" content={description.toString()} />
        <meta
          property="og:url"
          content={`https://mikekubn.cz/experience/${title
            .replace(" ", "")
            .toLocaleLowerCase()}`}
        />
        <meta property="og:type" content="website" />
      </Head>
      <section className="section-layout">
        <div className="content-name mx-auto md:mx-0">
          <Name post={position} />
          {!isMobile ? <Buttons handleCopy={copy} /> : null}
        </div>

        <div className="experience mx-auto w-80 sm:w-96 md:w-96 md:mb-6 lg:w-128 md:mx-0">
          <h1 className="headerH1 text-center lg:text-right my-3">{title}</h1>
          <Image
            src={post.image}
            width="620"
            height="220"
            priority
            alt={title}
          />
          <p className="italic font-Asap text-sm mt-2 text-right">{where}</p>
          <p className="italic font-Asap text-sm my-2 text-right">
            From: {from}
          </p>
          <p className="italic font-Asap text-sm my-2 text-right">To: {to}</p>
          <div data-cy="job-content" className="flex justify-center mt-3">
            <ul
              aria-label="position"
              className="list-disc leading-10 w-60 md:w-80 lg:w-96 lg:text-base lg:leading-9"
            >
              {description.map((val) => (
                <li key={val}>{val}</li>
              ))}
            </ul>
          </div>
          {isMobile ? (
            <div className="flex justify-center mt-6">
              {" "}
              <Buttons handleCopy={copy} />
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default JobDescriptionPage;

export const getStaticPaths: GetStaticPaths<IParams> = () => {
  const posts = getPaths("src/_posts");
  const paths = posts.map((post) => ({ params: { id: post } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPost(`src/_posts/${params?.id}.md`);
  const title = post.frontmatter.title.replace(" ", "").toLocaleLowerCase();
  const image = (
    await cloudinary.api.resources_by_tag("cover", { max_results: 20 })
  ).resources
    .filter((resource) => resource.public_id.includes(title))
    .map((value) => value.public_id)
    .toString();

  return {
    props: {
      post: {
        ...post,
        image,
      },
    },
  };
};

const Buttons = ({ handleCopy }: { handleCopy: () => void }) => (
  <div className="flex flex-row">
    <Link href="/" passHref>
      <a className="button-style" data-cy="close-btn">
        Go Home
      </a>
    </Link>
    <div onClick={handleCopy} className="button-style ml-4">
      <p className="mr-3">Copy Link</p>
      <Image
        data-cy="image-link"
        src={getCloudinaryUrl("assets/link-page_axgv1k.png")}
        width="28"
        height="28"
        alt="Copy link"
      />
    </div>
  </div>
);
