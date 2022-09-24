import { Dashboard } from "@/components/Dashboard";
import { ManageResources } from "@/components/ManageResources";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

function manageCourses() {
  const [onHold, setOnHold] = useState([]);
  const [courseId, setCourseId] = useState([]);

  useEffect(() => {
    //fetching all categories to to be displayed in the <select>
    axios
      .get("http://localhost:8000/api/user_courses/on_hold")
      .then(function (response) {
        // handle success
        setOnHold(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  function approve() {
    axios.post(`http://localhost:8000/api/aprove_course/${courseId}/verified`);
    console.log(courseId);
  }

  function refuse() {
    console.log(courseId);
  }
  return (
    <>
      <Dashboard>
        <div className="content">
          <h1>Courses Waiting for approval</h1>
          {onHold.map((course) => {
            return (
              <ManageResources
                resourceTitle={course.cou_description}
                resourceName={`${course.first_name} ${course.last_name}`}
                hrefTitle={`/dashboard/manageCourses/${course.id}`}
                hrefName={`/trainers/${course.user_id}`}
                getId={() => {
                  setCourseId(course.id);
                }}
                approve={approve()}
                refuse={refuse}
              />
            );
          })}
        </div>
      </Dashboard>
      <style jsx>
        {`
          .content {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
        `}
      </style>
    </>
  );
}

export default manageCourses;
