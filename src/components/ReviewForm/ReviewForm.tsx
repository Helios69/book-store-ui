import { FormEvent, ReactEventHandler } from "react";
import { useForm } from "react-hook-form";
import styles from "./ReviewForm.module.scss";

interface ReviewFormProps {}
type Review = {
  name: string;
  email: string;
  message: string;
};

function ReviewForm({}: ReviewFormProps) {
  const { register, handleSubmit } = useForm<Review>();

  function onSubmitHandler(data: Review, e: any) {
    console.log(data);
    e.target.reset();
  }

  return (
    <>
      <h3 className={styles.title}>Write a comment</h3>
      <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.form}>
        <div className={styles.form__group}>
          <label htmlFor="name" className={styles.form__label}>
            Your name
          </label>
          <input
            ref={register({ required: true })}
            type="text"
            id="name"
            name="name"
            className={styles.form__input}
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="email" className={styles.form__label}>
            Email
          </label>
          <input
            ref={register({ required: true })}
            type="email"
            id="email"
            name="email"
            className={styles.form__input}
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="message" className={styles.form__label}>
            Message
          </label>
          <textarea
            ref={register({ required: true })}
            className={styles.form__textarea}
            id="message"
            name="message"
          />
        </div>
        <button type="submit" className={styles.form__submit_button}>
          Submit
        </button>
      </form>
    </>
  );
}

export default ReviewForm;
