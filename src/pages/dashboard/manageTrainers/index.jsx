import { Dashboard } from "@/components/Dashboard";
import { ManageResources } from "@/components/ManageResources";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

function manageTrainers() {
  const [onHold, setOnHold] = useState([]);

  useEffect(() => {
    //fetching all categories to to be displayed in the <select>
    axios
      .get("http://localhost:8000/api/get_users_admin/trainer/on_hold")
      .then(function (response) {
        // handle success
        setOnHold(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Dashboard>
        <div className="content">
          <h1>
            <span>{onHold.length}</span> Trainer profiles Waiting for approval
          </h1>
          {onHold.map((course) => {
            console.log(course.id);
            return (
              <ManageResources
                getId={course.id}
                resourceTitle={course.cou_description}
                resourceName={`${course.first_name} ${course.last_name}`}
                hrefTitle={`/dashboard/manageCourses/${course.id}`}
                hrefName={`/trainers/${course.user_id}`}
              />
            );
          })}
        </div>
      </Dashboard>
      <style jsx>
        {`
          span {
            color: red;
            font-weight: bold;
          }
          .content {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
            padding-top: 50px;
          }

          @media screen and (min-width: 768px) {
            .content {
              align-items: flex-start;
            }
          }
        `}
      </style>
    </>
  );
}

export default manageTrainers;
