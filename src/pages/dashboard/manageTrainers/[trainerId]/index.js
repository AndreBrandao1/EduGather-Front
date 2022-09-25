import { useRouter } from "next/router";
import React from "react";

function index() {
  const router = useRouter();
  const id = router.query.courseId;
  return <div>course {id}</div>;
}

export default index;
