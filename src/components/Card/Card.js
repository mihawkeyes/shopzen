import styles from "./Card.module.scss";

const Card = ({image}) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-image"]}>
        <img src={image.src} />
      </div>
      <div className={styles["card-detail"]}>
        <div className={styles["card-title"]}>title</div>
        <div className={styles["card-subtitle"]}>subtitle</div>
      </div>
    </div>
  );
};

export default Card;
