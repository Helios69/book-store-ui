import styles from "./ProductReviewItem.module.scss";

interface ProductReviewItemProps {}

function ProductReviewItem({}: ProductReviewItemProps) {
  return (
    <li className={styles.review}>
      <div className={styles.review__author}>
        <img
          className={styles.review__author_avatar}
          src={
            "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          }
        />
        <h6 className={styles.review__author_fullname}>Mardari Vladislav</h6>
      </div>
      <p className={styles.review__text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially.
      </p>
    </li>
  );
}

export default ProductReviewItem;
