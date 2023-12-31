import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/lookbook.module.scss";
import collection from "@/public/images/collectionlookbook.png";
import Card from "@/components/Card";
import banner from "@/public/images/lookbookbanner.jpg";
import shutterstock from "@/public/images/realwomenlookbookbanner.png";
import { useEffect, useState } from "react";
import collectionPic1 from "@/public/images/pic1.jpg";
import collectionPic2 from "@/public/images/pic2.jpg";
import collectionPic3 from "@/public/images/pic3.jpg";
import collectionPic4 from "@/public/images/pic4.jpg";
import collectionPic5 from "@/public/images/pic5.jpg";
import collectionPic6 from "@/public/images/pic6.jpg";
import collectionPic7 from "@/public/images/pic7.jpg";
import collectionPic8 from "@/public/images/pic8.jpg";
import collectionPic9 from "@/public/images/pic9.jpg";
import shopzenCollection from "@/public/images/elegant-woman-blue.png";
import { useRouter } from "next/router";

const lookbook = () => {
  const [mobileView, setMobileView] = useState(false);
  const router = useRouter();
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
  return (
    <div>
      <Header />
      <div className={styles["shopzen-collection"]}>
        <img src={banner.src} />
      </div>
      <div className={styles.collection}>
        <div className={styles["collectiontext"]}>
          <div className={styles["collection-title"]}>
            <div className={styles.shopzen}>
              ShopZen
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 41.718 44.5"
                >
                  <path
                    id="Icon_awesome-star-of-life"
                    data-name="Icon awesome-star-of-life"
                    d="M41.023,29.067,29.208,22.25l11.814-6.817a1.39,1.39,0,0,0,.509-1.9L38.749,8.716a1.392,1.392,0,0,0-1.9-.509L25.034,15.023V1.391A1.391,1.391,0,0,0,23.642,0H18.076a1.391,1.391,0,0,0-1.391,1.391l-.937,12.143L4.871,8.207a1.392,1.392,0,0,0-1.9.509L.187,13.533a1.39,1.39,0,0,0,.509,1.9l14.075,5.61h2.883L15.748,19.9.7,29.067a1.39,1.39,0,0,0-.509,1.9L2.97,35.784a1.393,1.393,0,0,0,1.9.509l11.814-6.817V43.109A1.391,1.391,0,0,0,18.076,44.5h5.566a1.391,1.391,0,0,0,1.391-1.391V29.476l11.814,6.817a1.391,1.391,0,0,0,1.9-.509l2.783-4.818A1.389,1.389,0,0,0,41.023,29.067Z"
                    transform="translate(0)"
                    fill="rgba(227,149,115,0.57)"
                  />
                </svg>
              </span>
            </div>
            <div className={styles.subtitle}>Collection</div>
          </div>
          <div className={styles["collection-para"]}>
            Unleash your inner fashionista, our collection is sublime, Elevate
            your wardrobe with designs that truly shine.
          </div>
        </div>
        <div className={styles["collection-image"]}>
          <img src={collection.src} />
        </div>
      </div>
      <div className={styles.categolue} id="categolue">
        <div className={styles["categolue-title"]}>Categoule</div>
        <div className={styles["categolue-grid"]}>
          {mobileView ? (
            <>
              <Card
                image={collectionPic1}
                title={"title"}
                subtitle={"sub-title"}
              />
              <Card
                image={collectionPic2}
                title={"title"}
                subtitle={"sub-title"}
              />
              <Card
                image={collectionPic3}
                title={"title"}
                subtitle={"sub-title"}
              />
              <Card
                image={collectionPic4}
                title={"title"}
                subtitle={"sub-title"}
              />
            </>
          ) : (
            <>
              <Card
                image={collectionPic1}
                title={"title"}
                subtitle={"sub-title"}
              />
              <Card
                image={collectionPic2}
                title={"title"}
                subtitle={"sub-title"}
              />
              <Card
                image={collectionPic3}
                title={"title"}
                subtitle={"sub-title"}
              />
              <Card
                image={collectionPic4}
                title={"title"}
                subtitle={"sub-title"}
              />
              <Card
                image={collectionPic5}
                title={"title"}
                subtitle={"sub-title"}
              />
              <Card
                image={collectionPic6}
                title={"title"}
                subtitle={"sub-title"}
              />
              <Card
                image={collectionPic7}
                title={"title"}
                subtitle={"sub-title"}
              />
              <Card
                image={collectionPic8}
                title={"title"}
                subtitle={"sub-title"}
              />
              <Card
                image={collectionPic9}
                title={"title"}
                subtitle={"sub-title"}
              />
            </>
          )}
        </div>
      </div>
      <div className={styles.collection2}>
        <div className={styles["collection-image2"]}>
          <img src={shopzenCollection.src} />
        </div>
        <div className={styles["collectiontext2"]}>
          <div className={styles["collection-title"]}>
            <div className={styles.shopzen}>ShopZen</div>
            <div className={styles.subtitle}>Collection</div>
          </div>
          <div className={styles["collection-para"]}>
            Step into a world of fashion that's bold and chic, Find your
            signature style with each unique boutique.
          </div>
        </div>
      </div>
      <div className={styles.shutterstock}>
        <img src={shutterstock.src} />
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
                <button
                  className={styles["shutterstock-action-button"]}
                  onClick={() => {
                    router.push("/lookbook#categolue");
                  }}
                >
                  Browse Collections
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
      <Footer />
    </div>
  );
};

export default lookbook;
