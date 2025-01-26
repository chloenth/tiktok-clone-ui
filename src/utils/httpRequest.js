/* eslint-disable no-undef */
import axios from 'axios';

const env = import.meta.env;

const httpRequest = axios.create({
  baseURL: env.VITE_BASE_URL,
});

export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
};

export default httpRequest;
