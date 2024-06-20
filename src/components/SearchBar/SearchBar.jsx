import { Button, TextField } from "@mui/material";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const query = evt.target.query.value;

    if (!query) {
      toast.error("Please enter a search query.");
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <>
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
      <Toaster position="top-right" />
    </>
  );
};

export default SearchBar;
