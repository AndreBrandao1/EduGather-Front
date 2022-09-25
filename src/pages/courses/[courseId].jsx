import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Stats } from "@/components/Stats";
import { Collapsable } from "@/components/Collapsable";
import { SmallCourseCard } from "@/components/SmallCourseCard";
import { Comment } from "@/components/Comment";
import axios from "@/lib/axios";
import { Title } from "@/../public/styles/styledComponents";
import { Square } from "@/components/Square";
import { useRouter } from "next/router";
import Link from "next/link";

export default function courseDetails() {
  const [course, setCourse] = useState([]);
  const [user, setUser] = useState([]);
  const [categ, setCateg] = useState([]);
  const [tags, setTags] = useState([]);
  const [lang, setLang] = useState([]);

  const router = useRouter();
  const givenId = router.query.courseId;
  console.log(givenId);
  console.log(user);
  console.log(categ);
  console.log(tags);
  console.log(lang);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/courses/${givenId}`)
      .then(function (response) {
        // handle success
        console.log(response.data[0]);
        setCourse(response.data[0]);
        setUser(response.data[0].user);
        setCateg(response.data[0].category);
        setTags(response.data[0].tags);
        setLang(response.data[0].languages);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [givenId]);

  return (
    <>
      <div className="container">
        <div className="hero">
          <h1>{course.cou_title}</h1>
          <h2>{course.cou_description}</h2>
        </div>

        {/* Start Content */}
        <div className="content">
          <div className="courseDescription">
            <h1>Description</h1>
            <p>{course.cou_description}</p>
          </div>
          <div className="courseDetails">
            <Square
              src="/assets/icons/topicIcon.png"
              title="Topics"
              font_weight="bold"
            >
              {tags.map((tag) => {
                return (
                  <div className="tagInfo">
                    <img src={tag.tag_logo} />
                    <Link
                      href={{
                        pathname: "/tags/[id]",
                        query: { id: tag.tag_id },
                      }}
                    >
                      {tag.tag_title}
                    </Link>
                  </div>
                );
              })}
            </Square>
            <Square
              src="/assets/icons/languagesIcon.png"
              title="Languages"
              font_weight="bold"
              title_color="#00ff80"
            >
              {lang.map((lang) => {
                return (
                  <div className="tagInfo">
                    <img src={lang.lan_logo} />
                    <Link
                      href={{
                        pathname: "/languages/[id]",
                        query: { id: lang.lan_id },
                      }}
                    >
                      {lang.lan_title}
                    </Link>
                  </div>
                );
              })}
            </Square>
            <Square
              src="/assets/icons/languagesIcon.png"
              title="Pricing"
              font_weight="bold"
              title_color="#00ff80"
            >
              <p>25€/H</p>
            </Square>
          </div>
        </div>
      </div>

      {/* Css */}
      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          width: 100vw;
          flex-direction: column;
          position: relative;
        }

        .comments {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .courseDetails {
          height: 100%;
          width: 60%;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .courseDescription {
          padding: 40px 20px;
        }

        .content {
          align-items: center;
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

        h1 {
          font-family: "Inter", sans-serif;
          font-size: 30px;
          font-weight: bold;
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

        .tagInfo {
          display: flex;
          align-items: center;
        }

        .tagInfo img {
          height: 25px;
        }
        .tagLogo {
          width: 15px;
        }

        @media screen and (min-width: 768px) {
          .content {
            flex-direction: row;
            flex: 0 0 60%;
          }

          .hero {
            flex: 0 0 40%;
          }
        }
      `}</style>
    </>
  );
}
