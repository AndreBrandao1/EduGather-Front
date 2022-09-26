import Head from "next/head";
import Link from "next/link";

import { useAuth } from "@/hooks/auth";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/Layouts/Button";
import Input from "@/components/Input";
import InputError from "@/components/InputError";
import Label from "@/components/Label";
import { SlideShow } from "@/components/SlideShow";
import { NodeNextRequest } from "next/dist/server/base-http/node";
import { useRouter } from "next/router";
import { Dashboard } from "@/components/Dashboard";

export default function insertCourse() {
  const { user, login } = useAuth({ middleware: "auth", redirect: "/login" });
  const userId = [user?.id];
  const [errors, setErrors] = useState([]);
  const [lang, setLang] = useState([]);
  const [catId, setCatId] = useState(1);
  const checkBox = [];
  const lanCheckBox = [];
  const router = useRouter();
  const ref = useRef();
  const [category, setCategory] = useState([
    {
      cat_id: 1,
      cat_title: "Development",
      cat_description: "",
      cat_logo: "",
      tags: [
        {
          tag_id: 1,
          tag_title: "Web Development",
        },
        {
          tag_id: 2,
          tag_title: "Data Scince",
        },
        {
          tag_id: 3,
          tag_title: "Mobile Development",
        },
      ],
    },
  ]);
  const [tags, setTags] = useState([
    {
      tag_id: 1,
      tag_title: "Web Development",
    },
    {
      tag_id: 2,
      tag_title: "Data Scince",
    },
    {
      tag_id: 3,
      tag_title: "Mobile Development",
    },
  ]);

  useEffect(() => {
    //fetching all categories to to be displayed in the <select>
    axios
      .get("http://localhost:8000/api/categories")
      .then(function (response) {
        // handle success
        setCategory(response.data);

        setLang(response.data[0].languages);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // const tagArray = category.find((cat) => {
    //   return (cat.cat_id = catId);
    // });

    category.forEach((cat) => {
      if (cat.cat_id == catId) {
        setTags(cat.tags);
      }
    });
  }, [catId]);

  function addCourse(e) {
    e.preventDefault();
    const course_form = new FormData(e.target);

    course_form.append("tags", checkBox);
    course_form.append("user_id", userId);
    course_form.append("languages", lanCheckBox);

    axios({
      method: "post",
      url: "http://localhost:8000/api/insert_course",
      data: course_form,
    })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Dashboard>
        <div className="container">
          <div className="image"></div>

          <div className="form_container">
            <h1>Insert Course</h1>
            <form onSubmit={addCourse} method="post">
              <div className="form_input">
                <label for="title">Title:</label>
                <input id="title" name="cou_title" type="text"></input>
              </div>

              <div className="form_input">
                <label for="cat_id">Category:</label>
                <select
                  name="cat_id"
                  id="cat_id"
                  onChange={(e) => {
                    setCatId(e.target.value);
                    checkBox.length = 0;
                  }}
                >
                  {category.map(function (c) {
                    return <option value={c.cat_id}>{c.cat_title}</option>;
                  })}
                </select>
              </div>

              <div className="tagsContainer">
                <Label htmlFor="cou_tags">
                  Tag the topics that you will abord in this course:
                </Label>
                <div className="checkBox">
                  {/* Creating a checkbox for every tag found to category selected. */}
                  {tags.map(function (tag) {
                    return (
                      <>
                        <div>
                          <input
                            ref={ref}
                            type="checkbox"
                            id={tag.tag_id}
                            name="tag"
                            value={tag.tag_id}
                            onClick={(e) => {
                              if (e.target.checked) {
                                const check = e.target.value;
                                checkBox.push(check);
                                console.log(checkBox);
                              }
                            }}
                          />
                          <label className="tagName" for={tag.id}>
                            {tag.tag_title}
                          </label>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="form_input">
                {lang.map((l) => {
                  return (
                    <>
                      <div>
                        <input
                          ref={ref}
                          type="checkbox"
                          id={l.lan_id}
                          name="lan"
                          value={l.lan_id}
                          onClick={(e) => {
                            if (e.target.checked) {
                              const check = e.target.value;
                              lanCheckBox.push(check);
                            }
                          }}
                        />
                        <label className="lanName" for={l.id}>
                          {l.lan_title}
                        </label>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="form_input">
                <label for="des">Description:</label>
                <input id="desc" name="cou_description" type="textarea"></input>
              </div>

              <button>Create</button>
            </form>
          </div>
        </div>
      </Dashboard>

      <style jsx>
        {`
          button {
            background-color: purple;
            border-radius: 20px;
            color: white;
            font-size: 18px;
            margin-top: 20px;
            padding: 10px 15px 10px 15px;
          }

          .container {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 100px;
          }

          .checkBox {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;
            flex-wrap: wrap;
          }

          form {
            width: 60%;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .form_container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 20px;
          }

           {
            /* each div containing the different inputs */
          }
          .form_input {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          input[type="text"] {
            border-radius: 20px;
          }
          input[type="file"] {
          }

          input[type="checkbox"]:checked {
            background-color: purple;
          }
          h1 {
            font-weight: bold;
            font-size: 30px;
          }
          select {
            border-radius: 20px;
          }

          .tagName {
            padding: 5px;
          }
          .tagsContainer {
            flex-direction: column;
          }

          @media screen and (min-width: 769px) {
            .tagsContainer {
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  );
}
