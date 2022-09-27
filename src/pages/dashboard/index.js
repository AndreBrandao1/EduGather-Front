import LeftNavbar from "@/components/LeftNavbar";
import Rectangle from "@/components/Rectangle";
import UpdateProfile from "@/components/UpdateProfile";
import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Dashboard } from "@/components/Dashboard";
import NavDashboard from "@/components/NavDashboard";
import { TraineeDashboard } from "@/components/TraineeDashboard";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { Nav } from "@/components/Nav";

const DashboardIndex = () => {
  const router = useRouter();
  const { login, user } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/login",
  });

  return (
    <>
      {user?.role == "trainer" && (
        <Dashboard>
          <NavDashboard />
        </Dashboard>
      )}
      {user?.role === "admin" && (
        <Dashboard>
          <NavDashboard></NavDashboard>
        </Dashboard>
      )}
      {user?.role === "trainee" && (
        <Dashboard>
          <NavDashboard></NavDashboard>
        </Dashboard>
      )}
    </>
  );
};

export default DashboardIndex;
