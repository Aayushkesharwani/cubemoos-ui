import styles from "./About.module.css";
import heroImg from "../../assets/images/hero.jpg";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";

const About = () => {
  return (
    <div className={styles.about}>

      {/* HERO SECTION */}
      <div className={styles.hero}>
        <div className={styles.text}>
          <h2>Our Story</h2>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
        </div>

        <div className={styles.image}>
          <img src={heroImg} alt="about" />
        </div>
      </div>

      {/* STATS */}
      <div className={styles.stats}>
        <div><h3>10.5k</h3><p>Sellers active</p></div>
        <div className={styles.active}><h3>33k</h3><p>Monthly Sales</p></div>
        <div><h3>45.5k</h3><p>Customers active</p></div>
        <div><h3>25k</h3><p>Annual gross sales</p></div>
      </div>

      {/* TEAM */}
      <div className={styles.team}>
        <div className={styles.card}>
          <img src={team1} alt="" />
          <h4>Tom Cruise</h4>
          <p>Founder & Chairman</p>
        </div>

        <div className={styles.card}>
          <img src={team2} alt="" />
          <h4>Emma Watson</h4>
          <p>Managing Director</p>
        </div>

        <div className={styles.card}>
          <img src={team3} alt="" />
          <h4>Will Smith</h4>
          <p>Product Designer</p>
        </div>
      </div>

    </div>
  );
};

export default About;
