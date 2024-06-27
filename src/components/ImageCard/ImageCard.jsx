import { ImageListItem } from "@mui/material";
import css from "./ImageCard.module.css";
import { forwardRef } from "react";

const ImageCard = forwardRef(({ image, onModalOpen }, ref) => {
  return (
    <>
      <ImageListItem className={css.card} ref={ref}>
        <img
          src={image.urls.small}
          alt={image.alt_description}
          className={css.img}
          onClick={() => onModalOpen(image)}
        />
      </ImageListItem>
    </>
  );
});

ImageCard.displayName = "ImageCard";

export default ImageCard;
