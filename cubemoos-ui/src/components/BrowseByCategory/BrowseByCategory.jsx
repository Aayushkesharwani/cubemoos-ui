import styles from "./BrowseByCategory.module.css";
import {
  FaMobileAlt,
  FaDesktop,
  FaClock,
  FaCamera,
  FaHeadphones,
  FaGamepad,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  { id: 1, name: "Phones", icon: <FaMobileAlt /> },
  { id: 2, name: "Computers", icon: <FaDesktop /> },
  { id: 3, name: "SmartWatch", icon: <FaClock /> },
  { id: 4, name: "Camera", icon: <FaCamera />, active: true },
  { id: 5, name: "HeadPhones", icon: <FaHeadphones /> },
  { id: 6, name: "Gaming", icon: <FaGamepad /> },
];

const BrowseByCategory = () => {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <span className={styles.label}>Categories</span>
          <h2>Browse By Category</h2>
        </div>

        <div className={styles.arrows}>
          <button>
            <FaArrowLeft />
          </button>
          <button>
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className={styles.grid}>
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`${styles.card} ${
              cat.active ? styles.active : ""
            }`}
          >
            <div className={styles.icon}>{cat.icon}</div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseByCategory;
