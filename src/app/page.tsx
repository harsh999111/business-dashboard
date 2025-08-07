import React from "react";
import ProjectCard from "@/components/projectCard/ProjectCard";
import DashboardChart from "@/components/DashbordChart/DashbordChart";
import DashboardPiChart from "@/components/DashboardPiChart/DashboardPiChart";
import DashBoardSetting from "@/components/DashBoardSetting/DashBoardSetting";
import SettingProfile from "@/components/SettingProfil/SettingProfile";
import SettingForm from "@/components/SetingForm/SettingForm";

import SettingProfileroute from "@/components/SettingProfileroute/SettingProfileroute";
import Setting from "@/components/SettingText/Setting";
import Innovation from "@/components/Innovation/Innovation";
const Home = () => {
  return (
    <main className="space-y-6  ">
      {/* Project Summary */}
      {/* <ProjectCard /> */}
      {/* <section className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-y-4 lg:gap-x-4 px-4">
        <DashboardChart />
        <DashboardPiChart />
      </section> */}
      <Setting/>
      <DashBoardSetting/> 
     <SettingProfileroute/>
      <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-x-3 h-full w-full space-y-6">

      <SettingProfile/>
      <SettingForm/>
      </div>
      <Innovation/>
    </main>
  );
};

export default Home;
