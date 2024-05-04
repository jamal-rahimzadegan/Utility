
import axios from "axios";

function createAxiosRequest(method, endPoint, data = {}, headers = {}) {
  return axios({
    method,
    baseURL: "PUT_YOUR_BASE_URL_HERE",
    url: endPoint,
    data,
    headers: {
      ...headers,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(({ data, status }) => {
      if (status >= 200 && status <= 300) return data;
      else throw endPoint;
    })
    .catch((e) => e);
}

export default {
  get(endPoint, headers) {
    return createAxiosRequest("get", endPoint, {}, headers);
  },

  post(endPoint, data, headers) {
    return createAxiosRequest("post", endPoint, data, headers);
  },
};
