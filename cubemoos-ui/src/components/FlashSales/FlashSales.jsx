import styles from "./FlashSales.module.css";
import { FaStar, FaHeart, FaEye, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gamepad from "../../assets/images/product-gamepad.jpg";
import keyboard from "../../assets/images/product-keyboard.jpg";
import monitor from "../../assets/images/product-monitor.jpg";
import chair from "../../assets/images/product-chair.jpg";


const products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    img: gamepad,
    price: 120,
    oldPrice: 160,
    discount: "-40%",
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    img: keyboard,
    price: 960,
    oldPrice: 1160,
    discount: "-35%",
    rating: 4,
    reviews: 75,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    img: monitor,
    price: 370,
    oldPrice: 400,
    discount: "-30%",
    rating: 5,
    reviews: 99,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    img: chair,
    price: 375,
    oldPrice: 400,
    discount: "-25%",
    rating: 5,
    reviews: 99,
  },
];

const FlashSales = () => {
  return (
    <section className={styles.flash}>
      {/* Header */}
      <div className={styles.top}>
        <div>
          <span className={styles.today}>Today’s</span>
          <h2>Flash Sales</h2>
        </div>

        {/* Timer */}
        <div className={styles.timer}>
          <div><p>Days</p><h3>03</h3></div>
          <span>:</span>
          <div><p>Hours</p><h3>23</h3></div>
          <span>:</span>
          <div><p>Minutes</p><h3>19</h3></div>
          <span>:</span>
          <div><p>Seconds</p><h3>56</h3></div>
        </div>

        {/* Arrows */}
        <div className={styles.arrows}>
          <FaArrowLeft />
          <FaArrowRight />
        </div>
      </div>

      {/* Products */}
      <div className={styles.products}>
        {products.map((p) => (
          <div key={p.id} className={styles.card}>
            <span className={styles.discount}>{p.discount}</span>

            <div className={styles.icons}>
              <FaHeart />
              <FaEye />
            </div>

            <img src={p.img} alt={p.title} />

            <button className={styles.cartBtn}>Add To Cart</button>

            <h4>{p.title}</h4>

            <div className={styles.price}>
              ${p.price}
              <span>${p.oldPrice}</span>
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

      <button className={styles.viewBtn}>View All Products</button>
    </section>
  );
};

export default FlashSales;
