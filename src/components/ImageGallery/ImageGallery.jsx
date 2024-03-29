import css from "./ImageGallary.module.css";

function ImageGallery({ arr, onClickFullImg }) {
  const onClickImhInside = (img) => {
    onClickFullImg(img);
  };

  return (
    <>
      <ul className={css.disp}>
        {arr.map((info) => {
          return (
            <li key={info.id} onClick={() => onClickImhInside(info.urls.full)}>
              <img className={css.ex} src={info.urls.small} alt={info.color} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ImageGallery;
