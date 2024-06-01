import axios from 'axios';
// import { useSelector } from 'react-redux';

const userAxios = () => {
  const token = null
  //   useSelector((store) => store.Client.token);
  
  const userAxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  });

  userAxiosInstance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return userAxiosInstance;
};

export default userAxios;