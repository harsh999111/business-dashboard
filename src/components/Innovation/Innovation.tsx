"use client";
import React, { useState } from "react";
import {
  FiRefreshCw,
  FiSearch,
  FiDollarSign,
  FiPlus,
  FiMoreVertical,
  FiEye,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

const Innovation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  // Sample invoice data
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      invoiceNumber: "INV-001",
      client: "John Doe",
      project: "Website Design",
      amount: "$1,200",
      status: "Paid",
      dueDate: "2024-01-15",
    },
    {
      id: 2,
      invoiceNumber: "INV-002",
      client: "Jane Smith",
      project: "Mobile App",
      amount: "$2,500",
      status: "Pending",
      dueDate: "2024-01-20",
    },
    {
      id: 3,
      invoiceNumber: "INV-003",
      client: "Mike Johnson",
      project: "Logo Design",
      amount: "$800",
      status: "Overdue",
      dueDate: "2024-01-10",
    },
  ]);



  return (
    <section className="border border-gray-200">

    <div className="p-6 bg-white min-h-screen ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-base font-bold text-gray-900">All Invoices</h1>
        <button className="flex text-sm items-center gap-2 p-2 border border-gray-300 rounded-xl transition-colors cursor-pointer hover:bg-gray-200">
          <FiRefreshCw className="w-3 h-3" />
          Refresh
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search invoices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-96 pl-10 pr-4 py-2 border bg-gray-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
        </div>
      <div className="flex justify-between border-gray-200 border p-2 rounded-xl">
        <h1>All status</h1>
        <div>Icon Dropdown</div>
      </div>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-7 gap-4 px-4 py-3 rounded-lg mb-6 text-sm font-medium text-black border hover:bg-gray-100 border-gray-100">
        <div>Invoice</div>
        <div>Client</div>
        <div>Project</div>
        <div>Amount</div>
        <div>Status</div>
        <div>Due Date</div>
        <div>Actions</div>
      </div>

      {/* Invoice List */}
    
  
        <div className="flex flex-col items-center justify-center py-16">
          <div className=" flex items-center justify-center mb-6">
            <FiDollarSign className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            No invoices found
          </h3>
          <p className="text-gray-600 mb-8 text-base">
            Create your first invoice for a client project
          </p>
          <button className="bg-black text-white p-2 text-sm rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
            <FiPlus className="w-4 h-4" />
            Generate Innovation
          </button>
        </div>
    
    </div>
    </section>
  );
};

export default Innovation;
