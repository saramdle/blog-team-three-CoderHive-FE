import axios from "axios";

const HttpRequest = axios.create({
  baseURL: "https://41a9-3-37-242-238.jp.ngrok.io",
});

export default HttpRequest;
