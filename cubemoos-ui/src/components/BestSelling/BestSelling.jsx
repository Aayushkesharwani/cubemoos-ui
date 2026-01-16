import styles from "./BestSelling.module.css";
import { FaHeart, FaStar } from "react-icons/fa";
import northCoat from "../../assets/images/jacket.jpg";
import gucciBag from "../../assets/images/bag.jpg";
import cpuCooler from "../../assets/images/promo-speaker.jpg";
import bookShelf from "../../assets/images/book self.jpg";

const products = [
  {
    id: 1,
    title: "The north coat",
    img: northCoat,
    price: 260,
    oldPrice: 360,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    title: "Gucci duffle bag",
    img: gucciBag,
    price: 960,
    oldPrice: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 3,
    title: "RGB liquid CPU Cooler",
    img: cpuCooler,
    price: 160,
    oldPrice: 170,
    rating: 5,
    reviews: 65,
  },
  {
    id: 4,
    title: "Small BookSelf",
    img: bookShelf,
    price: 360,
    oldPrice: 0,
    rating: 5,
    reviews: 65,
  },
];

const BestSelling = () => {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <span className={styles.month}>This Month</span>
          <h2>Best Selling Products</h2>
        </div>

        <button className={styles.viewBtn}>View All</button>
      </div>

      {/* Products */}
      <div className={styles.products}>
        {products.map((p) => (
          <div className={styles.card} key={p.id}>
            <div className={styles.imageBox}>
              <FaHeart className={styles.heart} />
              <img src={p.img} alt={p.title} />
            </div>

            <h4>{p.title}</h4>
             <button className={styles.cartBtn}>Add To Cart</button>
            <div className={styles.price}>
              ${p.price}
              {p.oldPrice > 0 && <span>${p.oldPrice}</span>}
            </div>

            <div className={styles.rating}>
              {[...Array(p.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span>({p.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
