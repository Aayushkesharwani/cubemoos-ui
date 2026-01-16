import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* COLUMN 1 */}
        <div>
          <h3 className={styles.logo}>Exclusive</h3>
          <p>Subscribe</p>
          <span>Get 10% off your first order</span>

          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your email" />
            <button>➜</button>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4>Support</h4>
          <p>111 Bijoy sarani, Dhaka,</p>
          <p>DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4>Account</h4>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h4>Quick Link</h4>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        {/* COLUMN 5 */}
        <div>
          <h4>Download App</h4>
          <span className={styles.small}>
            Save $3 with App New User Only
          </span>

          <div className={styles.store}>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=exclusive"
              alt="QR"
            />
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="PlayStore"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="AppStore"
              />
            </div>
          </div>

          <div className={styles.social}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <hr />

      <p className={styles.copy}>
        © Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
