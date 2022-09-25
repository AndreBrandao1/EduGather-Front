import React from "react";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import { CourseCard } from "@/components/CourseCard";

function search() {
  const [courses, setCourses] = useState();
  const [input, setInput] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8000/api/courses`,
    })
      .then(function (response) {
        setCourses(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function search(e) {
    console.log(e);

    const searchV = courses.filter((element, index) => {
      const filtered = element.cat_title.toLowerCase();
      console.log(filtered);
      return element.cat_title.toLowerCase().includes(e);
    });

    console.log(searchV);
    setCourses(searchV);
  }
  return (
    <>
      <div className="container">
        <div className="hero">
          <input
            onChange={(e) => {
              search(e.target.value);
              console.log(e.target.value);
            }}
            type="text"
            placeholder="start learning..."
          />
          <button>Search</button>
        </div>
        <div className="content">
          {courses?.map((c) => {
            return (
              <>
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
              </>
            );
          })}
        </div>
      </div>
      <style jsx>
        {`
          .content {
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 100px 0px;
            gap: 50px;
          }

          .hero {
            width: 100vw;
            height: 500px;
            background-image: url("/assets/searchHero.jpg");
            background-position: center;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hero input {
            width: 200px;
            border-radius: 25px;
            border: none;
            height: 40px;
            font-size: 16px;
          }

          textarea:focus,
          input:focus {
            box-shadow: none;
          }

          .hero button {
            border-radius: 25px;
            color: white;
            font-weight: bold;
            font-size: 15px;
            border: 4px solid white;
            padding: 4px 30px 4px 50px;
            margin-left: -40px;
          }

          @media screen and (min-width: 768px) {
            .hero {
              width: 100vw;
              height: 500px;
              background-color: orange;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .hero input {
              width: 400px;
              border-radius: 25px;
              border: none;
              height: 60px;
              font-size: 16px;
            }

            .hero button {
              border-radius: 25px;
              background-color: rgb(223, 170, 58);
              color: white;
              font-weight: bold;
              font-size: 20px;
              border: 5px solid white;
              padding: 10px 20px 10px 30px;
              margin-left: -40px;
            }
          }
        `}
      </style>
    </>
  );
}

export default search;
