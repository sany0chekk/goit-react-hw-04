import { ImageList } from "@mui/material";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          src={image.urls.regular}
          name={image.alt_description}
        />
      ))}
    </ImageList>
  );
};

export default ImageGallery;
