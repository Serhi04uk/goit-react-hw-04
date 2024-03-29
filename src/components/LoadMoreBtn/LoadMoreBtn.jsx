import css from "./LoadMoreBtn.module.css";

function LoadMore({ onClickBack, onClickMore, page }) {
  return (
    <div className={css.disp}>
      <button className={css.btn} type="click" onClick={onClickBack}>
        Previous page
      </button>
      <p className={css.page}>{page}</p>
      <button className={css.btn} type="click" onClick={onClickMore}>
        Next page
      </button>
    </div>
  );
}

export default LoadMore;
