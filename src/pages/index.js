import Head from "next/head";
import Link from "next/link";

import { useAuth } from "@/hooks/auth";
import { CourseCard } from "@/components/CourseCard";
import axios from "axios";
import { useState, UseEffect, useEffect } from "react";
import { Button } from "@/components/Layouts/Button";
import { Stats } from "@/components/Stats";
import { Hero } from "@/components/Hero";

import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { SideBar } from "@/components/SideBar";
import { StartNow } from "@/components/StartNow";
import { SponsoredTrainer } from "@/components/SponsoredTrainer";

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
      <SideBar />
      <Hero />
      <div className="main-content">
        <section className="intro">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="..." alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Third slide" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
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

          .intro {
            background-color: #b266ff;
            width: 100%;
            height: 600px;
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
