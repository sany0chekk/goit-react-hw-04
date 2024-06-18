import { ImageListItem } from "@mui/material";
import css from "./ImageCard.module.css";

const ImageCard = ({ image, onModalOpen }) => {
  return (
    <>
      <ImageListItem className={css.card} data={image}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.img}
          onClick={() => onModalOpen(image)}
        />
      </ImageListItem>
    </>
  );
};

export default ImageCard;
