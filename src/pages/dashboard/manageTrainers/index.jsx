import { Dashboard } from "@/components/Dashboard";
import { ManageResources } from "@/components/ManageResources";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/auth";

function manageTrainers() {
  const user = useAuth();
  const [onHold, setOnHold] = useState([]);
  const [trainerCourses, setTrainerCourses] = useState([]);
  const [count, setCount] = useState(1);
  const [trainerId, setTrainerId] = useState("");
  const [decision, setDecision] = useState(" ");

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
  }, [user?.user?.id, count]);

  const handleClick = (decision, e) => {
    const id = e;
    setDecision(decision);
    setTrainerId(id);
    setCount(count + 1);
  };

  function trainerDecision(e) {
    e.preventDefault();
    // const approved = new FormData(e.target);

    // approved.append("new_status", decision);
    // approved.append("cou_id", courseId);
    axios({
      method: "post",
      url: `http://localhost:8000/api/aprove_trainer/${trainerId}/${decision}`,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Dashboard>
        <div className="content">
          <h1>
            <span>{onHold.length}</span> Trainer profiles Waiting for approval
          </h1>
          {onHold.map((trainer) => {
            const courseIdTest = trainer.id;
            return (
              <ManageResources
                decisionFunction={trainerDecision}
                getId={courseIdTest}
                resourceTitle={`${trainer.first_name} ${trainer.last_name}`}
                resourceName=" "
                hrefTitle={`/dashboard/manageTrainer/${trainer.id}`}
                hrefName="/dashboard"
                handleClick={handleClick}
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
            }
          }
        `}
      </style>
    </>
  );
}

export default manageTrainers;
