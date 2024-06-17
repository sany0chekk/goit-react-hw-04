import { Box, Button } from "@mui/material";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <Box className={css.container}>
      <Button variant="contained" onClick={onLoadMore} className={css.btn}>
        Load more
      </Button>
    </Box>
  );
};

export default LoadMoreBtn;
