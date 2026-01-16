import styles from "./ExploreProducts.module.css";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";
import { exploreProducts } from "../../data/exploreProducts";

const ExploreProducts = () => {
  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <p className={styles.subTitle}>Our Products</p>
          <h2>Explore Our Products</h2>
        </div>

        <div className={styles.arrows}>
          <button>‹</button>
          <button>›</button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className={styles.products}>
        {exploreProducts.map((item) => (
          <div className={styles.card} key={item.id}>
            {/* ICONS */}
            <div className={styles.icons}>
              <FaHeart />
              <FaEye />
            </div>

            {/* IMAGE */}
            <img src={item.image} alt={item.title} />

            {/* TITLE */}
            <p className={styles.title}>{item.title}</p>

            {/* PRICE */}
            <p className={styles.price}>
              ${item.price}
              {item.oldPrice && <span>${item.oldPrice}</span>}
            </p>

            {/* RATING */}
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span>({item.reviews})</span>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <button className={styles.viewBtn}>View All Products</button>
    </section>
  );
};

export default ExploreProducts;
