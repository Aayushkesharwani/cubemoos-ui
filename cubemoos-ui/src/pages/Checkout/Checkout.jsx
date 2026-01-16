import styles from "./Checkout.module.css";

const Checkout = () => {
  return (
    <div className={styles.checkout}>
      {/* Breadcrumb */}
      <p className={styles.breadcrumb}>
        Account / My Account / Product / View Cart / <b>Checkout</b>
      </p>

      <div className={styles.container}>
        {/* LEFT - Billing Form */}
        <div className={styles.billing}>
          <h2>Billing Details</h2>

          <input type="text" placeholder="First Name*" />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Street Address*" />
          <input type="text" placeholder="Apartment, floor, etc. (optional)" />
          <input type="text" placeholder="Town/City*" />
          <input type="text" placeholder="Phone Number*" />
          <input type="email" placeholder="Email Address*" />

          <label className={styles.save}>
            <input type="checkbox" />
            Save this information for faster check-out next time
          </label>
        </div>

        {/* RIGHT - Order Summary */}
        <div className={styles.summary}>
          <div className={styles.product}>
            <span>LCD Monitor</span>
            <span>$650</span>
          </div>

          <div className={styles.product}>
            <span>H1 Gamepad</span>
            <span>$100</span>
          </div>

          <hr />

          <div className={styles.row}>
            <span>Subtotal:</span>
            <span>$750</span>
          </div>

          <div className={styles.row}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className={styles.total}>
            <span>Total:</span>
            <span>$750</span>
          </div>

          {/* Payment */}
          <div className={styles.payment}>
            <label>
              <input type="radio" name="pay" />
              Bank
            </label>

            <label>
              <input type="radio" name="pay" defaultChecked />
              Cash on delivery
            </label>
          </div>

          {/* Coupon */}
          <div className={styles.coupon}>
            <input type="text" placeholder="Coupon Code" />
            <button>Apply Coupon</button>
          </div>

          <button className={styles.orderBtn}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
