type Author = {
  author: {
    email: string;
    id: number;
    role: "ADMIN" | "USER";
  };
};

interface Post extends Author {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorID: number;
}
