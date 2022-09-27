import React from "react";
import { useState } from "react";

export function EditProfile() {
  const [edit, setEdit] = useState(true);
  const [error, setError] = useState(true);
  const [color, setColor] = useState("rgb(220,220,220)");
  return (
    <>
      <div className="container">
        <form>
          <div className="inputs">
            <div className="pic"></div>
            <div className="upload">Upload new Picture</div>
          </div>
          <div className="inputs">
            <label for="firstName">First Name:</label>
            <input readOnly={edit} id="fistName" type="text" />
          </div>
          <div className="inputs">
            <label for="lastName">Last Name:</label>
            <input readOnly={edit} id="lastName" type="text" />
          </div>
          <div className="inputs">
            <label for="email">E-mail:</label>
            <input readOnly={edit} id="email" type="text" />
          </div>
          <div className="inputs">
            <label for="password">Password:</label>
            <input
              readOnly={edit}
              for="confirmPassword"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="inputs">
            <label>Confirm-password:</label>
            <input
              readOnly={edit}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
          </div>

          <div className="buttons">
            <input
              type="submit"
              value="Update"
              onClick={(e) => {
                e.preventDefault();
                if (edit) {
                  setEdit(!edit);
                  setColor("white");
                } else {
                  setError("Please update fields");
                }
              }}
            />

            <input
              value="Submit"
              type="submit"
              onclick={(e) => {
                e.preventDefault();
                {
                  handleClick;
                }
              }}
            />
          </div>
          <span>{error}</span>
        </form>
      </div>
      <style jsx>
        {`
          .pic {
            width: 100px;
            height: 100px;
            background-image: url("public/assets/user1.png");
            border-radius: 50%;
            background-size: contain;
            backgroud-position: center;
          }

          .upload {
            background: #f27d42;
            width: 150px;
            text-align: center;
            color: white;
            padding: 10px 10px;
            border-radius: 25px;
            font-weight: 600;
          }
          .buttons {
            display: flex;
            gap: 20px;
          }

          .container {
            width: 100%;
            display: flex;

            padding: 10px;
            transition: all ease 0.2s;
          }
          form {
            color: black;
            display: flex;
            flex-direction: column;
            width: 60%;
            gap: 35px;
          }
          form input[type="text"],
          input[type="password"] {
            background-color: ${color};
            border: unset;
            border-radius: 25px;
            padding: 10px;
          }

          form input[type="submit"],
          input[type="file"] {
            background-color: #f27d42;
            padding: 10px 20px;
            border-radius: 25px;
            color: white;
            font-weight: 600;
          }

          form input[type="submit"]:hover {
            opacity: 0.8;
            transform: translateY(-3px);
            transition: all ease 0.15s;
          }

          .inputs {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          @media screen and (min-width: 992px) {
            .buttons {
              gap: 40px;
            }
            form input[type="submit"] {
              padding: 15px 25px;
            }
            .container {
              width: 100%;
              padding: 50px 200px;
            }
          }
        `}
      </style>
    </>
  );
}
