import styles from "./Footer.module.scss";
import Image from "next/image";
import shopzen from "@/public/images/shopzen.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles["footer-logo-container"]}>
        <div>
          <Link href="/">
            <Image
              src={shopzen.src}
              alt="shopzen logo"
              width={150}
              height={41}
            />
          </Link>
        </div>
        <div className={styles.aboutus}>
          <div className={styles["aboutus-title"]}>About us</div>
          <div className={styles["aboutus-content"]}>
            Welcome to Shopzen, your online fashion store for women of every
            shape and color. We celebrate diversity and offer a wide range of
            styles to empower and inspire. Our collection is curated with
            quality in mind, sourced from trusted suppliers. Shop with ease on
            our user-friendly website, where detailed descriptions and accurate
            sizing help you find your perfect fit. Experience exceptional
            customer service as we value your satisfaction.
          </div>
        </div>
      </div>
      <div className={styles["footer-navbar"]}>
        <div className={styles.quicklinks}>Quick Links</div>
        <div className={styles["quick-links-container"]}>
          <div className={styles.link}>
            <Link href="/">Home</Link>
          </div>
          <div className={styles.link}>
            <Link href="/lookbook">Lookbook</Link>
          </div>
          <div className={styles.link}>
            <Link href="/contactus">Contact us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
