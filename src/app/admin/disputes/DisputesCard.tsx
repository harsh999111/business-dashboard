"use client";

import React from "react";
import {
  FiClock,
  FiSearch,
  FiAlertTriangle,
  FiMessageSquare,
  FiFileText,
  FiUser,
  FiUserCheck,
  FiUsers,
  FiFolder,
} from "react-icons/fi";

interface DisputeCardProps {
  dispute: {
    id: string;
    title: string;
    priority: "LOW" | "MEDIUM" | "HIGH";
    status: "OVERDUE" | "IN PROGRESS" | "OPEN" | "RESOLVED";
    description: string;
    reporter: {
      name: string;
      company: string;
      type: "advertiser" | "business";
      avatar?: string;
      initial?: string;
    };
    defendant: {
      name: string;
      company: string;
      type: "advertiser" | "business";
      avatar?: string;
      initial?: string;
    };
    project: {
      name: string;
      budget: string;
      disputedAmount: string;
    };
    metadata: {
      created: string;
      messages: number;
      evidence: number;
      assignedTo: string;
    };
  };
}

const DisputeCard: React.FC<DisputeCardProps> = ({ dispute }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "HIGH":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "MEDIUM":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "LOW":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "OVERDUE":
        return "bg-red-100 text-red-800 border-red-200";
      case "IN PROGRESS":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "OPEN":
        return "bg-red-100 text-red-800 border-red-200";
      case "RESOLVED":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "OVERDUE":
        return <FiClock className="w-3 h-3" />;
      case "IN PROGRESS":
        return <FiClock className="w-3 h-3" />;
      case "OPEN":
        return <FiAlertTriangle className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {dispute.title}
            </h3>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(
                dispute.priority
              )}`}
            >
              {dispute.priority}
            </span>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full border flex items-center gap-1 ${getStatusColor(
                dispute.status
              )}`}
            >
              {getStatusIcon(dispute.status)}
              {dispute.status}
            </span>
          </div>
          <p className="text-gray-600 text-sm">{dispute.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-6 mb-4">
        {/* Reporter */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            <FiUserCheck className="inline w-4 h-4 mr-1" />
            Reporter
          </h4>
          <div className="flex items-center gap-3">
            {dispute.reporter.avatar ? (
              <img
                src={dispute.reporter.avatar}
                alt={dispute.reporter.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {dispute.reporter.initial || dispute.reporter.name.charAt(0)}
                </span>
              </div>
            )}
            <div className="flex">
              <div>
                <p className="font-medium text-gray-900">
                  {dispute.reporter.name}
                </p>
                <p className="text-sm text-gray-600">
                  {dispute.reporter.company}
                </p>
              </div>
              <div>
                <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full mt-1">
                  {dispute.reporter.type}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Defendant */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            <FiUsers className="inline w-4 h-4 mr-1" />
            Defendant
          </h4>
          <div className="flex items-center gap-3">
            {dispute.defendant.avatar ? (
              <img
                src={dispute.defendant.avatar}
                alt={dispute.defendant.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {dispute.defendant.initial ||
                    dispute.defendant.name.charAt(0)}
                </span>
              </div>
            )}
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-gray-900">
                  {dispute.defendant.name}
                </p>
                <p className="text-sm text-gray-600">
                  {dispute.defendant.company}
                </p>
              </div>
              <div>
                <div className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                  {dispute.defendant.type}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            <FiFolder className="inline w-4 h-4 mr-1" />
            Project Details
          </h4>
          <div>
            <p className="font-medium text-gray-900 mb-1">
              {dispute.project.name}
            </p>
            <div className="space-y-1 flex gap-x-2.5">
              <p className="text-sm text-gray-600">
                Budget:{" "}
                <span className="font-medium">{dispute.project.budget}</span>
              </p>
              <p className="text-sm text-gray-600">
                Disputed:{" "}
                <span className="font-medium text-red-600">
                  {dispute.project.disputedAmount}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Metadata */}
      <div className="flex justify-between">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <span>Created: {dispute.metadata.created}</span>
            <span className="flex items-center gap-1">
              <FiMessageSquare className="w-4 h-4" />
              {dispute.metadata.messages} messages
            </span>
            <span className="flex items-center gap-1">
              <FiFileText className="w-4 h-4" />
              {dispute.metadata.evidence} evidence
            </span>
            <span>Assigned to {dispute.metadata.assignedTo}</span>
          </div>
        </div>
        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
              View Details
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
              Actions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisputeCard;
