export default async function singIn(user: string, access: string) {
  const request = await fetch("http://localhost:3333/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: user, password: access }),
    credentials: "include",
  });
  const response = await request.json();
  return response.email;
}
