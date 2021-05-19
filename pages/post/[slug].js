import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { useState, useEffect } from "react";
import styles from "../../styles/post.module.scss";
import { Navbar } from "../../components/navbar";
import { Subscribe } from "../../components/subscribe";

export const Post = ({ title, body, image }) => {
  const [imageUrl, setimageUrl] = useState("");

  useEffect(() => {
    const imageBuilder = imageUrlBuilder({
      projectId: "b4006agh",
      dataset: "production",
    });

    setimageUrl(imageBuilder.image(image));
  }, [image]);

  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <h1>{title}</h1>
        <div className={styles.body}>
          {imageUrl && <img className={styles.mainImage} src={imageUrl} />}

          <BlockContent blocks={body} />
        </div>
        <Subscribe />
      </div>
    </div>
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
