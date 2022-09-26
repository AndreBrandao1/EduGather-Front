import Head from "next/head";
import Link from "next/link";

import { useAuth } from "@/hooks/auth";
import axios from "axios";
import { useState, UseEffect, useEffect } from "react";
import { Hero } from "@/components/Hero";

import ReactDOM from "react-dom";

import { StartNow } from "@/components/StartNow";
import { SponsoredTrainer } from "@/components/SponsoredTrainer";
import { SlideShow } from "@/components/SlideShow";
import { Nav } from "@/components/Nav";

export default function Home() {
  const { user } = useAuth({ middleware: "guest" });
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8000/api/get_users_admin/trainer/verified`,
    })
      .then(function (response) {
        setTrainers(response.data);
        console.log(response.data.slice(-5));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <div className="main-content">
        <section className="intro">
          <SlideShow />
        </section>
        <section className="ourTrainers">
          {trainers.slice(-5).map((t) => {
            return (
              <SponsoredTrainer
                category={t.role}
                src="assets/userPic.jpg"
                trainerName={`${t.first_name} ${t.last_name}`}
                key={1}
              />
            );
          })}
        </section>
        <section className="startNow">
          <StartNow
            buttonLabel="Start Now"
            firstText="Your can also become of of our"
            secondText="Trainers"
            href="#"
            src="assets/startNow.png"
          />
        </section>
      </div>
      <style jsx>
        {`
          html,
          body {
            overflow-x: hidden;
          }
          .container {
            width: 100vw;
          }

          .body {
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #23e3c9;
          }

          h2 {
            font-size: 35px;
            color: rgb(223, 170, 58);
            font-weight: bold;
          }

          .ourTrainers {
            display: flex;
            background-color: grey;
            width: 100%;
            height: 600px;
            gap: 50px;
            padding: 50px 100px;
            align-items: center;
          }
          .startNow {
            display: flex;
            background-color: white;
            width: 100%;
            height: 500px;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}
