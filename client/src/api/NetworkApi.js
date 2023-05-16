import axios from "axios";
//import { toast } from "react-toastify";
//import ToastMessage from "../components/ToastMessage";

const NetworkApi = {
  requestTimeout: 30000,
  getDefaultHeaders: () => ({
    Accept: "application/json",
    "Content-Type": "application/json",
  }),

  getHeaders: () => {
    const headers = {
      ...NetworkApi.getDefaultHeaders(),
    };
    return headers;
  },

  get: (route, headers) =>
    new Promise((resolve, reject) => {
      NetworkApi.prepareConfig(route, null, "get", headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    }),
  post: (route, params, headers) =>
    new Promise((resolve, reject) => {
      NetworkApi.prepareConfig(route, params, "post", headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    }),
  put: (route, params, headers) =>
    new Promise((resolve, reject) => {
      NetworkApi.prepareConfig(route, params, "put", headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    }),
    patch: (route, params, headers) =>
    new Promise((resolve, reject) => {
      NetworkApi.prepareConfig(route, params, "patch", headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    }),
  delete: (route, params, headers) =>
    new Promise((resolve, reject) => {
      NetworkApi.prepareConfig(
        route,
        params ? params : null,
        "delete",
        headers,
        (err, res) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(res);
        }
      );
    }),
  prepareConfig: async (url, data, methodType, headers, callback) => {
    const config = {
      method: methodType,
      url,
      data,
      headers: headers || NetworkApi.getDefaultHeaders(),
      // timeout: NetworkApi.requestTimeout
    };
    NetworkApi.call(config, callback);
  },
  call: (config, callback) => {
    axios(config)
      .then((response) => {
        callback(null, response.data);
      })
      .catch((error) => {
        callback(error, null);
      });
  },
};

export default NetworkApi;
