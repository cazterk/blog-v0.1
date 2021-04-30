import { Navbar } from "../components/navbar";
import { Heros } from "../components/heros";
import AllPosts from "./_posts";
import styles from "../styles/home.module.scss";
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
            mainImage: imageBuilder.image(p.mainImage),
            // .width(500)
            // .height(250),
          };
        })
      );
    } else {
      setmappedPost([]);
    }
  }, [posts.length]);

  return (
    <div>
      <Navbar />
      <Heros />

      <div className={styles.main}>
        <div className={styles.container}>
          {mappedPost.length ? (
            mappedPost.map((p, index) => (
              <li className={styles.feed}>
                <img className={styles.mainImage} src={p.mainImage} />
                <a className={styles.card}>
                  <h2>{p.category}</h2>
                  <h2
                    className={styles.title}
                    onClick={() => router.push(`/post/${p.slug.current}`)}
                    key={index}
                  >
                    {p.title}
                  </h2>
                  <p id={styles.excerpt}>{p.excerpt}</p>
                  <div className={styles.toolbar}>
                    <p>Updated: {p.publishedAt}</p>
                  </div>
                </a>
              </li>
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
  const query = encodeURIComponent(`*[ _type == "post"][0...5]`);
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
