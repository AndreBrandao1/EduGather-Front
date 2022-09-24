import React from "react";
import { useRouter } from "next/router";

function courseDetails() {
  const router = useRouter();
  const id = router.query.id;
  return <div>{id}</div>;
}

export default courseDetails;
