import { useAuth } from "@/hooks/auth";
import React from "react";
import { useState } from "react";

function UpdateProfile() {
  const user = useAuth();

  const [edit, setEdit] = useState(true);
  const [error, setError] = useState(true);

  return (
    <>
      <div>
        <form>
          <input
            placeholder={user.user?.first_name}
            name="first_name"
            type="text"
            readOnly={edit}
          ></input>
          <input
            name="last_name"
            placeholder={user.user?.last_name}
            type="text"
            readOnly={edit}
          ></input>
          <input
            name="email"
            placeholder={user.user?.email}
            type="text"
            readOnly={edit}
          ></input>
          <div className="buttons">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (edit) {
                  setEdit(!edit);
                } else {
                  setError("Please update fields");
                }
              }}
            >
              Update
            </button>
            <button>Submit</button>
          </div>
          <p>{error}</p>
        </form>
      </div>
      <style jsx>
        {`
          .buttons {
            display: flex;
            gap: 15px;
          }

          button {
            background-color: purple;
            padding: 10px 15px;
            border-radius: 25px;
            color: white;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
        `}
      </style>
    </>
  );
}

export default UpdateProfile;
