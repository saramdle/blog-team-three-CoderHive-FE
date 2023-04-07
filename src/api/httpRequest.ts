import axios from "axios";

const HttpRequest = axios.create({
  baseURL: "https://e02c-3-37-242-238.jp.ngrok.io",
});

export default HttpRequest;
