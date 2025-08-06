import React from "react";
import ProjectCard from "@/components/projectCard/ProjectCard";
import DashboardChart from "@/components/DashbordChart/DashbordChart";
import DashboardPiChart from "@/components/DashboardPiChart/DashboardPiChart";
import DashBoardSetting from "@/components/DashBoardSetting/DashBoardSetting";
import SettingProfile from "@/components/SettingProfil/SettingProfile";
import SettingForm from "@/components/SetingForm/SettingForm";

import SettingProfileroute from "@/components/SettingProfileroute/SettingProfileroute";
const Home = () => {
  return (
    <main className="space-y-6 p-4">
      {/* Project Summary */}
      {/* <ProjectCard /> */}
      {/* <section className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-y-4 lg:gap-x-4 px-4">
        <DashboardChart />
        <DashboardPiChart />
      </section> */}
      <DashBoardSetting/> 
     <SettingProfileroute/>
      <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-x-3 h-full space-y-6">

      <SettingProfile/>
      <SettingForm/>
      </div>
    </main>
  );
};

export default Home;
