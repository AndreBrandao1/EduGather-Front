import Head from "next/head";
import Link from "next/link";

import { useAuth } from "@/hooks/auth";
import { CourseCard } from "@/components/CourseCard";
import axios from "axios";
import { useState, UseEffect, useEffect } from "react";
import { Button } from "@/components/Layouts/Button";
import { Stats } from "@/components/Stats";

export default function Home() {
  const { user } = useAuth({ middleware: "guest" });
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/courses")
      .then(function (response) {
        // handle success
        setCourse(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      {courses.map(function (c) {
        const tagTitle = c.tags.map((tag) => {
          {
            return <p>{tag.tag_title}</p>;
          }
        });
        console.log(tagTitle);
        return (
          <CourseCard
            trainer_img={c.cou_logo}
            trainer_name={`${c.first_name} ${c.last_name}`}
            course_title={c.cou_title}
            course_category={c.cat_title}
            course_tags={tagTitle}
            course_desc={c.cou_description}
            key={c.id}
          />
        );
      })}
      <Button
        btn_txt="Details"
        bk_color="linear-gradient(49deg, rgba(16,178,163,1) 1%, rgba(162,11,232,1) 84%)"
        color="white"
      />

      <br></br>
      <Stats
        first_field="Followers"
        second_field="20000k"
        first_color="white"
        second_color="grey"
      />
    </>
  );
}
