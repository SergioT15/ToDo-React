import axios from "axios";

const API_URL = "http://localhost:5007";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
