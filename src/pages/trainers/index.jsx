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

function trainer_page() {
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
      .get(`http://localhost:8000/api/get_users_admin/trainer/verified`)
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
      <p>page that shows all the trainers who are verified</p>
      <p>the fetch is with the folowwing api</p>
      <p>/get_users_admin/trainer/verified</p>
      <p>
        if you want to fetch the courses of a certain trainer you can do that by
        using the folwoing API
      </p>
      <p>/trainer/id</p>
      <p>
        then the filter should be applied on the front end to prevent the
        courses which are not verified
      </p>
      {/* Css */}
      <style jsx>{``}</style>
    </>
  );
}
export default trainer_page;
