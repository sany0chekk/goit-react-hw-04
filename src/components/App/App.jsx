import css from "./App.module.css";

import { useState } from "react";
import { searchImages } from "../../images-api";

import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (query) => {
    try {
      setImages([]);
      const photos = await searchImages(query);
      setImages(photos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
    </div>
  );
};

export default App;
