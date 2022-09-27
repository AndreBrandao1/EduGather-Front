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
import { HomeSquare } from "@/components/HomeSquare";
import { HomeSquare2 } from "@/components/HomeSquare2";
import { HomeSquare3 } from "@/components/HomeSquare3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  faCheck,
  faCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { user } = useAuth({ middleware: "guest" });
  const [trainers, setTrainers] = useState([]);
  const userP = [
    { url: "/assets/user1.png" },
    { url: "/assets/user2.png" },
    { url: "/assets/user3.png" },
    { url: "/assets/user4.png" },
  ];

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
          <HomeSquare />
          <HomeSquare2 />
          <HomeSquare3 />
        </section>
        <section id="firstStep" className="ourTrainers">
          {/* We opted to not use dynamic data in this map since we were not able to implement the upload profile picture for each trainer and trainee */}
          {/* {trainers.slice(-4).map((t) => {
            return ( */}
          <SponsoredTrainer
            category="English Teacher"
            src="assets/user1.png"
            trainerName="Jack Velimir"
          />
          <SponsoredTrainer
            category="Dance Teacher"
            src="assets/user2.png"
            trainerName="Viatrix Sara"
          />
          <SponsoredTrainer
            category="Driving Instructor"
            src="assets/user3.png"
            trainerName="Erika Ronit"
          />
          <SponsoredTrainer
            category="Music Teacher"
            src="assets/user4.png"
            trainerName="Nafiset Priti"
          />
          {/* );
          })} */}
        </section>
        <section className="startNow">
          <StartNow
            buttonLabel="Start Now"
            firstText="Your can also become of of our"
            secondText="Trainers"
            href="/register"
            src="assets/startNow.png"
          />
        </section>
      </div>
      <style jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
          section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: auto;
            padding: 50px 0px;
          }
          .container {
            width: 100%;
          }

          .intro {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          h2 {
            font-size: 35px;
            color: rgb(223, 170, 58);
            font-weight: bold;
          }

          .ourTrainers {
            display: flex;
            background-color: #c8eff9;
            width: 100%;
            gap: 50px;
            padding: 50px 100px;
            align-items: center;
          }
          .startNow {
            display: flex;
            background-color: white;
            align-items: center;
            justify-content: center;
          }

          @media screen and (min-width: 992px) {
            section {
              flex-direction: row;
              height: 600px;
            }
            .intro {
            }
            h2 {
              font-size: 35px;
            }
          }
        `}
      </style>
    </>
  );
}
