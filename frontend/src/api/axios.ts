import axios from "axios";
import { useUser } from "../store/userStore";
export const api = axios.create({ baseURL: import.meta.env.VITE_API_ENDPOINT });

api.interceptors.request.use(
  (config) => {
    const token = useUser.getState().token?.access;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
