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

export default function Home() {
  const { user } = useAuth({ middleware: "guest" });

  return (
    <>
      <SideBar />
      <Hero />
      <div className="main-content">
        <section className="intro">
          <Carousel
            width="50%"
            showThumbs={false}
            autoPlay={true}
            showIndicators={true}
            showStatus={false}
          >
            <div>
              <img src="assets/build.jpg" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="assets/love.jpg" />
            </div>
            <div>
              <img src="assets/educate.jpg" />
            </div>
          </Carousel>
        </section>
        <section className="ourTrainers"></section>
        <section className="startNow">
          <StartNow
            buttonLabel="Start Now"
            firstText="Your can also become of of our"
            secondText="Trainers"
            href="#"
            src="assets/startNow.png"
          />{" "}
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
            background-color: red;
            width: 100vw;
            height: 600px;
          }
          .startNow {
            display: flex;
            background-color: white;
            width: 100%;
            height: 600px;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}
