import axios from "axios";

let BASEURL = "";

if (import.meta.env.DEV) {
  BASEURL = import.meta.env.VITE_URL_WHEN_DEV;
} else {
  BASEURL = import.meta.env.VITE_URL_WHEN_PROD;
}

// This is the original axios instance which doesn't have any kind of interceptors.
// This is being used as it is by only login and signup.
// All other api calls which rely on interceptors will use useAxiosPrivate hook, which is a extension of this instance.
const AxiosInstance = axios.create({
  baseURL: BASEURL + "/api/v1",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export { AxiosInstance };
