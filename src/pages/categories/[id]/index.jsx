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

export default function categoryDetails() {
  const [course, setCourse] = useState([]);
  const [user, setUser] = useState([]);
  const [categ, setCateg] = useState([]);
  const [tags, setTags] = useState([]);
  const [lang, setLang] = useState([]);

  const router = useRouter();
  const givenId = router.query.id;
  console.log(router.query.id);
  console.log(user);
  console.log(categ);
  console.log(tags);
  console.log(lang);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/courses_tag/${givenId}`)
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [givenId]);

  return (
    <>
      <p>page that shows all the courses in the given category</p>
      <p>
        API"/courses_tag/[tag_id]" the courses are available under response.data
      </p>
      {/* Css */}
      <style jsx>{``}</style>
    </>
  );
}
