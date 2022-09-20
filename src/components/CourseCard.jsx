import React from "react";

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
          <p>{course_category}</p>
          <div className="course_tags">
            <div>{course_tags}</div>
          </div>
          <div className="course_desc">
            <p>{course_desc}</p>
          </div>
          <div className="course_btn">
            <a>Details</a>
            <a>Favorite</a>
          </div>
        </div>
      </div>

      <style jsx>
        {`
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

          #trainer_name {
          }
        `}
      </style>
    </>
  );
}
