import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL; // sets backend for ALL requests
axios.defaults.headers["Content-Type"] = "application/json";

export default axios;
