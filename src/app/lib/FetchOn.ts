type Response<T> = T | undefined;

export default class ApiClient {
  private static readonly baseUrl = process.env.NEXT_PUBLIC_API_URL;
  private async doRequest<T>(
    path: string,
    method: string,
    body?: object,
    config?: RequestInit
  ): Promise<Response<T>> {
    try {
      let reqBody = null;
      const headers: Record<string, string> = {};
      if (body) {
        headers["Content-Type"] = "application/json";
        if (config?.headers) Object.assign(headers, config.headers);
      }
      if (body instanceof FormData) {
        reqBody = body;
        delete headers["Content-Type"];
      } else if (body) {
        reqBody = JSON.stringify(body);
      }
      console.log(`Requesting ${ApiClient.baseUrl}${path}`);
      const req = await fetch(`${ApiClient.baseUrl}${path}`, {
        method,
        body: reqBody,
        headers,
        ...config,
      });
      const res = await req.json();
      return res;
    } catch (error) {
      console.error(error);
    }
  }
  public async login(data) {
    return this.doRequest("/login", "POST", data, { credentials: "include" });
  }
  public async singlePost(path) {
    return this.doRequest<Post>(path, "GET");
  }
  public async createPost(data) {
    return this.doRequest("/users/post", "POST", data, {
      credentials: "include",
    });
  }
  public async getPosts() {
    return this.doRequest<Post[]>("/users/posts", "GET");
  }
  public async getUsers() {
    return this.doRequest<user[]>("/users", "GET", undefined, {
      credentials: "include",
    });
  }
  public async registerUser(data) {
    return this.doRequest("/createUser", "POST", data);
  }
}
