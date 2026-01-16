import styles from "./Account.module.css";

const Account = () => {
  return (
    <section className={styles.account}>
      {/* breadcrumb */}
      <div className={styles.top}>
        <p>
          Home / <span>My Account</span>
        </p>
        <p className={styles.welcome}>
          Welcome! <span>Md Rimel</span>
        </p>
      </div>

      <div className={styles.container}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h4>Manage My Account</h4>
          <ul>
            <li className={styles.active}>My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>

          <h4>My Orders</h4>
          <ul>
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>

          <h4>My WishList</h4>
        </aside>

        {/* Right Form */}
        <div className={styles.formBox}>
          <h3>Edit Your Profile</h3>

          <div className={styles.grid}>
            <div>
              <label>First Name</label>
              <input value="Md" />
            </div>
            <div>
              <label>Last Name</label>
              <input value="Rimel" />
            </div>
            <div>
              <label>Email</label>
              <input value="rimel111@gmail.com" />
            </div>
            <div>
              <label>Address</label>
              <input value="Kingston, 5236, United State" />
            </div>
          </div>

          <div className={styles.password}>
            <label>Password Changes</label>
            <input placeholder="Current Password" />
            <input placeholder="New Password" />
            <input placeholder="Confirm New Password" />
          </div>

          <div className={styles.actions}>
            <button className={styles.cancel}>Cancel</button>
            <button className={styles.save}>Save Changes</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
