"use client";
import React from "react";
import Chart from "react-apexcharts";

const PlatformOverviewChart = () => {
  const options = {
    chart: {
      type: "donut",
      foreColor: "#000",
    },
    labels: ["Google Ads", "Meta Ads", "Linked Ads", "Tik Tok Ads", "Other"],
    legend: {
      show: true,
      position: "bottom", // Place legend under the chart
      horizontalAlign: "center",
      fontSize: "14px",
      fontWeight: 500,
      markers: {
        width: 12,
        height: 12,
        radius: 12,
      },
      itemMargin: {
        horizontal: 8,
        vertical: 4, // spacing between legend rows
      },
      formatter: function (seriesName, opts) {
        const val = opts.w.globals.series[opts.seriesIndex];
        return `${seriesName}: ${val.toFixed(1)}%`;
      },
      labels: {
        colors: "#000",
      },
    },
    colors: ["#006d77", "#168aad", "#76c893", "#99d98c", "#c7f9cc"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "",
              fontSize: "24px",
              color: "#000",
              formatter: () => "300",
            },
          },
        },
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => `${val.toFixed(1)}%`,
      },
    },
    fill: {
      type: "gradient",
    },
  };

  const series = [31, 28.3, 17.7, 14.3, 8.7];

  return (
    <section className=" w-full h-full border border-gray-300 rounded-lg ">
      <div className=" p-4 flex flex-col text-black">
        <h2 className="font-bold text-lg mb-4">Platform Overview</h2>
        <Chart options={options} series={series} type="donut" height={320} />
      </div>
    </section>
  );
};

export default PlatformOverviewChart;
