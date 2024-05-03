class SimpleHttpService {
  constructor() {
      this.baseUrl = "";
      this.methods = ["post", "get"];

      this.methods.forEach(
          (method) => (this[method] = this.createRequest.bind(this, method))
      );
  }

  async createRequest(method = "post", endPoint = "", data) {
      try {
          const response = await fetch(this.baseUrl + endPoint, {
              method: method.toUpperCase(),
              headers: {
                  "Content-Type": "application/json"
              },
              ...(data && { body: JSON.stringify(data) })
          });

          return response.json();
      } catch (error) {
          return {
              msg: `API call err in ${endPoint}`,
              error
          };
      }
  }
}

const httpSvc = new SimpleHttpService();
export httpSvc

// Usage:
//  const getData = async () => {
//     const res = await httpSvc.post("SOME_API" , {userName:"test"});
//     console.log(res);
//   };
