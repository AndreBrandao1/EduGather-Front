import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Stats } from "@/components/Stats";
import { Collapsable } from "@/components/Collapsable";
import { SmallCourseCard } from "@/components/SmallCourseCard";
import { Comment } from "@/components/Comment";
import axios from "@/lib/axios";

export default function courseDetails() {
  const [course, setCourse] = useState([]);

  setTimeout(() => console.log("1"));
  console.log("2");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/courses/2")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setCourse(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="hero">
          <h1>{course.cou_title}</h1>
          <h2>{course.cou_description}</h2>
        </div>

        {/* Start Content */}
        <div className="content">
          {/* Start User Info */}
          <div className="userInfo">
            <div className="userPic">
              <Image
                style={{ border: "2px solid black" }}
                src="/assets/userpic.png"
                width={100}
                height={100}
              />
            </div>
            <h2>STATIC</h2>
            <div
              className="
            location"
            >
              <p>📍</p>
              <p>Ettelbruck,Luxembourg</p>
            </div>

            {/* Start user Stats */}
            <div className="userStats">
              <Stats
                first_field="Students"
                second_field="68"
                first_color="grey"
                second_color="black"
              />
              <div className="division"></div>
              <Stats
                first_field="Courses"
                second_field="50"
                first_color="grey"
                second_color="black"
              />
              <div className="division"></div>
              <Stats
                first_field="Comments"
                second_field="25"
                first_color="grey"
                second_color="black"
              />
            </div>

            {/* Start user Courses */}
            <div className="userCourses">
              {/* Start user description */}
              <Collapsable label="Description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis asperiores corrupti modi praesentium sunt.
                  Repudiandae, nemo autem. Ullam, impedit excepturi. Laborum,
                  ratione saepe magnam nisi in nam error quis voluptates!
                </p>
              </Collapsable>
              <Collapsable label="Courses">
                {course.map((course) => {
                  return (
                    <SmallCourseCard
                      title={course.cou_title}
                      btn_value="Details"
                      route={`courseDetails/${course.id}`}
                    />
                  );
                })}
                <SmallCourseCard
                  title="Course 10"
                  btn_value="Details"
                  route="/courseDetails"
                />
              </Collapsable>
            </div>
          </div>
          <div className="comments">
            <h2>Reviews</h2>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>

      {/* Css */}
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .content {
          background-color: white;
          border-top-right-radius: 55px;
          border-top-left-radius: 55px;
          display: flex;
          flex-direction: column;
          flex: 0 0 70%;
          margin-top: -55px;
          padding: 30px;
          z-index: 5;
          gap: 50px;
        }

        .comments {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hero {
          align-items: center;
          background-color: purple;
          background-image: url("https://img.freepik.com/premium-photo/technical-financial-graph-technology-abstract-background_34663-64.jpg?w=2000");
          background-size: cover;
          color: white;
          display: flex;
          flex: 0 0 30%;
          flex-direction: column;
          padding: 30px 0 0 0;
        }

        .hero h1 {
          font-size: 32px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .hero h2 {
          font-size: 18px;
          font-weight: bold;
        }

        .location {
          display: flex;
        }
        .userCourses {
          display: flex;
          flex-direction: column;
          gap: 55px;
          width: 100%;
        }

        .userCourses h2 {
        }

        .userInfo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .userInfo h2 {
          font-weight: 600;
        }
        .userPic {
          border: 2px solid purple;
          border-radius: 50%;
          height: 100px;
          width: 100px;
        }

        .userStats {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .division {
          width: 1px;
          height: 40%;
          background-color: rgb(220, 220, 220);
        }
      `}</style>
    </>
  );
}
