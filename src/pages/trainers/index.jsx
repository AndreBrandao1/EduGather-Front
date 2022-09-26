import { Collapsable } from "@/components/Collapsable";
import { Comment } from "@/components/Comment";
import { SmallCourseCard } from "@/components/SmallCourseCard";
import { SponsoredTrainer } from "@/components/SponsoredTrainer";
import { Square } from "@/components/Square";
import { Stats } from "@/components/Stats";
import { Title } from "@/../public/styles/styledComponents";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Nav } from "@/components/Nav";

export default function trainer_page() {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8000/api/get_users_admin/trainer/verified`,
    })
      .then(function (response) {
        setTrainers(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Nav />

      {trainers.map((t) => {
        return (
          <div className="trainer-card">
            <section className="trainers">
              <SponsoredTrainer
                category={t.role}
                src="assets/userPic.jpg"
                trainerName={`${t.first_name} ${t.last_name}`}
                key={t.id}
              />
              <Link href={`/trainers/${t.id}`}>find out more</Link>
            </section>
          </div>
        );
      })}
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
      <style jsx>{`
        .body {
          margin: 0;
          padding: 0;
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          background: #23e3c9;
        }
        .trainers {
          display: flex;
          flex-direction: row;
          background-color: grey;
          gap: 50px;
          align-items: center;
        }
        .trainer-card {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}
