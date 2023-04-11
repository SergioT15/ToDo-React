import axios from "axios";

const API_URL = "http://localhost:5004";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
