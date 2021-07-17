import axios from "axios";

function httpRequest(method, api, data = {}, headers) {
  return axios({
    method,
    baseURL: "https://jsonplaceholder.typicode.com/",
    url: api, // endpoint of the data like: comments (without leading /)
    data,
    headers: {
      ...headers,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.data)
    .catch((e) => e);
}

export default {
  get(api, data, headers) {
    return httpRequest("get", api, data, headers);
  },

  post(api, data, headers) {
    return httpRequest("post", api, data, headers);
  },

  delete(api, data, headers) {
    return httpRequest("delete", api, data, headers);
  },

  put(api, data, headers) {
    return httpRequest("put", api, data, headers);
  },

  patch(api, data, headers) {
    return httpRequest("patch", api, data, headers);
  },
};
