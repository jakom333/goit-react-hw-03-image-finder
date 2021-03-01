import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api';

const apiKey = '20188573-7bb6e1f85b49a99e39f48e5e2';

const fetchImages = ({ search = '', page = 1 }) => {
  return axios
    .get(
      `/?q=${search}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};

// fetchImages.propTypes = {
//   search: PropTypes.string.isRequired,
//   page: PropTypes.number.isRequired,
// };

export default fetchImages;
