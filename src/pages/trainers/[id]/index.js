import { useRouter } from "next/router";

function trainer_course_page() {
  const router = useRouter();
  function load_course_Handler() {
    // // load data or do something else push method will navigate away as in the link or replace() to replace the content without the ability to return to the previouse page.
    //router.push("/trainers/1/1"); this is static=> the dynamic way is:
    router.push({
      pathname: "/trainers/[id]/[trainer_course]",
      query: { id: 1, trainer_course_id: 1 },
    });
  }
  console.log(router.query);
  return (
    <div>
      <h1>The courses of a given trainer</h1>
      <button onClick={load_course_Handler}>Load course</button>
    </div>
  );
}
export default trainer_course_page;
