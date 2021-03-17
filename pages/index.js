import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/Home.module.css";
import imageUrlBuilder from "@sanity/image-url";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Toolbar />
      <div className={styles.main}>
        <h1>Welcome to my blog </h1>
        <h3>Recent</h3>
        <div className={styles.feed}></div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent(`*[ _type == "post"]`);
  const url = `https://b4006agh.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.lenth) {
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
