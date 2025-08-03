"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/dialog/DialogComponents";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Profile Image */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/profile.jpeg"
          alt="Jose Roberto Juarez"
          width={160}
          height={160}
          className="rounded-full shadow-xl"
        />
      </motion.div>

      {/* Introduction */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Jose Roberto Juarez
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Full Stack Software Developer with 2+ years of experience building enterprise-grade applications, specializing in logistics and Warehouse Management Systems (WMS). Skilled in both frontend and backend technologies, including ASP.NET Core, React, Next.js, and SQL Server, and experienced in cloud and DevOps practices using AWS, Azure, and Terraform.
      </motion.p>

      {/* Details */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Experience</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li>
              <strong>OP Computer Business Solutions</strong> — Full Stack Software Engineer (May 2024–Present): Developed APIs, UIs, and database schemas for a WMS, automated FIFO order processing, and built real-time cargo tracking monitors.
            </li>
            <li>
              <strong>Rocket Labs Technologies</strong> — Software Developer (Jan 2023–Jun 2024): Led feature development on ASP.NET Core and Next.js/React projects, architected data models and API flows, and managed small teams.
            </li>
            <li>
              <strong>H-E-B Digital</strong> — Co-op Software Engineer (Aug–Dec 2022): Created a secure OneLogin authentication portal with Flask and React, and implemented CI/CD pipelines.
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Skills</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Languages & Frameworks:</strong> C#, ASP.NET Core, React, Next.js, JavaScript, TypeScript, Python, C++</li>
            <li><strong>UI & Tools:</strong> Tailwind CSS, Material UI, ShadCN, Framer Motion, Git, Postman, Axios, React Query</li>
            <li><strong>Cloud & DevOps:</strong> AWS, Azure, Google Cloud, Terraform, Docker, Hangfire, Redis</li>
          </ul>
        </div>
      </motion.div>

      {/* Contact Button */}
      <motion.div
        className="mb-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Button
          size="lg"
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white hover:bg-blue-700 shadow-md"
        >
          Contact Me
        </Button>
      </motion.div>

      {/* Contact Modal */}
      <Dialog open={open} onClose={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Get in Touch</DialogTitle>
            <DialogDescription className="text-left">
              <p><strong>Name:</strong> Jose Roberto Juarez</p>
              <p><strong>Location:</strong> Laredo, Texas</p>
              <p><strong>Phone:</strong> (956) 955-0163</p>
              <p><strong>Email:</strong> robertojuarezjose90@gmail.com</p>
              <p>
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/roberto-juárez-b0b76a225/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Profile
                </a>
              </p>
              <p>
                <strong>GitHub:</strong>{' '}
                <a
                  href="https://github.com/robertojuarezjose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  robertojuarezjose
                </a>
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex justify-end">
            <Button
              onClick={() => setOpen(false)}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
