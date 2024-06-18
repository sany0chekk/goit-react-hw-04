import Modal from "react-modal";

const ImageModal = ({ image, isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;
