import { useEffect, useState } from "react";

import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import LoadMore from "./components/LoadMoreBtn/LoadMoreBtn.jsx";

import { fetchArticlesWithTopic } from "./articles-api.js";

const App = () => {
  const [topic, setTopic] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const onSetSearch = (searchT) => {
    setTopic(searchT);
  };

  function onClickMore() {
    setPage(page + 1);
  }
  function onClickBack() {
    if (page <= 1) return;
    setPage(page - 1);
  }

  useEffect(() => {
    async function fetchArticles() {
      try {
        setArticles([]);
        setError(false);
        setLoading(true);
        const data = await fetchArticlesWithTopic(topic, page);
        setArticles(data.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [topic, page]);

  const [modalActive, setModalActive] = useState(false);
  const [imgg, setImg] = useState("");

  const mainClickImg = (fullImg) => {
    setModalActive(true);
    setImg(fullImg);
  };

  return (
    <div>
      {error && <ErrorMessage />}
      <SearchBar onSetSearch={onSetSearch}></SearchBar>
      {loading && <Loader></Loader>}
      <ImageGallery arr={articles} onClickFullImg={mainClickImg} />
      {articles.length > 0 && (
        <LoadMore
          onClickBack={onClickBack}
          onClickMore={onClickMore}
          page={page}
        />
      )}
      <ImageModal
        active={modalActive}
        setActive={setModalActive}
        imgModal={imgg}
      ></ImageModal>
    </div>
  );
};

export default App;
