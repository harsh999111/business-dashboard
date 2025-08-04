import React from "react";
import ProjectCard from "@/components/projectCard/ProjectCard";
import DashboardChart from "@/components/DashbordChart/DashbordChart";
import DashboardPiChart from "@/components/DashboardPiChart/DashboardPiChart";

const Home = () => {
  return (
    <main className="space-y-6 p-4">
      {/* Project Summary */}
      <ProjectCard />

      {/* Charts section - responsive grid */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-y-4 lg:gap-x-4 px-4">
        <DashboardChart />
        <DashboardPiChart />
      </section>
    </main>
  );
};

export default Home;
