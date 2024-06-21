import Modal from "react-modal";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import css from "./ImageModal.module.css";

const ImageModal = ({ image, isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {isOpen && (
        <>
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className={css.img}
          />
          <div className={css.content}>
            {image.description && (
              <p className={css.description}>{image.description}</p>
            )}
            <div className={css.user}>
              {image.user.profile_image.large && (
                <img
                  src={image.user.profile_image.large}
                  alt={image.user.name}
                  className={css.userImage}
                />
              )}
              <div className={css.userData}>
                {image.user.name && (
                  <p className={css.userName}>{image.user.name}</p>
                )}
                {image.user.instagram_username && (
                  <p className={css.userSocial}>
                    <InstagramIcon fontSize="16px" />
                    {image.user.instagram_username}
                  </p>
                )}
                {image.user.twitter_username && (
                  <p className={css.userSocial}>
                    <XIcon fontSize="16px" />
                    {image.user.twitter_username}
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
