"use server";
export default async function Footer() {
  return (
    <div className=" text-2xl grid grid-cols-2 items-center content-center p-6">
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
