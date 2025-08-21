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
      reqBody = JSON.stringify(body);
      console.log(`Requesting ${ApiClient.baseUrl}${path}`);
      const req = await fetch(`${ApiClient.baseUrl}${path}`, {
        method,
        body: reqBody,
        headers,
        ...config,
      });
      if (!req.ok) throw new Error("Fetch Failed");
      const res = await req.json();
      return res;
    } catch (err) {
      if (err instanceof Error) console.error(err.message);
    }
  }
  public async login(data: object) {
    return this.doRequest<User>("/logian", "POST", data, {
      credentials: "include",
    });
  }
  public async singlePost(path: string) {
    return this.doRequest<Post>(path, "GET");
  }
  public async createPost(data: object) {
    return this.doRequest("/users/createPost", "POST", data, {
      credentials: "include",
    });
  }
  public async getPosts() {
    return this.doRequest<Post[]>("/users/posts", "GET");
  }
  public async getUsers() {
    return this.doRequest<User[]>("/users", "GET", undefined, {
      credentials: "include",
    });
  }
  public async registerUser(data: object) {
    return this.doRequest("/createUser", "POST", data);
  }
}
