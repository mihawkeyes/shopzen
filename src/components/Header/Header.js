import styles from "./Header.module.scss";
import shopzen from "@/public/images/shopzen.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const  [isNavbarOpen, setIsNavbarOpen]  = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <Link href="/">
            <img src={shopzen.src} alt="shopzen logo" />
          </Link>
        </div>
        <div className={styles["navbar-actions"]}>
          <div>
            <Link href="/contactus">Contact Us</Link>
          </div>
          <div>
            <Link href="/lookbook">Lookbook</Link>
          </div>
          <button className={styles["discover-more-button"]}>
            Discover more
          </button>
        </div>
      </nav>

      <nav className={styles.mobilebar}>
        <div>
          <Link href="/">
            <img src={shopzen.src} alt="shopzen logo" />
          </Link>
        </div>
        <div
          className={styles.hamburger}
          onClick={() => {
            setIsNavbarOpen(true);
          }}
        >
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
      {isNavbarOpen && (
        <div className={styles["navbar-mobile"]}>
          <div className={styles.backdrop}>
            <div
              className={styles.close}
              onClick={() => {
                setIsNavbarOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="close"
              >
                <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
              </svg>
            </div>
            <div className={styles["main-content"]}>
              <div>
                <Link href="/lookbook">Lookbook</Link>
              </div>
              <div>
                <Link href="/contactus">Contact Us</Link>
              </div>
              <button className={styles["discover-more-button"]}>
                Discover more
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
