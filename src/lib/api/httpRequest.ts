import axios from "axios";

const HttpRequest = axios.create({
  baseURL: "http://3.37.242.238:8080",
});

export default HttpRequest;
