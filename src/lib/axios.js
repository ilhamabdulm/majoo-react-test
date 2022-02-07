import axios from 'axios';

const BASE_URL = (target) =>
  `${
    process.env.REACT_APP_API_URL ||
    'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list'
  }/${target}`;

const request = axios.create();

request.interceptors.request.use(
  async (config) => {
    config.headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    };

    return config;
  },
  (error) => Promise.reject(error)
);

export const fetchApi = (url, method, param1 = null, param2) => {
  return new Promise((resolve, reject) => {
    request[method](`${BASE_URL(url)}`, param1, param2)
      .then((response) => resolve(response.data))
      .catch((err) => {
        console.log(err, 'error axios');
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.',
        };
        console.log(err);
        if (!err.response || !err.response.data) reject(defaultError);
        else reject(err.response.data);
      });
  });
};

export default request;
