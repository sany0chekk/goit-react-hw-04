import { ImageListItem } from "@mui/material";
import css from "./ImageCard.module.css";

const ImageCard = ({ src, name }) => {
  return (
    <ImageListItem>
      <img src={src} alt={name} className={css.img} />
    </ImageListItem>
  );
};

export default ImageCard;
