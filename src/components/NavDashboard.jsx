import React from "react";
import Rectangle from "@/components/Rectangle";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/auth";
function NavDashboard() {
  const { user } = useAuth({ middleware: "auth" });
  const [course, setCourse] = useState();
  const loggedUser = user?.id;
  const countCourse = course?.length;
  console.log(countCourse);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/trainer/${loggedUser}`)
      .then(function (response) {
        setCourse(response.data);
      })
      .catch(function (error) {
        // handle error
      });
  }, []);

  return (
    <>
      <div className="content">
        <div className="topContent">
          <Rectangle
            redirectTo="/MyCourses"
            first_el={countCourse}
            second_el="Courses"
            bk_color="linear-gradient(90deg, rgba(245,47,0,1) 24%, rgba(235,154,58,1) 70%);"
          >
            <FontAwesomeIcon
              icon={faBookOpen}
              style={{ width: "30px", cursor: "pointer" }}
            />
          </Rectangle>
          <Rectangle
            redirectTo="/MyCourses"
            first_el={countCourse}
            second_el="Courses"
            bk_color="linear-gradient(90deg, rgba(0,60,245,1) 24%, rgba(58,161,235,1) 70%)"
          >
            <FontAwesomeIcon
              icon={faBookOpen}
              style={{ width: "30px", cursor: "pointer" }}
            />
          </Rectangle>
          <Rectangle
            redirectTo="/MyCourses"
            first_el={countCourse}
            second_el="Courses"
            bk_color="linear-gradient(90deg, rgba(154,0,245,1) 24%, rgba(199,58,235,1) 70%)"
          >
            <FontAwesomeIcon
              icon={faBookOpen}
              style={{ width: "30px", cursor: "pointer" }}
            />
          </Rectangle>
          <Rectangle
            redirectTo="/MyCourses"
            first_el={countCourse}
            second_el="Courses"
            bk_color=" linear-gradient(90deg, rgba(58,235,172,1) 24%, rgba(0,245,59,1) 70%)"
          >
            <FontAwesomeIcon
              icon={faBookOpen}
              style={{ width: "30px", cursor: "pointer" }}
            />
          </Rectangle>
        </div>
      </div>
      <style jsx>
        {`
          .content {
            width: auto;
            padding-left: 70px;
          }

          .topContent {
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: space-evenly;
            padding: 20px;
          }

          @media screen and (min-width: 768px) and (max-width: 992px) {
            .content {
              display: flex;
            }
            .topContent {
              flex-direction: row;
              flex-wrap: wrap;
            }
          }

          @media screen and (min-width: 993px) {
            .topContent {
              flex-direction: row;
              flex-wrap: wrap;
            }
          }
        `}
      </style>
    </>
  );
}

export default NavDashboard;
