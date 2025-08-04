// MonthlyPerformanceChart.jsx
"use client";
import React from "react";
import Chart from "react-apexcharts";
import { SlCalender } from "react-icons/sl";

const MonthlyPerformanceChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#006d77", "#83c5be", "#edf6f9"], // Add third color properly
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        formatter: (val) => `${val / 1000}k`,
      },
      max: 100000,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.25,
        opacityFrom: 0.9,
        opacityTo: 0.6,
        stops: [0, 100],
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val.toLocaleString()}`,
      },
    },
    legend: {
      position: "top",
    },
  };

  const series = [
    {
      name: "Total Budget",
      data: [
        16000, 30000, 27000, 31000, 17000, 29000, 21000, 28000, 32000, 19000,
        31000, 24000,
      ],
    },
    {
      name: "Amount Spent",
      data: [
        11000, 25000, 15000, 16000, 22000, 13000, 19000, 15000, 23000, 20000,
        18000, 18000,
      ],
    },
    {
      name: "Performance Score",
      data: [
        70000, 62000, 37000, 12000, 11000, 10000, 11000, 37000, 62000, 71000,
        60000, 35000,
      ],
    },
  ];

  return (
    <section className="h-full w-full border border-gray-300 rounded-lg ">
      <div className="p-4 ">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-2">
          <h2 className="font-bold text-base sm:text-lg">
            Performance Overview
          </h2>
          <div className="border border-gray-300 px-3 py-2 flex items-center gap-x-2 rounded-md text-sm sm:text-base w-40 sm:w-44 ">
            <SlCalender className="text-sm sm:text-base" />
            <span>Last 12 Months</span>
          </div>
        </div>

        <div className="mt-4">
          <Chart options={options} series={series} type="bar" height={400} />
        </div>
      </div>
    </section>
  );
};

export default MonthlyPerformanceChart;
