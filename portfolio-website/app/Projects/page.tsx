"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// Update the import path below to the correct location if different
import { Input } from "../../components/ui/input";
import { Button } from "@/components/ui/button";

const projects = [
  { Name: "Verification Cargo System", Description: "Verifies cargo goes out with the correct truck and driver.", Url: "", Date_Created: "2023-09-27", Owner: "Rocket Labs Technologies / Buckland" },
  { Name: "Store Ecommerce & Inventory System", Description: "A real-time reporting and inventory management platform.", Url: "", Date_Created: "2023-02-13", Owner: "Rocket Labs Technologies" },
  { Name: "Slam Distribution", Description: "Warehouse management system for Slam Distribution.", Url: "", Date_Created: "2024-07-14", Owner: "Op Computer Business Solutions / Shared System" },
  { Name: "Single Sign On & Authentication", Description: "SSO and authentication suite for H‑E‑B.", Url: "", Date_Created: "2022-11-20", Owner: "H‑E‑B Digital" },
  { Name: "First Cash Lock Detection", Description: "Solution to detect lock‑screen methodologies for First Cash.", Url: "", Date_Created: "2023-05-22", Owner: "Rocket Labs Technologies" },
  { Name: "Airport Monitor", Description: "Real-time dashboard displaying the live status of cargo boxes.", Url: "https://medium.com/@robertojuarezjose/real-time-dasboard-displaying-the-live-status-of-cargo-boxes-from-warehouse-arrival-through-13cc2893cb13", Date_Created: "2025-07-24", Owner: "Op Computer Business Solutions / SR Forwarding / Laredo Cold Services" },
  { Name: "Logistics Management System & Monitor", Description: "Integrated logistics platform for cargo traffic tracking, document uploads, and order preparation.", Url: "", Date_Created: "2023-05-22", Owner: "Op Computer Business Solutions / RXO Logistics" },
  { Name: "Monitor de Colores", Description: "Visual time-tracking monitor for each step in the cargo handling process.", Url: "", Date_Created: "2023-05-22", Owner: "Op Computer Business Solutions / SR Forwarding / Laredo Cold Services" },
  { Name: "Monitor de Trazabilidad", Description: "Tracks time and documentation status per traffic reference with interactive upload and event marking.", Url: "", Date_Created: "2025-03-03", Owner: "Op Computer Business Solutions / American Export" },
];

export default function Projects() {
  const [search, setSearch] = useState("");
  const filtered = projects.filter(
    (p) =>
      p.Name.toLowerCase().includes(search.toLowerCase()) ||
      p.Description.toLowerCase().includes(search.toLowerCase()) ||
      p.Owner.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="px-6 py-10 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A selection of systems and tools I’ve architected and shipped.
        </p>
      </motion.div>

      {/* Search Input */}
      <div className="max-w-md mx-auto mb-8">
        <Input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                {project.Name}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.Description}
              </p>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Owner:</strong> {project.Owner}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <strong>Created:</strong>{' '}
                {new Date(project.Date_Created).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
              {project.Url && (
                <Link href={project.Url} target="_blank">
                  <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                    View Link
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
            No projects found.
          </p>
        )}
      </div>
    </main>
  );
}
