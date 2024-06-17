import { ImageListItem } from "@mui/material";
import css from "./ImageCard.module.css";

const ImageCard = (image) => {
  return (
    <ImageListItem className={css.card} data={image}>
      <img src={image.src} alt={image.name} className={css.img} />
    </ImageListItem>
  );
};

export default ImageCard;
