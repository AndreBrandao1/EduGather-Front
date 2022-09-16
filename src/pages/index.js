import Head from "next/head";
import Link from "next/link";

import { useAuth } from "@/hooks/auth";
import { CourseCard } from "@/components/CourseCard";
import axios from "axios";
import { useState, UseEffect, useEffect } from "react";

export default function Home() {
  const { user } = useAuth({ middleware: "guest" });
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/search")
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
        return (
          <CourseCard
            trainer_img={c.cou_logo}
            trainer_name="Jack"
            course_title={c.cou_title}
            course_category="IT"
            course_tags="HTML"
            course_desc={c.cou_description}
            key={c.id}
          />
        );
      })}
    </>
  );
}
