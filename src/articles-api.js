import axios from "axios";

const KEY_ID = "DWegG7wGOohP87Z12t1W2UXFwDN1GU2-h1TGJORYXhM";

export const fetchArticlesWithTopic = async (topic, page = 1) => {
  const response = axios.get(
    `https://api.unsplash.com/search/photos?client_id=${KEY_ID}&page=${page}&query=${topic}&per_page=20`
  );
  return response;
};

// export const fetchArticlesWithPage = async (page, topic) => {
//   const response = axios.get(
//     `https://api.unsplash.com/search/photos?client_id=${KEY_ID}&per_page=20&page=${page}&query=${topic}`
//   );
//   return response;
// };
