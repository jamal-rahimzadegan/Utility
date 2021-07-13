import axios from 'axios';

const METHODS = ['get', 'post', 'put', 'patch', 'delete'];

class AxiosService {
  token: string | null;

  constructor() {
    this.token="your api token goes here"
    METHODS.forEach((method) => (this[method] = this.createRequest.bind(this, method)));
  }

  protected createRequest(method: string, url: string,  options: any = {}): Function {
    options.method = method;
    return this.request(url, options).then(this.handleStatus);
  }

  protected request(url, { data, ...options }: any = {}): any {
    const reqOptions = options;
    reqOptions.headers = reqOptions?.headers || {};
    reqOptions.headers['Accept'] = 'application/json';

    const AXIOS_INSTANCE = axios.create({
      baseURL: baseUrl,
      headers: reqOptions.headers,
      validateStatus: () => true,
    });

    return AXIOS_INSTANCE[options.method](this.handleUrl(url), data || null);
  }

  protected handleUrl = (api) => baseUrl + api;

  protected handleStatus(response: any): object | Promise<any> {
    if (response?.status >= 200 && response?.status < 300) {
      return { responseData: response.data };
    }
    return Promise.reject(response);
  }
}

export default new AxiosRequest();
