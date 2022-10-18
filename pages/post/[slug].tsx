import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";

import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

import SyntaxHighlighter from "react-syntax-highlighter";

import { Subscribe } from "../../helpers/subscribe";
import { Coffee } from "../../components/coffee";
import { Comments } from "../../components/comments";

import { FacebookShareButton, TwitterShareButton } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
import { BiLinkAlt } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

import styles from "../../styles/post.module.scss";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const PROJID = process.env.NEXT_PUBLIC_PROJECT_ID;

const Post = ({ pageSlug, title, body, image, date, excerpt }) => {
  const [imageUrl, setimageUrl] = useState("");
  const [showComments, setShowComments] = useState(false);

  const url =
    typeof window !== "undefined" && window.location.href
      ? window.location.href
      : "";

  useEffect(() => {
    const imageBuilder: any = imageUrlBuilder({
      projectId: PROJID,
      dataset: "production",
    });

    setimageUrl(imageBuilder.image(image));
  }, [image]);

  const commentsState = () => {
    setShowComments(!showComments);
  };

  // const disqusConfig = {
  //   shortname: `terklog`,
  //   config: { identifier: pageSlug, title: { title } },
  // };

  const serializers = {
    types: {
      code: ({ node = {} }) => {
        const { code, language }: any = node;
        if (!code) {
          return null;
        }
        return (
          <SyntaxHighlighter language={language || "text"} style={nord}>
            {code}
          </SyntaxHighlighter>
        );
      },
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta name="description" content={excerpt} />
        <meta name="og:image" content={imageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@cazterk" />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:description" content={excerpt} />
      </Head>

      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.body}>
            <div className={styles.top}>
              <h1 className={styles.top__title}>{title}</h1>
              <p className={styles.top__excerpt}>{excerpt}</p>
              <p className={styles.top__date}>Publish Date | {date}</p>
              <IconContext.Provider value={{ size: "30" }}>
                <div className={styles.top__share}>
                  <CopyToClipboard text={url}>
                    <button>
                      <BiLinkAlt />
                    </button>
                  </CopyToClipboard>
                  <TwitterShareButton url={url}>
                    <TiSocialTwitterCircular />
                  </TwitterShareButton>

                  <FacebookShareButton url={url}>
                    <TiSocialFacebookCircular />
                  </FacebookShareButton>
                </div>
              </IconContext.Provider>
              <div className={styles.top__line}></div>
            </div>
            <div className={styles.mainImage}>
              {imageUrl && <img src={imageUrl} />}
            </div>

            <BlockContent
              blocks={body}
              projectId="b4006agh"
              dataset="production"
              imageOptions={{}}
              serializers={serializers}
            />
            <div className={styles.coffee}>
              <Coffee />
            </div>
          </div>
          <div className={styles.sub}>
            <h4>Stay in the loop with the terklog</h4>
            <p className={styles.subp}>
              Love what you see? well consider subscribing for updates.
            </p>
            <div className={styles.sub__input}>
              <Subscribe />
            </div>
          </div>
          {/* <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} /> */}
          <div className={styles.comments}>
            {" "}
            {!showComments && (
              <button onClick={commentsState}>
                Load comments <MdKeyboardArrowDown />
              </button>
            )}
          </div>{" "}
          {showComments && (
            <div>
              {" "}
              {/* <DiscussionEmbed {...disqusConfig} /> */}
              <Comments />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == 'post' && slug.current == '${pageSlug}' ]`
  );
  const url = `https://${PROJID}.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
        date: post.publishedAt,
        excerpt: post.excerpt,
      },
    };
  }
};

export default Post;
