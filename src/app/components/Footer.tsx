"use server";
export default async function Footer() {
  return (
    <div className="fixed bottom-0 bg-[#23B5D3] w-[100%] grid text-sm grid-cols-2 items-center p-2 content-center">
      <p>
        Norview e um WebSite desenvolvido com o objetivo de ser um blog onde
        posts poderiam ser postados e mostrados aos usuarios.
      </p>
      <ul className="text-end">
        <li>
          <p>more information</p>
        </li>
        <li>
          <p>Github</p>
        </li>
      </ul>
    </div>
  );
}
