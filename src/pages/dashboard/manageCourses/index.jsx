import { Dashboard } from "@/components/Dashboard";
import { ManageResources } from "@/components/ManageResources";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import { CourseCard } from "@/components/CourseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function manageCourses() {
  const user = useAuth();
  const [onHold, setOnHold] = useState([]);
  const [trainerCourses, setTrainerCourses] = useState([]);
  const [count, setCount] = useState(1);
  const [courseId, setCourseId] = useState("");
  const [trainerId, setTrainerId] = useState("");
  const [decision, setDecision] = useState(" ");
  console.log(count);

  // use effect will run when user.user.role exists every time "count".value changes
  useEffect(() => {
    // if user type = admin fetch all course with status on hold so admin can manage them
    if (user?.user?.role == "admin") {
      axios
        .get("http://localhost:8000/api/user_courses/on_hold")
        .then(function (response) {
          // handle success
          setOnHold(response.data);
          console.log(onHold);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

      // if user type =  Trainer fetch his courses
    } else if (user?.user?.role == "trainer") {
      const userId = user?.user?.id;

      axios
        .get(`http://localhost:8000/api/trainer/${userId}`)
        .then(function (response) {
          // handle success
          setTrainerCourses(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [user?.user?.id, count]);

  // function to handle click of buttons from ManageResources component$

  const handleClick = (decision, e) => {
    const id = e;
    setDecision(decision);
    setCourseId(id);
    setCount(count + 1);
  };

  // Function that take uses APi route to accept or refuse a course;
  function courseDecision(e) {
    e.preventDefault();
    // const approved = new FormData(e.target);

    // approved.append("new_status", decision);
    // approved.append("cou_id", courseId);
    axios({
      method: "post",
      url: `http://localhost:8000/api/aprove_course/${courseId}/${decision}`,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Return -------

  return (
    <>
      <Dashboard>
        {/* if user type = admin manageCourses page will have the courses for admin to manage */}
        <div className="content">
          {user?.user?.role == "admin" && (
            <>
              <h1>
                <span className="adminSpan">{onHold.length}</span> Courses
                Waiting for approval
              </h1>
              {onHold.map((course) => {
                const courseIdTest = course.id;
                return (
                  <ManageResources
                    decisionFunction={courseDecision}
                    getId={courseIdTest}
                    resourceTitle={course.cou_description}
                    resourceName={`${course.first_name} ${course.last_name}`}
                    hrefTitle={`/dashboard/manageCourses/${course.id}`}
                    hrefName={`/trainers/${course.user_id}`}
                    handleClick={handleClick}
                  />
                );
              })}
            </>
          )}
          {/* if user type = trainer manageCourses page will have the courses of logged user so he can edit or delete them */}
          {user?.user?.role == "trainer" && (
            <>
              <h1>
                <span className="trainerSpan">{trainerCourses.length}</span>{" "}
                active courses
              </h1>
              {trainerCourses.map((c) => {
                return (
                  <>
                    <div className="trainerCourseCard">
                      <div className="editIcon">
                        <FontAwesomeIcon
                          icon={faPen}
                          width={30}
                          height={30}
                          cursor="pointer"
                        />
                      </div>
                      <CourseCard
                        course_category={c.cat_title}
                        course_desc={c.cou_descripton}
                        course_tags={c.tags.map((t) => {
                          return <span>{t.tag_title}</span>;
                        })}
                        course_title={c.cou_title}
                        trainer_img={c.cou_logo}
                        trainer_name={`${c.first_name} ${c.last_name}`}
                      />
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
      </Dashboard>

      {/* Styles */}
      <style jsx>
        {`
          .adminSpan {
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

          .editIcon {
            position: absolute;
            right: 0;
            color: grey;
            padding: 10px;
          }
          .trainerSpan {
            color: green;
            font-weight: bold;
          }

          .trainerCourseCard {
            position: relative;
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

export default manageCourses;
