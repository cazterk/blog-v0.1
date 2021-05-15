import { Navbar } from "../components/navbar";
import { Heros } from "../components/heros";
import { Footer } from "../components/footer";
import { Support } from "../components/support";
import styles from "../styles/home.module.scss";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home({ posts, load }) {
  if (load) {
    return <h2>loading</h2>;
  }

  const router = useRouter();
  const [mappedPost, setmappedPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const [visible, setvisible] = useState(2);

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

  const indexOfLastpost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastpost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastpost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const showMoreItems = () => {
    if (visible < posts.length) {
      setvisible((preValue) => preValue + 2);
    } else {
      setvisible((preValue) => preValue + 0);
    }
  };

  const showLessItems = () => {
    if (visible > 2) {
      setvisible((preValue) => preValue - 2);
    }
  };

  return (
    <div>
      <Navbar />
      <Heros />

      <div className={styles.main}>
        <div className={styles.container}>
          {mappedPost.length ? (
            mappedPost.slice(0, visible).map((p, index) => (
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

      <div className={styles.holder}>
        <div className={styles.button} onClick={showLessItems}>
          <p className={styles.btnText}> Less! </p>
          {/* <div className={styles.btnTwo}>
            <p className={styles.btnText2}>Load</p>
          </div> */}
        </div>

        <div className={styles.button} onClick={showMoreItems}>
          <p className={styles.btnText}>More! </p>
          {/* <div className={styles.btnTwo}>
            <p className={styles.btnText2}>Load</p>
          </div> */}
        </div>
        {/* <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          /> */}
      </div>

      <Support />
      <Footer />
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
