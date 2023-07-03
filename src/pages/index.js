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
export default function Home() {

  const router = useRouter();

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
          <button className={styles["lookbook-button"]} onClick={()=>{router.push('/lookbook')}}>
            Check out our Lookbook
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
