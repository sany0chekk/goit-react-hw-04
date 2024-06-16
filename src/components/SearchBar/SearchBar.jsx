import { Button, TextField } from "@mui/material";
import css from "./SearchBar.module.css";

const SearchBar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <TextField
          label="Search images and photos"
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
