import Link from "next/link";

export default function ForumPost({ data }: { data: PostAuthor }) {
  console.log(data);
  return (
    <ul
      className="grid grid-cols-3 mt-2 border border-solid rounded-sm items-center text-(--smoky-black) gap-5 text-justify bg-(--posts-bg)
            even:bg-[#E5E9EB] max-md:grid-cols-1"
    >
      <li className="pt-3 px-3">
        <Link href={`/posts/${data.id}`}>
          <h2>{data.title}</h2>
        </Link>
      </li>
      <li className="max-h-[150px] px-3 overflow-hidden">
        {" "}
        <Link href={`/posts/${data.id}`}>
          <p>{data.content}</p>
        </Link>
      </li>
      <li className="bg-[#506C64] text-center p-1 text-[#fff]">
        <Link href={`/user/${data.author.email}`}>
          <h4 className="bg-[#506C64] text-center p-1 text-[#fff] ">
            {data.author.email}
          </h4>
        </Link>
      </li>
    </ul>
  );
}
