import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import styles from "./Header.module.css";
import userIcon from "../../assets/images/user.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* LOGO */}
      <div className={styles.logo}>
        <Link to="/">Exclusive</Link>
      </div>

      {/* NAV LINKS */}
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>

      {/* RIGHT SECTION */}
      <div className={styles.right}>
        {/* SEARCH */}
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="What are you looking for?"
          />
          <FiSearch className={styles.searchIcon} />
        </div>

        {/* HEART */}
        <Link to="/wishlist">
          <FaRegHeart className={styles.icon} />
        </Link>

        {/* CART */}
        <Link to="/cart">
          <FaShoppingCart className={styles.icon} />
        </Link>

        {/* USER DROPDOWN */}
        <div className={styles.account}>
          <img
            src={userIcon}
            alt="account"
            className={styles.userIcon}
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div className={styles.dropdown}>
              <Link to="/account">Manage My Account</Link>
              <Link to="/orders">My Orders</Link>
              <Link to="/wishlist">My Wishlist</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/login">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
