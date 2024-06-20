import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>Sorry, no images were found for your query</p>
      <p className={css.text}>
        Please try searching for images using a different keyword or phrase.
      </p>
    </div>
  );
};

export default ErrorMessage;
