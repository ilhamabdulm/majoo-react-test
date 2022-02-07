import { fetchApi } from 'lib/axios';

const fetchInitData = async () => {
  try {
    const response = await fetchApi('to-do-list', 'get');

    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export default fetchInitData;
