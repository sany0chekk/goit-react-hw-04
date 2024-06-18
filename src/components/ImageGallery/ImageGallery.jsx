import { ImageList } from "@mui/material";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onModalOpen }) => {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onModalOpen={onModalOpen} />
      ))}
    </ImageList>
  );
};

export default ImageGallery;
