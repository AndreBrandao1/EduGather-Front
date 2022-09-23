import Head from "next/head";
import Link from "next/link";

import { useAuth } from "@/hooks/auth";
import { CourseCard } from "@/components/CourseCard";
import axios from "axios";
import { useState, UseEffect, useEffect } from "react";
import { Button } from "@/components/Layouts/Button";
import { Stats } from "@/components/Stats";
import { Hero } from "@/components/Hero";

export default function Home() {
  const { user } = useAuth({ middleware: "guest" });
  const [courses, setCourse] = useState([]);

  return (
    <>
      <Hero />
    </>
  );
}
