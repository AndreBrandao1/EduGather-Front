import Head from "next/head";
import Link from "next/link";

import { useAuth } from "@/hooks/auth";
import axios from "axios";
import { useState, UseEffect, useEffect } from "react";
import { Button } from "@/components/Layouts/Button";
import Input from "@/components/Input";
import InputError from "@/components/InputError";
import Label from "@/components/Label";

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

  return (
    <>
      <form>
        {/* Course title */}
        <div>
          <Label htmlFor="cou_title">Title</Label>

          <Input
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
          <Label htmlFor="cou_title">Description</Label>

          <Input
            id="cou_title"
            type="text"
            className="block mt-1 w-full"
            required
            autoFocus
          />

          <InputError messages={errors.cou_logo} className="mt-2" />
        </div>

        {/* Password */}
        <div>
          <Label htmlFor="cou_title">Logo</Label>

          <Input
            id="cou_logo"
            type="text"
            className="block mt-1 w-full"
            required
            autoFocus
          />

          <InputError messages={errors.cou_logo} className="mt-2" />
        </div>

        {/* Confirm Password */}
        <div>
          <Label htmlFor="cou_cat">Category:</Label>
          <select
            name="cou_cat"
            id="cou_cat"
            onChange={function (e) {
              axios
                .get(`http://localhost:8000/api/categories/${e.target.value}`)
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

        <div>
          <Label htmlFor="cou_tags">
            Tag the topics that you will abord in this course:
          </Label>

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

        <div className="flex items-center justify-end mt-4">
          <Button className="ml-4">Create</Button>
        </div>
      </form>
    </>
  );
}
