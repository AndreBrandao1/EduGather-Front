import Link from "next/link";

function categories_page() {
  //dummy data as place holder to be replaced later with real data from the api
  const trainers = [
    { id: 1, name: "Jack" },
    { id: 2, name: "Anbre" },
  ];

  return (
    <div>
      <h1>The trainers Page</h1>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.id}>
            {/* <Link href={`/trainer/${client.id}`}>{trainer.name}</Link> */}
            <Link
              href={{ pathname: "/trainers/[id]", query: { id: trainer.id } }}
            >
              {trainer.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default categories_page;
