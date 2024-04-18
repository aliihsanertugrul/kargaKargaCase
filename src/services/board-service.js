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

export const putTask =async (payload) => {
  return fetch(`${API_URL}/api/tasks/${payload.taskId}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: await getAuthHeader(),
  });
};

export const deleteTask =async (payload) => {
  return fetch(`${API_URL}/api/tasks/${payload.taskId}`, {
    method: "DELETE",    
    headers: await getAuthHeader(),
  });
};



