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
import { resumeData } from "@/lib/resume-data";

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
        Full Stack Software Engineer
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {resumeData.summary}
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
            {resumeData.experience.map((exp) => (
              <li key={`${exp.company}-${exp.role}`}>
                <strong>{exp.company}</strong> — {exp.role} ({exp.period}): {exp.bullets[0]}
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Skills</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            {resumeData.skills.map((cat) => (
              <li key={cat.label}>
                <strong>{cat.label}:</strong> {cat.items.join(", ")}
              </li>
            ))}
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
              <p><strong>Name:</strong> {resumeData.name}</p>
              <p><strong>Location:</strong> {resumeData.contact.location}</p>
              <p><strong>Phone:</strong> {resumeData.contact.phone}</p>
              <p>
                <strong>Email:</strong>{" "}
                <a className="text-blue-500 hover:underline" href={`mailto:${resumeData.contact.emails[0].value}`}>
                  {resumeData.contact.emails[0].value}
                </a>
              </p>
              {resumeData.contact.links.map((l) => {
                const display = l.label === 'GitHub'
                  ? 'robertojuarezjose'
                  : l.label === 'Website'
                  ? 'robertojuarezjose.com'
                  : 'Profile';
                return (
                  <p key={l.href}>
                    <strong>{l.label}:</strong>{" "}
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {display}
                    </a>
                  </p>
                );
              })}
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
