import css from "./ImageModal.module.css";

function ImageModal({ active, setActive, imgModal }) {
  return (
    <div
      className={active ? `${css.modal} ${css.active}` : css.modal}
      onClick={() => setActive()}
    >
      <img
        onClick={(e) => e.stopPropagation()}
        className={css.modalContent}
        src={imgModal}
        // alt={altModal}
      />
    </div>
  );
}

export default ImageModal;
