import { useEffect, useRef } from "react";

import { ImageList } from "@mui/material";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onModalOpen }) => {
  const lastImageRef = useRef(null);

  useEffect(() => {}, [images]);

  return (
    <ImageList variant="quilted" cols={3} gap={8}>
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
