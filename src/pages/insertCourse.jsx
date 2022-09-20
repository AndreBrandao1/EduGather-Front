import Head from "next/head";
import Link from "next/link";

import { useAuth } from "@/hooks/auth";
import axios from "axios";
import { useState, UseEffect, useEffect } from "react";
import { Button } from "@/components/Layouts/Button";
import Input from "@/components/Input";
import InputError from "@/components/InputError";
import Label from "@/components/Label";
import { SlideShow } from "@/components/SlideShow";

export default function insertCourse() {
  const { user } = useAuth({ middleware: "auth" });
  const [errors, setErrors] = useState([]);
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    //fetching all categories to to be displayed in the <select>
    axios
      .get("http://localhost:8000/api/categories")
      .then(function (response) {
        // handle success
        setCategory(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  function addCourse(e) {
    e.preventDefault();
    const course_form = new FormData(e.target);
    console.log(course_form);
    axios({
      method: "post",
      url: "http://localhost:8000/api/insert_course",
      data: course_form,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div className="container">
        <div className="image"></div>

        <div className="form_container">
          <form onSubmit={addCourse} method="post">


            {/* Course title */}
            <div>
              <Label htmlFor="cou_title">Title</Label>

              <Input
                name="cou_title"
                id="cou_title"
                type="text"
                className="block mt-1 w-full"
                required
                autoFocus
              />

              <InputError messages={errors.cou_title} className="mt-2" />
            </div>

            {/* Course description */}
            <div>
              <Label htmlFor="cou_description">Description</Label>

              <Input
                name="cou_description"
                id="cou_description"
                type="text"
                className="block mt-1 w-full"
                required
                autoFocus
              />

              <InputError messages={errors.cou_logo} className="mt-2" />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="cou_logo">Logo</Label>

              <Input
                name="cou_logo"
                id="cou_logo"
                type="text"
                className="block mt-1 w-full"
                required
                autoFocus
              />

              <InputError messages={errors.cou_logo} className="mt-2" />
            </div>

            <div>
              <Label htmlFor="cou_cat">Category:</Label>
              <select
                name="cat_id"
                id="cat_id"
                onChange={function (e) {
                  axios
                    .get(
                      `http://localhost:8000/api/categories/${e.target.value}`
                    )
                    .then(function (response) {
                      // handle success
                      setTags(response.data);
                    })
                    .catch(function (error) {
                      // handle error
                      console.log(error);
                    });

                  console.log(tags);
                }}
                required
              >
                {category.map(function (c) {
                  return <option value={c.id}>{c.cat_title}</option>;
                })}
              </select>

              <InputError messages={errors.cou_title} className="mt-2" />
            </div>

            {/* Course Tags */}
            <div>
              <Label htmlFor="cou_tags">
                Tag the topics that you will abord in this course:
              </Label>

              {/* Creating a checkbox for every tag found to category selected. */}
              {tags.map(function (tag) {
                return (
                  <>
                    <input
                      type="checkbox"
                      id={tag.id}
                      name={tag.tag_title}
                      value={tag.tag_title}
                    />
                    <label for={tag.id}>{tag.tag_title}</label>
                  </>
                );
              })}

              <InputError messages={errors.cou_tags} className="mt-2" />
            </div>

            <button type="submit">Create</button>
          </form>
        </div>
      </div>

      <style jsx>
        {`
          .container {
            width: 100vw;
            height: 100vh;
            display: flex;
            padding: 150px;
            gap: 10px;
          }

          .form_container {
            width: 100%;
            padding: 100px;
            border: 1px solid black;
          }

          .image {
            width: 100%;
            background-color: purple;
            flex: 0 0 40%;
          }

          button {
            background-color: purple;
            color: white;
            padding: 10px 25px 10px 25px;
            border-radius: 15px;
            font-size: 18px;
            margin-top: 20px;
          }
        `}
      </style>
    </>
  );
}
