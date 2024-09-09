import { getToken } from "@/stores/userStore";
import axios, { AxiosError } from "axios";
const baseURL = import.meta.env.VITE_BASE_API_URL;
const request = axios.create({
  baseURL,
});

request.interceptors.request.use((config) => {
  const token = getToken();
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (!("Content-Type" in config.headers))
    config.headers["Content-Type"] = "application/json";
  config.headers["Accept"] = "*/*";
  return config;
}, errorHandler);

async function errorHandler(error: AxiosError): Promise<void> {
  if (error.response !== null) {
    await Promise.reject(error.response);
  }
  if (error.request !== null) {
    await Promise.reject(error.request);
  }
  await Promise.reject(error);
}

export default request;
