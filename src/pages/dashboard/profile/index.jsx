import Header from "@/components/Header";
import AppLayout from "@/components/Layouts/AppLayout";
import LeftNavbar from "@/components/LeftNavbar";
import Rectangle from "@/components/Rectangle";
import UpdateProfile from "@/components/UpdateProfile";
import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import { useState, useEffect } from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { EditProfile } from "@/components/EditProfile";
import { Dashboard } from "@/components/Dashboard";

const profileIndex = () => {
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

  console.log(user);

  return (
    <>
      <Dashboard>
        <div className="content">
          <EditProfile></EditProfile>
        </div>
      </Dashboard>
      <style jsx>
        {`
          .content {
            width: auto;

            margin-left: 70px;
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
              margin-left: 200px;
            }

            .topContent {
              flex-direction: row;
              flex-wrap: wrap;
            }
          }

          @media screen and (min-width: 993px) {
            .content {
              margin-left: 200px;
            }

            .topContent {
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  );
};

export default profileIndex;
