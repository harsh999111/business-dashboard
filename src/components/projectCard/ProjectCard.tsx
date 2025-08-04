import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { CiPlay1, CiSearch } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FiYoutube, FiFacebook } from "react-icons/fi";

const campaigns = [
  {
    id: 1,
    title: "Summer Sale Campaign",
    status: "Active",
    statusColor: "bg-green-200",
    icon: <CiPlay1 className="text-green-400 text-base md:text-lg" />,
    user: "Sarah Johnson",
    platform: "Meta ads",
    platformIcon: <FiFacebook className="text-blue-400 text-base md:text-lg" />,
    budget: "$15,000",
    spent: "$9600",
    percentage: "64%",
  },
  {
    id: 2,
    title: "Holiday Campaign 2024",
    status: "Complete",
    statusColor: "bg-blue-200",
    icon: <FaCheckCircle className="text-blue-200 text-base md:text-lg" />,
    user: "Sarah Johnson",
    platform: "Google ads",
    platformIcon: <CiSearch className="text-green-400 text-base md:text-lg" />,
    budget: "$20,000",
    spent: "$19,500",
    percentage: null,
  },
  {
    id: 3,
    title: "Influencer Collaboration Drive",
    status: "Draft",
    statusColor: "bg-gray-200",
    icon: <FaCheckCircle className="text-blue-200 text-base md:text-lg" />,
    user: "Mike Chen",
    platform: "Youtube ads",
    platformIcon: <FiYoutube className="text-red-400 text-base md:text-lg" />,
    budget: "$28,000",
    spent: "0",
    percentage: null,
  },
  {
    id: 4,
    title: "Community Engagement Drive",
    status: "Complete",
    statusColor: "bg-blue-200",
    icon: <FaCheckCircle className="text-blue-200 text-base md:text-lg" />,
    user: "Emma Davis",
    platform: "Meta ads",
    platformIcon: <FiFacebook className="text-blue-400 text-base md:text-lg" />,
    budget: "$16,000",
    spent: "$15,800",
    percentage: null,
  },
];

const ProjectCard = () => {
  return (
    <section className="w-full h-full p-4 py-10">
      <div className="border border-gray-300 p-4 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-base md:text-lg font-semibold">
            Recent Projects
          </h1>
          <div className="border border-gray-300 p-1 rounded-lg">
            <IoEyeSharp className="text-gray-600 text-lg" />
          </div>
        </div>

        <div className="py-6 space-y-4 md:space-y-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="border border-gray-300 p-3 rounded-lg space-y-3"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="flex items-center gap-x-2">
                  {campaign.icon}
                  <h1 className="text-sm md:text-base font-semibold">
                    {campaign.title}
                  </h1>
                </div>
                <div>
                  <span
                    className={`text-xs px-3 py-1 rounded-lg whitespace-nowrap ${campaign.statusColor}`}
                  >
                    {campaign.status}
                  </span>
                </div>
              </div>

              {/* User & Platform */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4 text-sm text-gray-600">
                <div className="flex items-center gap-x-2">
                  <FaUserGroup className="text-gray-400" />
                  <span>{campaign.user}</span>
                </div>
                <div className="flex items-center gap-x-2 mt-1 sm:mt-0">
                  {campaign.platformIcon}
                  <span>{campaign.platform}</span>
                </div>
              </div>

              {/* Budget Info */}
              <div className="flex  justify-between  sm:flex-row sm:justify-between sm:items-center gap-2 pt-2 text-xs md:text-sm">
                <div className="flex gap-x-2">
                  <div className="flex gap-x-1  md:flex-row">
                    <span>Budget:</span>
                    <span className="font-bold">{campaign.budget}</span>
                  </div>
                  <div className="flex gap-x-1  md:flex-row">
                    <span>Spent:</span>
                    <span className="font-bold">{campaign.spent}</span>
                  </div>
                </div>
                {campaign.percentage && (
                  <div className="text-right text-gray-700">
                    {campaign.percentage}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
