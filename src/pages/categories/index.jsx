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

export default function categories_page() {
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
      .get(`http://localhost:8000/api/categories/`)
      .then(function (response) {
        // handle success
        setCourse(response.data);
        console.log("courses");
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [givenId]);

  return (
    <>
      <p>
        this page will show all the categories and the related tags, when click
        on a <b>(((category)))</b> link it to "categories/[cat_id]" where you
        can dicplay all the tags of that categoory and if you wish you can
        display each tag in a part with some samples of its courses by fetching
        the next api on click at any <b>(((tag)))</b> we can display the page of
        each tag and its related courses by linking it to
        "categories/[cat_id/tag_id]" and then fetch the follosing
        api=----="/courses_tag/[tag_id]"
      </p>
      {/* Css */}
      <style jsx>{``}</style>
    </>
  );
}
