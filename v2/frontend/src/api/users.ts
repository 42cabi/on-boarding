import { service } from "./axios.custom";

export const checkAuth = async () => {
  return service.get("/users/auth");
};

export const login = async (data: object) => {
  return service.post("/users/login", data);
};

export const register = async (data: object) => {
  return service.post("/users/register", data);
};

export const searchGroup = async (params: object) => {
  return service.get(`/users/search/group`, { params });
};

export const searchName = async (params: object) => {
  return service.get(`/users/search/name`, { params });
};
