import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      {/* Breadcrumb */}
      <p className={styles.breadcrumb}>Home / Contact</p>

      <div className={styles.container}>
        {/* LEFT INFO */}
        <div className={styles.left}>
          <div className={styles.box}>
            <div className={styles.icon}>📞</div>
            <h4>Call To Us</h4>
            <p>We are available 24/7, 7 days a week.</p>
            <p className={styles.bold}>Phone: +8801611112222</p>
          </div>

          <hr />

          <div className={styles.box}>
            <div className={styles.icon}>✉️</div>
            <h4>Write To Us</h4>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p className={styles.bold}>Emails: customer@exclusive.com</p>
            <p className={styles.bold}>Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className={styles.right}>
          <div className={styles.inputs}>
            <input type="text" placeholder="Your Name *" />
            <input type="email" placeholder="Your Email *" />
            <input type="text" placeholder="Your Phone *" />
          </div>

          <textarea placeholder="Your Message"></textarea>

          <button className={styles.btn}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
