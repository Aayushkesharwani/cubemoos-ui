import Hero from "../../components/Hero/Hero";
import FlashSales from "../../components/FlashSales/FlashSales";
import CategoriesSidebar from "../../components/CategoriesSidebar/CategoriesSidebar";
import BestSelling from "../../components/BestSelling/BestSelling";
import PromoBanner from "../../components/PromoBanner/PromoBanner";
import ExploreProducts from "../../components/ExploreProducts/ExploreProducts";
import NewArrival from "../../components/NewArrival/NewArrival";
import Services from "../../components/Services/Services";
import BrowseByCategory from "../../components/BrowseByCategory/BrowseByCategory";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      {/* HERO SECTION WITH SIDEBAR */}
      <div className={styles.heroWrapper}>
        <CategoriesSidebar />
        <Hero />
      </div>

      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <PromoBanner />
      <ExploreProducts />
      <NewArrival />
      <Services />
      

    </>
  );
};

export default Home;
