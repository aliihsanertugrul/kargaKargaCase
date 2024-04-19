import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getBoards =async () => {
  return fetch(`${API_URL}/api/boards`, {
    method: "GET",
    headers: await getAuthHeader(),
  });
};

export const getFlags =async () => {
  return fetch(`${API_URL}/api/commons/flags`, {
    method: "GET",
    headers: await getAuthHeader(),
  });
};

export const postTask =async (payload) => {
  return fetch(`${API_URL}/api/tasks`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: await getAuthHeader(),
  });
};

export const putTask =async (payload,code) => {
  return fetch(`${API_URL}/api/tasks/${code}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: await getAuthHeader(),
  });
};

export const deleteTask =async (code) => {
  return fetch(`${API_URL}/api/tasks/${code}`, {
    method: "DELETE",    
    headers: await getAuthHeader(),
  });
};



