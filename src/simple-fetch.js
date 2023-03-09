class HttpClient {
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
                msg: `Error in http request for ${endPoint}`,
                error
            };
        }
    }
}

const httpClient = new HttpClient();
export httpClient

// Usage:
//  const getData = async () => {
//     const res = await httpClient.post("SOME_API" , {userName:"test"});
//     console.log(res);
//   };
