import axios from "axios";
const axiosBase = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL:"https://evangadi-backend-deploy-16.onrender.com/api"
});

export default axiosBase;
