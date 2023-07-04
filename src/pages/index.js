import Image from "next/image";
import styles from "../styles/Home.module.scss";
// import Navbar from "@/components/Navbar";
import shopzen from "@/public/images/shopzen.png";
import banner from "@/public/images/bannerdesktop.png";
import couture from "@/public/images/couturedekstop.png";
import collection2019 from "@/public/images/collection2019.png";
import collection2020 from "@/public/images/collection2020.png";
import collection2021 from "@/public/images/collection2021.png";
import lookbook from "@/public/images/badge.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const router = useRouter();
  const [mobileView, setMobileView] = useState(false);
  const carousel = useRef();

  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
    const setDisplay = () => {
      if (window.innerWidth < 768) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };
    window.addEventListener("resize", setDisplay);
    return () => window.removeEventListener("resize", setDisplay);
  }, []);

  const scroll = (direction) => {
    if (
      direction === "right" &&
      carousel.current.scrollLeft <= carousel.current.scrollWidth
    ) {
      if (carousel.current.scrollLeft + 185 <= 371) {
        carousel.current.scrollLeft += 185;
      }else{
        carousel.current.scrollLeft = 371;
      }
    }
    if (direction === "left" && carousel.current.scrollLeft > 0) {
      if (carousel.current.scrollLeft - 185 >= 0) {
        carousel.current.scrollLeft -= 185;
      } else {
        carousel.current.scrollLeft = 0;
      }
    }
  };

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.header}>
        <div className={styles.banner}>
          <img src={banner.src} alt="For Every Woman Banner" />
        </div>
      </div>
      <div className={styles.couture}>
        <div className={styles.banner}>
          <img src={couture.src} alt="For Future Couture Banner" />
        </div>
        <div className={styles.text}>
          <p>
            With the young leading the charge against giant corporations, the
            appeal of small labels with big visions will only grow.
          </p>
        </div>
        {!mobileView && (
          <div className={styles.collection}>
            <div className={`${styles.banner}`}>
              <img src={collection2019.src} alt="collection 2019" />
            </div>
            <div className={styles.banner}>
              <img src={collection2020.src} alt="collection 2020" />
            </div>
            <div className={styles.banner}>
              <img src={collection2021.src} alt="collection 2021" />
            </div>
          </div>
        )}
        {mobileView && (
          <div className={styles["collection-carousel"]}>
            <div
              className={styles.left}
              onClick={() => {
                scroll("left");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 34.875 34.875"
              >
                <path
                  id="Icon_awesome-arrow-alt-circle-left"
                  data-name="Icon awesome-arrow-alt-circle-left"
                  d="M18,35.438A17.438,17.438,0,1,1,35.438,18,17.434,17.434,0,0,1,18,35.438Zm8.156-20.531H18V9.921a.844.844,0,0,0-1.441-.6L8.522,17.4a.836.836,0,0,0,0,1.188l8.037,8.079a.844.844,0,0,0,1.441-.6V21.094h8.156A.846.846,0,0,0,27,20.25v-4.5A.846.846,0,0,0,26.156,14.906Z"
                  transform="translate(-0.563 -0.563)"
                />
              </svg>
            </div>
            <div className={styles.container} ref={carousel}>
              <div className={`${styles.banner}`}>
                <img src={collection2019.src} alt="collection 2019" />
              </div>
              <div className={styles.banner}>
                <img src={collection2020.src} alt="collection 2020" />
              </div>
              <div className={styles.banner}>
                <img src={collection2021.src} alt="collection 2021" />
              </div>
            </div>
            <div
              className={styles.right}
              onClick={() => {
                scroll("right");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 34.875 34.875"
                style={{ transform: "rotateZ(180deg)" }}
              >
                <path
                  id="Icon_awesome-arrow-alt-circle-left"
                  data-name="Icon awesome-arrow-alt-circle-left"
                  d="M18,35.438A17.438,17.438,0,1,1,35.438,18,17.434,17.434,0,0,1,18,35.438Zm8.156-20.531H18V9.921a.844.844,0,0,0-1.441-.6L8.522,17.4a.836.836,0,0,0,0,1.188l8.037,8.079a.844.844,0,0,0,1.441-.6V21.094h8.156A.846.846,0,0,0,27,20.25v-4.5A.846.846,0,0,0,26.156,14.906Z"
                  transform="translate(-0.563 -0.563)"
                />
              </svg>
            </div>
          </div>
        )}
        <div className={styles["collection-action"]}>
          <button className={styles["browse-collection-button"]}>
            Browse Collections
          </button>
        </div>
      </div>
      <div className={styles.shutterstock}>
        <div className={styles.content}>
          <div className={styles.craftsmanship}>
            <span className={styles["craftsmanship-box"]}></span>
            <div className={styles["craftsmanship-text"]}>craftsmanship</div>
          </div>
          <div className={styles["shutterstock-text"]}>
            Real women fashion state, insidious whispering of male
          </div>
          <div className={styles["shutterstock-action-container"]}>
            <div className={styles["shutterstock-action-button-container"]}>
              <div className={styles["shutterstock-action-button-text"]}>
                Still, what we never reckoned with then was the notion that the
                achievement of women designers today would amount to a reshaping
                of the industry—not by fitting in with male-led corporate rules
                but by steadily ignoring them, trusting their own instincts,
                living how they wish, and opening wide the creative space for a
                whole generation to thrive.
              </div>
              <div className={styles["shutterstock-action"]}>
                <button className={styles["shutterstock-action-button"]}>
                  Discover more
                </button>
              </div>
            </div>
            <div className={styles["shutterstock-extra-text"]}>
              They're defying the norm and redefining what it means to be
              beautiful.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.quote}>
        <div className={styles["quote-text"]}>
          I think there is beauty in everything. What 'normal' people perceive
          as ugly, I can usually see something of beauty in it.
        </div>
        <div className={styles["author"]}>Alexander McQueen; designer</div>
        <div className={styles["quote-symbol"]}>"</div>
      </div>
      <div className={styles.lookbook}>
        <div className={styles["lookbook-content"]}>
          <div className={styles["lookbook-container"]}>
            <div className={styles["lookbook-text"]}>
              <div>
                <span className={styles.look}>Look</span>
                <span className={styles.book}>
                  <span style={{ color: "white" }}>b</span>ook
                </span>
              </div>
              <div>
                <span className={styles.for}>For.</span>
                <span className={styles.you}>you darling</span>
              </div>
            </div>
            <div className={styles["lookbook-logo-container"]}>
              <div>
                <img src={lookbook.src} alt="Fashion Our Reality logo" />
              </div>
              <div className={styles["lookbook-logo-text"]}>
                Woman inspired and drove our designers when creating this
                collection
              </div>
            </div>
          </div>
        </div>
        <div className={styles["lookbook-action"]}>
          <button
            className={styles["lookbook-button"]}
            onClick={() => {
              router.push("/lookbook");
            }}
          >
            Check out our Lookbook
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
