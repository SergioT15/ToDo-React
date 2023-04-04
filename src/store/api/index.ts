import axios from "axios";

const API_URL = "http://localhost:5001";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
