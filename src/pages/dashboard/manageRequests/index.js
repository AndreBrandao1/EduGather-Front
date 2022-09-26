import { Dashboard } from "@/components/Dashboard";
import { ManageResources } from "@/components/ManageResources";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/hooks/auth";

function index() {
  const { user } = useAuth();
  const [relationId, setRelationId] = useState("");
  const [onHold, setOnHold] = useState([]);
  const [decision, setDecision] = useState(" ");
  const [count, setCount] = useState(1);
  console.log(user);
  useEffect(() => {
    const id = user?.id;
    axios
      .get(`http://localhost:8000/api/get_contact_for_trainer/${id}/on_hold`)
      .then(function (response) {
        // handle success
        setOnHold(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [user, count]);

  const handleClick = (decision, e) => {
    setDecision(decision);
    setRelationId(e);
    setCount(count + 1);

    // const approved = new FormData(e.target);

    // approved.append("new_status", decision);
    // approved.append("cou_id", courseId);
    axios({
      method: "post",
      url: `http://localhost:8000/api/aprove_disaprove/${e}/${decision}`,
    })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Dashboard>
        <div className="container">
          {onHold.map((c) => {
            return (
              <ManageResources
                getId={c.relation_id}
                hrefTitle="#"
                resourceTitle={`${c.first_name} ${c.last_name}`}
                hrefName={`mailto:${c.email}`}
                resourceName={c.email}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      </Dashboard>
      <style jsx>
        {`
          .container {
            padding-top: 10px;
            width: 100%;
            margin-left: 120px;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
        `}
      </style>
    </>
  );
}

export default index;
