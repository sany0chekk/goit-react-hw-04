import css from "./App.module.css";

import { useState } from "react";
import { searchImages } from "../../images-api";

import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const [images, setImages] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
      const photos = await searchImages(searchQuery, page + 1);
      setPage(page + 1);
      setImages([...images, ...photos]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoad(false);
    }
  };

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className={css.container}>
        <SearchBar onSubmit={handleSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} onModalOpen={handleOpenModal} />
        )}
        {images.length > 0 && !isLoad && (
          <LoadMoreBtn onLoadMore={onLoadMore} />
        )}
        {isLoad && <Loader />}
      </div>
      {isModalOpen && (
        <ImageModal
          image={selectedImage}
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default App;
