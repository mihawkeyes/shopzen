import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import styles from "@/styles/contactus.module.scss";
import phone from "@/public/images/phoneicon.png";
import mobile from "@/public/images/mobileicon.png";
import location from "@/public/images/locationicon.png";
import pattern from "@/public/images/bgcontact.png";
import sidePhoto from "@/public/images/contactussidepic.jpg";

const contactus = () => {
  return (
    <div>
      <Header />
      <div className={styles.pattern}>
        <img src={pattern.src} alt="pattern" />
      </div>
      <div className={styles.contactus}>
        <div className={styles["contactus-title"]}>
          <div className={styles["contactus-title-head"]}>FOR EVERY HELP</div>
          <div className={styles["contactus-title-main"]}>CONTACT US</div>
        </div>
        <div className={styles["contactus-action"]}>
          <div className={styles["contactus-form"]}>
            <div className={styles["get-in-touch"]}>Get In Touch</div>
            <div className={styles["contact-data"]}>
              <div className={styles["contact-data-filed"]}>
                <div className={styles["icon"]}>
                  <img src={location.src} alt="location icon" />
                </div>
                <div className={styles["data"]}>123 Mockup St. New York</div>
              </div>
              <div className={styles["contact-data-filed"]}>
                <div className={styles["icon"]}>
                  <img src={phone.src} alt="phone icon" />
                </div>
                <div className={styles["data"]}>(+1) 123 456 7890</div>
              </div>
              <div className={styles["contact-data-filed"]}>
                <div className={styles["icon"]}>
                  <img src={mobile.src} alt="mobile icon" />
                </div>
                <div className={styles["data"]}>(+1) 123 456 7891</div>
              </div>
            </div>
            <form className={styles["contact-form"]}>
              <div className={styles["contact-form-data"]}>
                <div className={styles["contact-form-data-input"]}>
                  <input
                    className={styles.input}
                    placeholder="Name"
                    type="name"
                  />
                  <input
                    className={styles.input}
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <textarea
                  className={styles.input}
                  placeholder="Write your message here"
                  type="text"
                ></textarea>
              </div>
              <div className={styles["contact-form-action"]}>
                <button className={styles["contact-form-submit-button"]}>
                  Send
                </button>
              </div>
            </form>
          </div>
        
          <div className={styles["contactus-image"]}>
            <img src={sidePhoto.src} alt="contact us side photo" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contactus;
