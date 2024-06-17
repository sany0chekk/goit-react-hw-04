import css from "./App.module.css";

import { useState } from "react";
import { searchImages } from "../../images-api";

import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  const handleSubmit = async (query) => {
    try {
      setIsLoad(true);
      setPage(1);
      setImages([]);
      setSearchQuery(query);
      const photos = await searchImages(query);
      setImages(photos);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoad(false);
    }
  };

  const onLoadMore = async () => {
    try {
      setIsLoad(true);
      setPage((prevPage) => prevPage + 1);
      const photos = await searchImages(searchQuery, page + 1);
      setImages([...images, ...photos]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoad(false);
    }
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && !isLoad && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {isLoad && <Loader />}
    </div>
  );
};

export default App;
