import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import React, { useState, useEffect } from "react";
import styles from "../../styles/post.module.scss";
import { Navbar } from "../../components/navbar";
import { Subscribe } from "../../components/subscribe";
import { Coffee } from "../../components/coffee";
import { Comments } from "../../components/comments";
import { MdKeyboardArrowDown } from "react-icons/md";
import { DiscussionEmbed } from "disqus-react";

const Post = ({ title, body, image, date, excerpt }) => {
  const [imageUrl, setimageUrl] = useState("");
  const [state, setState] = useState("");
  const [enableLoadComments, setEnableLoadComments] = useState(true);

  useEffect(() => {
    const imageBuilder = imageUrlBuilder({
      projectId: "b4006agh",
      dataset: "production",
    });

    setimageUrl(imageBuilder.image(image));
  }, [image]);

  const showComments = () => {
    setState("CLICKED");
    setEnableLoadComments(false);
    return (
      <>
        <Comments />
      </>
    );
  };

  const disqusConfig = {
    shortname: `terklog`,
    config: { identifier: "{slug.current}", title: "{title}" },
  };
  // function loadComments() {
  //   setEnableLoadComments(false);

  //   window.disqus_config = function() {
  //     this.page.url = window.location.href; // Replace PAGE_URL with your page's canonical URL variable
  //     this.page.identifier = props; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  //   };
  //   window.onload = function() {
  //     const script = document.createElement("script");
  //     script.src = "https://terklog.disqus.com/embed.js";
  //     script.setAttribute("data-timestamp", Date.now().toString());

  //     document.body.appendChild(script);
  //   };
  // }

  // const post = props.data;
  // const disqusShortname = "terklog";

  // const disqusConfig = {
  //   url: window.location.href,
  //   identifier: post.props, // Single post id
  //   title: post.title, // Single post title
  // };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.body}>
              <div className={styles.top}>
                <h1 className={styles.top__title}>{title}</h1>
                <p className={styles.top__excerpt}>{excerpt}</p>
                <p className={styles.top__date}>Publish Date | {date}</p>
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
              />
              <div className={styles.coffee}>
                <Coffee />
              </div>
            </div>
            <div className={styles.sub}>
              <h4>Stay in the loop with the terklog</h4>
              <p className={styles.subp}>
                I would love to send you an e-mail whenever I have something new
                on the log.
              </p>
              <Subscribe />
            </div>
            {/* <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} /> */}
            <div className={styles.comments}>
              {" "}
              {enableLoadComments && (
                <button onClick={showComments}>
                  Load comments <MdKeyboardArrowDown />
                </button>
              )}
            </div>{" "}
            {state === "CLICKED" && (
              <div>
                {" "}
                <Comments />
              </div>
            )}
            <DiscussionEmbed {...disqusConfig} />
          </div>
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
  const url = `https://b4006agh.api.sanity.io/v1/data/query/production?query=${query}`;

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
