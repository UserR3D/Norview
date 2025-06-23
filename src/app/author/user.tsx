import React from "react";

type author = {
  email: string;
};

export function Author({ id }: { id: number }) {
  const [author, setAuthor] = React.useState<author>();

  React.useEffect(() => {
    async function searchUser() {
      const request = await fetch(`http://localhost:3333/users/${id}`);
      const response = (await request.json()) as author;
      setAuthor(response);
    }
    searchUser();
  }, []);
  if (!author) return <h2>Author not found</h2>;
  return <h4>{author.email}</h4>;
}
