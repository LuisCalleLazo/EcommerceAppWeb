import axios from 'axios';
import { getEnvironment } from '../utils';

const { VITE_HOST_BACKEND } = getEnvironment();

export const basicApi = axios.create({
  baseURL: `${VITE_HOST_BACKEND}/api/`,
});