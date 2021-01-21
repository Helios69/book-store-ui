import React from "react";
import ProductsTabView from "../../components/ProductsTabView/ProductsTabView";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./HomePage.module.scss";

interface HomePageProps {}

function HomePage({}: HomePageProps) {
  return (
    <div className={`container ${styles.homePage}`}>
      <Sidebar />
      <ProductsTabView />
    </div>
  );
}

export default HomePage;
