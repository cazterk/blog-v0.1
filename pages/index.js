import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/Home.module.css";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home({ posts }) {
  const router = useRouter();
  const [mappedPost, setmappedPost] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imageBuilder = imageUrlBuilder({
        projectId: "b4006agh",
        dataset: "production",
      });

      setmappedPost(
        posts.map((p) => {
          return {
            ...p,
            mainImage: imageBuilder
              .image(p.mainImage)
              .width(500)
              .height(250),
          };
        })
      );
    } else {
      setmappedPost([]);
    }
  }, [posts.length]);

  return (
    <div>
      <Toolbar />

      <div className={styles.main}>
        <h1>Welcome to my blog </h1>
        <h3>Recent</h3>
        <div className={styles.feed}>
          {mappedPost.length ? (
            mappedPost.map((p, index) => (
              <div
                onClick={() => router.push(`/post/${p.slug.current}`)}
                key={index}
                className={styles.post}
              >
                <a className={styles.card}>
                  <h3>{p.title}</h3>
                  <img className={styles.mainImage} src={p.mainImage} />
                </a>
              </div>
            ))
          ) : (
            <> No posts yet</>
          )}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent(`*[ _type == "post"]`);
  const url = `https://b4006agh.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};
