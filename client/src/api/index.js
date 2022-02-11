import axios from "axios";

const api = axios.create({
  baseURL: "http://localh0st:3000",
});

export default api;
