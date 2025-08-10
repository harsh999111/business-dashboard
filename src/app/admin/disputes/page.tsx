"use client";

import React, { useState } from "react";
import DisputeCard from "./DisputesCard";
import { FiSearch } from "react-icons/fi";

const DisputesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [priorityFilter, setPriorityFilter] = useState("All Priority");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  // Sample dispute data matching the image
  const disputes = [
    {
      id: "1",
      title: "Payment Delay for Completed Campaign",
      priority: "HIGH" as const,
      status: "OVERDUE" as const,
      description:
        "Campaign was completed on time with all deliverables met, but payment has been delayed for over 30 days despite multiple follow-ups.",
      reporter: {
        name: "Sarah Digital",
        company: "Digital Works Agency",
        type: "advertiser" as const,
        initial: "S",
      },
      defendant: {
        name: "Mark Johnson",
        company: "TechVibe Solutions",
        type: "business" as const,
        avatar: "/Profile.jpeg",
      },
      project: {
        name: "TechVibe E-commerce Campaign",
        budget: "$15,000",
        disputedAmount: "$15,000",
      },
      metadata: {
        created: "01-15-2025",
        messages: 4,
        evidence: 4,
        assignedTo: "Admin Support",
      },
    },
    {
      id: "2",
      title: "Unsatisfactory Campaign Performance",
      priority: "MEDIUM" as const,
      status: "IN PROGRESS" as const,
      description:
        "The advertising campaign did not meet the agreed KPIs and ROAS targets specified in the contract.",
      reporter: {
        name: "Lisa Chen",
        company: "HealthMax Supplements",
        type: "business" as const,
        avatar: "/Profile.jpeg",
      },
      defendant: {
        name: "Mike Creative",
        company: "Creative Solutions",
        type: "advertiser" as const,
        avatar: "/Profile.jpeg",
      },
      project: {
        name: "HealthMax Lead Generation",
        budget: "$12,500",
        disputedAmount: "$12,500",
      },
      metadata: {
        created: "01-20-2025",
        messages: 3,
        evidence: 2,
        assignedTo: "Admin Support",
      },
    },
  ];

  const filteredDisputes = disputes.filter((dispute) => {
    const matchesSearch =
      dispute.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.id.includes(searchQuery) ||
      dispute.reporter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.defendant.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "All Status" || dispute.status === statusFilter;
    const matchesPriority =
      priorityFilter === "All Priority" || dispute.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Disputes Management
          </h1>
          <p className="text-gray-600">
            Manage and resolve disputes between advertisers and businesses
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search disputes by ID, title, or parties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All Status</option>
                <option>OVERDUE</option>
                <option>IN PROGRESS</option>
                <option>OPEN</option>
                <option>RESOLVED</option>
              </select>

              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All Priority</option>
                <option>LOW</option>
                <option>MEDIUM</option>
                <option>HIGH</option>
              </select>

              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All Categories</option>
                <option>Payment Issues</option>
                <option>Performance Issues</option>
                <option>Contract Disputes</option>
                <option>Communication Issues</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              {filteredDisputes.length} disputes found
            </div>
          </div>
        </div>

        {/* Disputes List */}
        <div className="space-y-6">
          {filteredDisputes.map((dispute) => (
            <DisputeCard key={dispute.id} dispute={dispute} />
          ))}
        </div>

        {filteredDisputes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No disputes found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisputesPage;
