import ProductReviewItem from "../ProductReviewItem/ProductReviewItem";
import ReviewForm from "../ReviewForm/ReviewForm";
import styles from "./ProductReview.module.scss";

interface ProductReviewProps {}

function ProductReview({}: ProductReviewProps) {
  return (
    <div className={`card ${styles.reviews}`}>
      <h1 className={styles.section_title}>Product review</h1>
      <ul className={styles.reviews__list}>
        <ProductReviewItem />
        <ProductReviewItem />
        <ProductReviewItem />
      </ul>
      <ReviewForm />
    </div>
  );
}

export default ProductReview;
