import { useRouter } from "next/router";

function selected_course_trainer_page() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The course page for a spesific course for a selected trainer</h1>
    </div>
  );
}
export default selected_course_trainer_page;
