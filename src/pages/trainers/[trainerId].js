import { useRouter } from "next/router";
import React from "react";

function trainerId() {
  const router = useRouter();
  const id = router.query.trainerId;
  return (
    <div>
      trainer <p>{id}</p>
    </div>
  );
}

export default trainerId;
