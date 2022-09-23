import LeftNavbar from "@/components/LeftNavbar";
import Rectangle from "@/components/Rectangle";
import UpdateProfile from "@/components/UpdateProfile";
import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Dashboard } from "@/components/Dashboard";
import NavDashboard from "@/components/NavDashboard";
import { TraineeDashboard } from "@/components/TraineeDashboard";

const DashboardIndex = () => {
  const { user } = useAuth({ middleware: "auth" });
  return (
    <>
      {user?.role == "trainer" && (
        <Dashboard>
          <TraineeDashboard />
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
