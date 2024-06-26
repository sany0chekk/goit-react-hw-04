import css from "./App.module.css";

import { useState } from "react";
import { searchImages } from "../../images-api";

import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [images, setImages] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (query) => {
    try {
      setIsLoad(true);
      setPage(1);
      setImages([]);
      setSearchQuery(query);
      setError(false);
      const photos = await searchImages(query);
      if (photos.total <= 0) {
        setError(true);
      } else {
        setImages(photos.results);
        setTotalPages(photos.total_pages);
        console.log(photos);
      }
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
      setImages([...images, ...photos.results]);
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
        {error && <ErrorMessage />}
        {images.length > 0 && (
          <ImageGallery images={images} onModalOpen={handleOpenModal} />
        )}
        {images.length > 0 && page < totalPages && !isLoad && (
          <LoadMoreBtn onLoadMore={onLoadMore} />
        )}
        {isLoad && <Loader />}
      </div>

      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
};

export default App;
