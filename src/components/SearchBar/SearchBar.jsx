import { Button, TextField } from "@mui/material";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleFormSubmit = (evt) => {
    const form = event.target;
    evt.preventDefault();

    const query = evt.target.query.value;
    console.log(query);
    onSubmit(query);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <TextField
          label="Search images and photos"
          name="query"
          variant="outlined"
          type="text"
          autoComplete="off"
          autoFocus
          className={css.input}
          size="small"
        />
        <Button variant="contained" type="submit" className={css.btn}>
          Search
        </Button>
      </form>
    </header>
  );
};

export default SearchBar;
