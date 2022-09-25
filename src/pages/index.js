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
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="assets/educate.jpg" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </section>
        <section className="ourTrainers"></section>
        <section className="startNow">
          <img src="/assets/startNow.png" />
          <div className="startLink">
            <span>You can also become one of our</span>
            <h2>Trainers</h2>
            <Link href="#">
              <button>Start now</button>
            </Link>
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .container {
            width: 100vw;
          }

          .intro {
            background-color: #b266ff;
            width: 100%;
            height: 600px;
          }
          .startNow img {
            max-width: 50%;
            height: 500px;
            right: 400px;
            position: absolute;
            bottom: 0;
          }

          h2 {
            font-size: 35px;
            color: rgb(223, 170, 58);
            font-weight: bold;
          }

          .ourTrainers {
            background-color: red;
            width: 100%;
            height: 600px;
          }
          .startNow {
            display: flex;
            background-color: white;
            width: 100%;
            height: 600px;
            align-items: center;
            justify-content: center;
            position: relative;
            align-self: center;
          }

          .startLink {
            display: flex;
            gap: 10px;
            flex-direction: column;
            width: 300px;
            position: absolute;
            left: 700px;
          }

          .startLink span {
            font-size: 35px;
          }
          .startLink button {
            background-color: rgb(223, 170, 58);
            width: 150px;
            color: white;
            font-weight: bold;
            padding: 20px 30px;
            border-radius: 25px;
            font-size: 18px;
          }
        `}
      </style>
    </>
  );
}
