import React, { useState } from "react";
import { Button } from "./Layouts/Button";
import { ButtonTest } from "@/../public/styles/styledComponents";
import { useAuth } from "@/hooks/auth";

export function CourseCard({
  trainer_img,
  trainer_name,
  course_title,
  course_category,
  course_tags,
  course_desc,
  handleClick,
}) {
  const user = useAuth();
  const [favourite, setFavorite] = useState(false);
  return (
    <>
      <div className="course_container">
        <div className="trainer_info">
          <img src={trainer_img} />
          <h2>{trainer_name}</h2>
        </div>
        <div className="course_info">
          <h2 id="trainer_name">{course_title}</h2>
          <h2>{course_category}</h2>
          <div className="course_tags">
            <div className="tags">{course_tags}</div>
          </div>
          <div className="course_desc">
            <p>{course_desc}</p>
          </div>
          <div className="course_btn">
            <button onClick={handleClick} className="courseDetails">
              <a>Details</a>
            </button>
            {user.user.role == "trainee" && (
              <button
                className="favourite"
                onClick={(e) => {
                  setFavorite(!favourite);
                }}
              >
                <a>{favourite ? "❤️" : "🤍"}</a>
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>
        {`
          h2 {
            font-weight: bold;
          }
          /* Trainer Info*/

          .course_container {
            width: 500px;
            height: 300px;
            display: flex;
            background-color: #98ffff;
            border-radius: 25px;
            padding: 25px;
          }

          .trainer_info {
            width: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            padding: 10px;
            text-align: center;
          }

          .trainer_info img {
            width: 200px;
          }

          .trainer_info h2 {
            font-weight: bold;
            font-size: 30px;
          }

          /* Course Info */

          .course_info {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: space-evenly;
            align-items: center;
          }
          .tags {
            display: flex;
            gap: 15px;
            color: grey;
          }

          .course_btn {
            display: flex;
            gap: 20px;
            align-self: end;
          }

          button {
            width: 100px;
            padding: 20px 30px;
            background-color: #022444;
            border-radius: 20px;
            color: white;
            font-weight: 600;
          }
          @media screen and (min-width: 992px) {
            .course_container {
              width: 800px;
            }
          }
        `}
      </style>
    </>
  );
}
