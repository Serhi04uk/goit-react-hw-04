import css from "./SearchBar.module.css";

const SearchBar = ({ onSetSearch }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onSetSearch(e.target.elements.search.value);
  };

  return (
    <header className={css.wid}>
      <form onSubmit={onSubmit}>
        <button className={css.btn} type="submit">
          Search
        </button>
        <input
          className={css.inp}
          name="search"
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
