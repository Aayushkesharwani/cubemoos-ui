import styles from "./NewArrival.module.css";

import ps5 from "../../assets/images/ps5.png";
import women from "../../assets/images/woman.png";
import speakers from "../../assets/images/Speaker.png";
import perfume from "../../assets/images/Perfume.png";

const NewArrival = () => {
  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header}>
        <span className={styles.featured}>Featured</span>
        <h2>New Arrival</h2>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {/* LEFT BIG */}
        <div className={`${styles.card} ${styles.big}`}>
          <img src={ps5} alt="Playstation 5" />
          <div className={styles.content}>
            <h3>PlayStation 5</h3>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <button>Shop Now</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          {/* TOP */}
          <div className={`${styles.card} ${styles.top}`}>
            <img src={women} alt="Women Collection" />
            <div className={styles.content}>
              <h3>Women’s Collections</h3>
              <p>Featured woman collections that give you another vibe.</p>
              <button>Shop Now</button>
            </div>
          </div>

          {/* BOTTOM */}
          <div className={styles.bottom}>
            <div className={styles.card}>
              <img src={speakers} alt="Speakers" />
              <div className={styles.content}>
                <h3>Speakers</h3>
                <p>Amazon wireless speakers</p>
                <button>Shop Now</button>
              </div>
            </div>

            <div className={styles.card}>
              <img src={perfume} alt="Perfume" />
              <div className={styles.content}>
                <h3>Perfume</h3>
                <p>GUCCI INTENSE OUD EDP</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
