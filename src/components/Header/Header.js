import styles from "./Header.module.scss";
import shopzen from "@/public/images/shopzen.png";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <img src={shopzen.src} alt="shopzen logo" />
        </div>
        <div className={styles["navbar-actions"]}>
          <div>Contact Us</div>
          <div>Lookbook</div>
          <button className={styles["discover-more-button"]}>
            Discover more
          </button>
        </div>
      </nav>

      <nav className={styles.mobilebar}>
        <div>
          <img src={shopzen.src} alt="shopzen logo" />
        </div>
        <div className={styles.hamburger}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="13.5"
            viewBox="0 0 36 13.5"
          >
            <path
              id="Icon_awesome-grip-lines"
              data-name="Icon awesome-grip-lines"
              d="M34.875,20.25H1.125A1.128,1.128,0,0,0,0,21.375v2.25A1.128,1.128,0,0,0,1.125,24.75h33.75A1.128,1.128,0,0,0,36,23.625v-2.25A1.128,1.128,0,0,0,34.875,20.25Zm0-9H1.125A1.128,1.128,0,0,0,0,12.375v2.25A1.128,1.128,0,0,0,1.125,15.75h33.75A1.128,1.128,0,0,0,36,14.625v-2.25A1.128,1.128,0,0,0,34.875,11.25Z"
              transform="translate(0 -11.25)"
            />
          </svg>
        </div>
      </nav>
      <div className={styles["navbar-mobile"]}>
        <div className={styles.backdrop}></div>
        <div className={styles.sidedrawer}></div>
      </div>
    </>
  );
};

export default Header;
