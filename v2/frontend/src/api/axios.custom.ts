import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api", // 기본 URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const service = {
  post: async (url: string, data: object, config?: object) => {
    return axiosInstance.post(url, data, config);
  },

  get: async (url: string, config?: { params?: object }) => {
    return axiosInstance.get(url, config);
  },

  put: async (url: string, data: object) => {
    return axiosInstance.put(url, data);
  },

  delete: async (url: string) => {
    return axiosInstance.delete(url);
  },
};
