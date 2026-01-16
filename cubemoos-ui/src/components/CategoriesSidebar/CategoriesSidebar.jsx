import styles from "./CategoriesSidebar.module.css";

const CategoriesSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li>Women’s Fashion ›</li>
        <li>Men’s Fashion ›</li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby’s & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </aside>
  );
};

export default CategoriesSidebar;
