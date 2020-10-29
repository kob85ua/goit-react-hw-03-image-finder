import axios from "axios";

const fetchImagesWithQuery = async (searchQuery, page, APIkey) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default {
  fetchImagesWithQuery,
};
