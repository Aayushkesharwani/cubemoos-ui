import styles from "./Services.module.css";
import {
  FaTruck,
  FaHeadset,
  FaMoneyBillWave,
} from "react-icons/fa";

const services = [
  {
    title: "Free Delivery",
    desc: "Free delivery for all orders over ₹500",
    icon: <FaTruck />,
  },
  {
    title: "24/7 Customer Service",
    desc: "Friendly 24/7 customer support",
    icon: <FaHeadset />,
  },
  {
    title: "Money Back Guarantee",
    desc: "We return money within 30 days",
    icon: <FaMoneyBillWave />,
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      {services.map((item) => (
        <div className={styles.card} key={item.title}>
          <div className={styles.icon}>{item.icon}</div>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
