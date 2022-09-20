import React from "react";
import { Button } from "./Layouts/Button";
import { ButtonTest } from "@/../public/styles/styledComponents";

export function CourseCard({
  trainer_img,
  trainer_name,
  course_title,
  course_category,
  course_tags,
  course_desc,
}) {
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
            <ButtonTest>Details</ButtonTest>
            <ButtonTest>Fav</ButtonTest>
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
            width: 800px;
            height: 350px;
            display: flex;
            border: 1px solid black;
          }

          .trainer_info {
            border: 1px solid red;
            width: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            padding: 10px;
          }

          .trainer_info img {
            width: 80%;
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
            gap: 10px;
          }
          #trainer_name {
          }
        `}
      </style>
    </>
  );
}
