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
import { NodeNextRequest } from "next/dist/server/base-http/node";

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

  console.log(category);

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

    console.log(category);
    function selectAll() {
      // selecting all checkboxes
      // of group language
      var checkboxes = document.getElementsByName("tags");
      var values = [];
      // looping through all checkboxes
      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
        values.push(checkboxes[i].value);
      }
      console.log(values);
    }
  }
  return (
    <>
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
              <select name="cat_id" id="cat_id">
                {category.map(function (c) {
                  return <option value={c.id}>{c.cat_title}</option>;
                })}
              </select>
            </div>

            <div>
              <Label
                htmlFor="cou_tags"
                // style={
                //   tags.length !=1
                //     ? {
                //         display: "block",
                //       }
                //     : {
                //         display: "none",
                //       }
                // }
              >
                Tag the topics that you will abord in this course:
              </Label>

              {/* Creating a checkbox for every tag found to category selected. */}
              {tags.map(function (tag) {
                return (
                  <>
                    <input
                      type="checkbox"
                      id={tag.id}
                      name="tags"
                      value={tag.tag_title}
                    />
                    <label className="tagName" for={tag.id}>
                      {tag.tag_title}
                    </label>
                  </>
                );
              })}
            </div>

            <div className="form_input">
              <label for="des">Description:</label>
              <input id="desc" name="cou_description" type="text"></input>
            </div>

            {/* <div className="form_input">
              <label for="logo">Logo:</label>
              <label className="course_logo">
              <input id="logo" size="60" wname="cou_logo" type="file"></input>
              </label>
            </div> */}

            <button>Create</button>
          </form>
        </div>
      </div>

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
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 100px;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .form_container {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 20px;
            width: 80%;
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
           {
            /* .image {
            width: 100%;
            background-color: purple;
            flex: 0 0 40%;
          } */
          }
        `}
      </style>
    </>
  );
}
