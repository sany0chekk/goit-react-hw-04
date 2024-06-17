import { Box, CircularProgress } from "@mui/material";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <Box className={css.container}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
