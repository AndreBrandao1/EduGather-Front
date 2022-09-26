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

export default function categories_page() {
  const [categories, setCategories] = useState([]);
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
      .get(`http://localhost:8000/api/categories_courses/`)
      .then(function (response) {
        // handle success
        setCategories(response.data);
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
        {categories.map((CF) => {
          console.log(CF.courses);

          return (
            <>
              <h3>{CF.cat_title}</h3>

              <div className="content">
                {CF.courses?.length != 0 ? (
                  CF.courses?.map((c) => {
                    console.log(c);
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
            </>
          );
        })}
      </div>
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
