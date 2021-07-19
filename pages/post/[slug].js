import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import { useState, useEffect } from "react";
import styles from "../../styles/post.module.scss";
import { Navbar } from "../../components/navbar";
import { Subscribe } from "../../components/subscribe";
import { Comments } from "../../components/comments";

const Post = ({ title, body, image }) => {
  const [imageUrl, setimageUrl] = useState("");
  const [enableLoadComments, setEnableLoadComments] = useState(true);

  useEffect(() => {
    const imageBuilder = imageUrlBuilder({
      projectId: "b4006agh",
      dataset: "production",
    });

    setimageUrl(imageBuilder.image(image));
  }, [image]);

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
  // function loadComments() {
  //   setEnableLoadComments(false);
  //   window.gc_params = {
  //     graphcomment_id: "terklog",

  //     // if your website has a fixed header, indicate it's height in pixels
  //     fixed_header_height: 0,
  //   };

  //   /* - - - DON'T EDIT BELOW THIS LINE - - - */

  //   (function() {
  //     var gc = document.createElement("script");
  //     gc.type = "text/javascript";
  //     gc.async = true;
  //     gc.src = "https://graphcomment.com/js/integration.js?" + Date.now();
  //     (
  //       document.getElementsByTagName("head")[0] ||
  //       document.getElementsByTagName("body")[0]
  //     ).appendChild(gc);
  //   })();
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
              {imageUrl && <img className={styles.mainImage} src={imageUrl} />}
              <h1>{title}</h1>
              <BlockContent
                blocks={body}
                projectId="b4006agh"
                dataset="production"
                imageOptions={{ w: 620, h: 350, fit: "max" }}
              />
            </div>
            <div className={styles.sub}>
              <h4>Stay in the loop with the terklog</h4>
              <p className={styles.subp}>
                I would love to send you an e-mail whenever I have something new
                on the log.
              </p>
              <Subscribe />
            </div>

            {/* {enableLoadComments && (
          <p id="graphcomment" onClick={loadComments}>
            Load Comments
          </p>
        )} */}
            {/* <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} /> */}
            <Comments />
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
      },
    };
  }
};

export default Post;
