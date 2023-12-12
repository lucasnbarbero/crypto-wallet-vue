import axios, { type AxiosInstance } from 'axios';

const criptoyaInstance: AxiosInstance = axios.create({
  baseURL: 'https://criptoya.com/api/',
  timeout: 5000,
});

export default criptoyaInstance;
