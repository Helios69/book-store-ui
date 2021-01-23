import React from "react";
import ProductReview from "../../components/ProductReview/ProductReview";
import styles from "./ProductPage.module.scss";

interface ProductPageProps {}

function ProductPage({}: ProductPageProps) {
  return (
    <div className={`container`}>
      <div className={`${styles.product}`}>
        <div className={`card ${styles.general}`}>
          <img
            className={styles.general__image}
            src={"https://eloquentjavascript.net/img/cover.jpg"}
            alt=""
          />
          <div className={styles.general__content}>
            <h1 className={styles.general__title}>Eloquent Javascript</h1>
            <div className={styles.general__in_stock} />
            <p className={styles.general__text}>
              The Star Wars Episode I: The Phantom Menace novelization was
              written by Terry Brooks and published on April 21, 1999 by Del
              Rey. It is based on the script of the movie of the same name.
              Narration for the abridged audio version was performed by Michael
              Cumpsty. The unabridged version was performed by Alexander Adams.
              On January 31, 2012, a new paperback edition.
            </p>
            <div className={styles.general__payment}>
              <div>
                <h3 className={styles.general__payment_title}>
                  Our price: <span>$150</span>
                </h3>
                <span className={styles.general__payment_discount}>
                  Was $200 Save 20%
                </span>
              </div>
              <button className={styles.general__payment_button}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
      <ProductReview />
      </div>
    </div>
  );
}

export default ProductPage;
