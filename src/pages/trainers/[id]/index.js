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
import { CourseCard } from "@/components/CourseCard";

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
      .get(`http://localhost:8000/api/trainer/${givenId}`)
      .then(function (response) {
        // handle success
        setCourse(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [givenId]);

  return (
    <>
      <div className="content">
        {course?.length != 0 ? (
          course?.map((c) => {
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
          })
        ) : (
          <p>No results were found</p>
        )}
      </div>
      <p>
        the page shows all the courses that belong to a specific which includes,
        aproved, denied and on_hold
      </p>

      {/* Css */}
      <style jsx>{``}</style>
    </>
  );
}
export default trainer_page;
