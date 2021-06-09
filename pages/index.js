import { Navbar } from "../components/navbar";
import { Heros } from "../components/heros";
import { Footer } from "../components/footer";
import { Support } from "../components/support";
import styles from "../styles/home.module.scss";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { IconContext } from "react-icons/lib";

export default function Home({ posts, load }) {
  if (load) {
    return <h2>loading</h2>;
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
          // setLoading(true);
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
      setLoading(false);
    }
  }, [posts.length]);

  //get current posts

  // const indexOfLastpost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastpost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastpost);

  // //change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
    <div>
      <Navbar />
      <Heros />

      <div className={styles.main}>
        <h1 className={styles.title}>Posts</h1>
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
                  <h2>{p.category}</h2>
                  <h2 className={styles.card__title}>{p.title}</h2>
                  <p className={styles.card__excerpt}>{p.excerpt}</p>

                  <p className={styles.card__toolbar}>
                    Created | {p.publishedAt}
                  </p>
                </div>
              </a>
            ))
          ) : (
            <> No posts yet</>
          )}
        </div>
      </div>

      <IconContext.Provider value={{ size: 20, color: "#fff" }}>
        <div className={styles.holder}>
          {visible > 4 && (
            <div className={styles.button} onClick={showLessItems}>
              <MdNavigateBefore />
              <p className={styles.btnText}>Less</p>
            </div>
          )}

          <div className={styles.button} onClick={showMoreItems}>
            <p className={styles.btnText}>More</p>
            <MdNavigateNext />
          </div>
          {/* <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          /> */}
        </div>
      </IconContext.Provider>

      <Support />
      <Footer />
    </div>
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
