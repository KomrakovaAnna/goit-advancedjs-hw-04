import axios from 'axios';

const API_KEY = '45172524-3969727cd49dc0a3e64f2f5a7';
axios.defaults.baseURL = 'https://pixabay.com';

export const apiCall = (searchValue, page, itemPerPage) => {
  const searchParams = {
    params: {
      key: API_KEY,
      q: searchValue,
      page: page,
      per_page: itemPerPage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  };
  return axios.get('/api/', searchParams);
};
