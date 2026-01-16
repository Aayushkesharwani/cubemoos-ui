import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <p className={styles.breadcrumb}>Home / Cart</p>

      {/* TABLE */}
      <div className={styles.table}>
        <div className={styles.header}>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>

        <div className={styles.row}>
          <div className={styles.product}>
            <img src="https://i.imgur.com/8IuucQZ.png" alt="" />
            <span>LCD Monitor</span>
          </div>
          <span>$650</span>
          <select>
            <option>01</option>
            <option>02</option>
          </select>
          <span>$650</span>
        </div>

        <div className={styles.row}>
          <div className={styles.product}>
            <img src="https://i.imgur.com/1Q9Z1Zm.png" alt="" />
            <span>H1 Gamepad</span>
          </div>
          <span>$550</span>
          <select>
            <option>01</option>
            <option>02</option>
          </select>
          <span>$1100</span>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className={styles.actions}>
        <button>Return To Shop</button>
        <button>Update Cart</button>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <div className={styles.coupon}>
          <input type="text" placeholder="Coupon Code" />
          <button>Apply Coupon</button>
        </div>

        <div className={styles.total}>
          <h3>Cart Total</h3>
          <p><span>Subtotal:</span><span>$1750</span></p>
          <p><span>Shipping:</span><span>Free</span></p>
          <p className={styles.grand}><span>Total:</span><span>$1750</span></p>

          <Link to="/checkout">
            <button className={styles.checkoutBtn}>
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
