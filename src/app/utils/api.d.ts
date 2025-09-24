type ResponseApi<T> = [T, null] | [null, ErrorObj];

type Author = {
  author: {
    email: string;
    id: number;
    role: "ADMIN" | "USER";
  };
};

type Post = {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorID: number;
};

interface PostAuthor extends Post, Author {}

type User = {
  id: number;
  email: string;
  role: "ADMIN" | "USER";
};

type ErrorObj = { error?: string; message: string };
