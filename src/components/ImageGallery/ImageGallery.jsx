import { useEffect, useRef } from "react";
import css from "./ImageGallery.module.css";

import { ImageList } from "@mui/material";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onModalOpen }) => {
  const lastImageRef = useRef(null);

  useEffect(() => {
    if (lastImageRef.current) {
      const rect = lastImageRef.current.getBoundingClientRect();
      if (rect.bottom < window.innerHeight) {
        setTimeout(() => {
          window.scrollBy({
            top: rect.y,
            behavior: "smooth",
          });
        }, 300);
      }
    }
  }, [images]);

  return (
    <ImageList variant="quilted" cols={3} gap={8} className={css.container}>
      {images.map((image, index) => (
        <ImageCard
          key={image.id}
          image={image}
          onModalOpen={onModalOpen}
          ref={index === images.length - 1 ? lastImageRef : null}
        />
      ))}
    </ImageList>
  );
};

export default ImageGallery;
