import styles from "./Card.module.scss";
import collection from "@/public/images/collectionlookbook.png";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles["card-image"]}>
        <img src={collection.src} />
      </div>
      <div className={styles["card-detail"]}>
        <div className={styles["card-title"]}>title</div>
        <div className={styles["card-subtitle"]}>subtitle</div>
      </div>
    </div>
  );
};

export default Card;
