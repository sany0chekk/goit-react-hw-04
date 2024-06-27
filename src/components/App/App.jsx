import css from "./App.module.css";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const fetchImages = async () => {
      if (!searchQuery) return;
      try {
        setIsLoad(true);
        const photos = await searchImages(searchQuery, page);
        if (page === 1) {
          setImages(photos.results);
        } else {
          setImages((prevImages) => [...prevImages, ...photos.results]);
        }
        setTotalPages(photos.total_pages);
        if (photos.total <= 0) {
          setError(true);
        } else {
          setError(false);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    };
    fetchImages();
  }, [searchQuery, page]);

  const handleSubmit = (query) => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
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
