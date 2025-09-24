function createErrorObj(status: string, message: string): ErrorObj {
  return { error: status, message };
}

function parseErrorToObj(status: string, error: Error): ErrorObj {
  return { error: status, message: error.message };
}

export default class ApiClient {
  private static readonly baseUrl = process.env.NEXT_PUBLIC_API_URL;
  private async doRequest<T>(
    path: string,
    method: string,
    body?: object,
    config?: RequestInit
  ): Promise<ResponseApi<T>> {
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
      const res =
        (await req.json().catch(() => {
          error: "Error ao processar resposta";
        })) ?? ({} as T | { error: string });
      if ("error" in res) {
        return [null, createErrorObj(res.error, res.message)];
      }
      return [res, null];
    } catch (err) {
      if (err instanceof Error) return [null, parseErrorToObj(err.name, err)];
      return [null, createErrorObj("Unknown", "Erro Unknown")];
    }
  }
  public async login(data: object) {
    return this.doRequest<User>("/login", "POST", data, {
      credentials: "include",
    });
  }
  public async singlePost(path: string) {
    return this.doRequest<PostAuthor>(path, "GET");
  }
  public async createPost(data: object) {
    return this.doRequest<Post>("/users/createPost", "POST", data, {
      credentials: "include",
    });
  }
  public async getPosts() {
    return this.doRequest<PostAuthor[]>("/users/posts", "GET");
  }
  public async getUsers() {
    return this.doRequest<User[]>("/users", "GET", undefined, {
      credentials: "include",
    });
  }
  public async registerUser(data: object) {
    return this.doRequest("/createUser", "POST", data);
  }
  public async getUserPosts(email: string) {
    return this.doRequest<PostAuthor[]>(`/user/posts/${email}`, "GET");
  }
}
