import { service } from "./axios.custom";

export const sendMessage = async (data: object) => {
  return service.post(`/messages`, data);
};

export const getMessages = async (params: object) => {
  return service.get(`/messages`, { params });
};

export const updateMessage = async (userId: number, data: object) => {
  return service.put(`/messages/${userId}`, data);
};
