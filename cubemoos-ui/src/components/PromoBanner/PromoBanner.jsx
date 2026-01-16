import styles from "./PromoBanner.module.css";
import speakerImg from "../../assets/images/JBL.png"; 

const PromoBanner = () => {
  return (
    <section className={styles.promo}>
      {/* LEFT CONTENT */}
      <div className={styles.left}>
        <span className={styles.category}>Categories</span>

        <h1>
          Enhance Your <br /> Music Experience
        </h1>

        <div className={styles.timer}>
          <div>
            <strong>23</strong>
            <span>Hours</span>
          </div>
          <div>
            <strong>05</strong>
            <span>Days</span>
          </div>
          <div>
            <strong>59</strong>
            <span>Minutes</span>
          </div>
          <div>
            <strong>35</strong>
            <span>Seconds</span>
          </div>
        </div>

        <button className={styles.buyBtn}>Buy Now!</button>
      </div>

      {/* RIGHT IMAGE */}
      <div className={styles.right}>
        <img src={speakerImg} alt="Speaker" />
      </div>
    </section>
  );
};

export default PromoBanner;
