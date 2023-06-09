// Not Really an Interceptor but the concept for Project Structure :)
// @ts-ignore
import {API_URL} from '@env';
import Axios from 'axios';

export const Interceptor = Axios.create({
  baseURL: API_URL,
  timeout: 10000,
});
