import styles from "./Hero.module.css";
import phoneImg from "../../assets/images/hero-phone.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      
      {/* LEFT CONTENT */}
      <div className={styles.left}>
        <div className={styles.badge}>
          <span></span>
          <p>iPhone 14 Series</p>
        </div>

        <h1>
          Up to 10% <br /> off Voucher
        </h1>

        <button className={styles.shopBtn}>
          Shop Now →
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className={styles.right}>
        <img src={phoneImg} alt="iPhone" />
      </div>

    </section>
  );
};

export default Hero;
