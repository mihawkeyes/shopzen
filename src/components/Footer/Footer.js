import styles from "./Footer.module.scss"
import Image from "next/image";
import shopzen from "@/public/images/shopzen.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles["footer-logo-container"]}>
        <div>
          <Image src={shopzen.src} alt="shopzen logo" width={150} height={41} />
        </div>
        <div className={styles.aboutus}>
          <div className={styles["aboutus-title"]}>About us</div>
          <div className={styles["aboutus-content"]}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem.
          </div>
        </div>
      </div>
      <div className={styles["footer-navbar"]}>
        <div className={styles.quicklinks}>Quick Links</div>
        <div className={styles.link}>Home</div>
        <div className={styles.link}>Lookbook</div>
        <div className={styles.link}>Contact us</div>
      </div>
    </div>
  );
}

export default Footer