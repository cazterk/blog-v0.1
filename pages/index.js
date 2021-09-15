import Head from "next/head";

import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Navbar } from "../sections/navbar";
import { Heros } from "../sections/heros";
import { Footer } from "../sections/footer";
import Extras from "../sections/extras";
import { Spinner } from "../components/spinner";
// import { MyAdSense } from "../components/myAdSense";

import { CgArrowLongRight } from "react-icons/cg";
import styles from "../styles/home.module.scss";

export default function Home({ posts, load }) {
  if (load) {
    return (
      <div>
        {" "}
        <Spinner />
      </div>
    );
  }

  const router = useRouter();
  const [mappedPost, setmappedPost] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(4);
  const [visible, setvisible] = useState(4);

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
          };
        })
      );
    } else {
      setmappedPost([]);
      setLoading(false);
    }
  }, [posts.length]);

  const showMoreItems = () => {
    if (visible < posts.length) {
      setvisible((preValue) => preValue + 2);
    } else {
      setvisible((preValue) => preValue + 0);
    }
  };

  const showLessItems = () => {
    if (visible > 4) {
      setvisible((preValue) => preValue - 2);
    }
  };

  return (
    <>
      <Head>
        <title>terklog | home</title>
        <meta
          name="description"
          content="   here to deliver top-notch hot takes on technology, software, and
          everything in between, the terklog aims to be on the path to
          continuous delivery and improvement"
        />
      </Head>

      <main>
        <Navbar />
        <Heros />
        {/* <MyAdSense /> */}
        <div className={styles.main}>
          <div className={styles.post}>Posts</div>
          <div className={styles.cards}>
            {mappedPost.length ? (
              mappedPost.slice(0, visible).map((p, index) => (
                <a
                  onClick={() => router.push(`/post/${p.slug.current}`)}
                  key={index}
                  className={styles.card}
                >
                  <div
                    className={styles.card__mainImage}
                    style={{ backgroundImage: `url(${p.mainImage}` }}
                  ></div>

                  <div className={styles.card__content}>
                    {/* <h2>{p.category}</h2> */}
                    <div>
                      {" "}
                      <h2 className={styles.card__title}>
                        {p.title}{" "}
                        <span>
                          {" "}
                          <CgArrowLongRight />
                        </span>
                      </h2>{" "}
                    </div>
                    {/* <p className={styles.card__excerpt}>{p.excerpt}</p> */}

                    <p className={styles.card__toolbar}>
                      Created | {p.publishedAt}
                    </p>
                  </div>
                </a>
              ))
            ) : (
              <>
                {" "}
                <Spinner />
              </>
            )}
          </div>
        </div>

        <div className={styles.holder}>
          {visible > 4 && (
            <div className={styles.button} onClick={showLessItems}>
              <p className={styles.btnText}>Less</p>
            </div>
          )}

          {visible < posts.length && (
            <div className={styles.button} onClick={showMoreItems}>
              <p className={styles.btnText}>More</p>
            </div>
          )}
        </div>

        {/* <MyAdSense /> */}
        <Extras />
        <Footer />
      </main>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent(
    `*[ _type == "post"] |order(_createdAt desc) `
  );
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
