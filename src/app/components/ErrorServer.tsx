export default function ErrorServer({ error }: { error: ErrorObj }) {
  console.error(error);
  return (
    <section className="container bg-(--bg-fgray) rounded-md p-4">
      <p>An unexpected error happen</p>
      <h4 className="text-red-500">Error: {error.error}</h4>
      <h2>{error.message}</h2>
    </section>
  );
}
