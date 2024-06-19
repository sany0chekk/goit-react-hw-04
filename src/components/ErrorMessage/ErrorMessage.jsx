import { Alert } from "@mui/material";
import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <Alert
      sx={{ maxWidth: "300px", margin: "0 auto" }}
      className={css.alert}
      variant="filled"
      severity="error"
    >
      No results found for your query.
    </Alert>
  );
};

export default ErrorMessage;
