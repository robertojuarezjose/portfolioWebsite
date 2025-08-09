"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/lib/resume-data';

const Resume = () => {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-16">
      {/* Header */}
      <motion.header
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          {resumeData.name}
        </h1>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          {resumeData.contact.location} | {resumeData.contact.phone} |{' '}
          <a href={`mailto:${resumeData.contact.emails[0].value}`} className="text-blue-500 hover:underline">
            {resumeData.contact.emails[0].value}
          </a>
        </p>
        {resumeData.contact.emails[1] && (
          <p className="mt-1 text-lg text-gray-700 dark:text-gray-300">
            {resumeData.contact.emails[1].label} Email:{' '}
            <a href={`mailto:${resumeData.contact.emails[1].value}`} className="text-blue-500 hover:underline">
              {resumeData.contact.emails[1].value}
            </a>
          </p>
        )}
        <div className="mt-4 flex justify-center space-x-6">
          <a href={resumeData.resumePdfPath} download>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Download PDF
            </Button>
          </a>
          {resumeData.contact.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
              <Button size="default" className="border border-blue-600 text-blue-600 hover:bg-blue-50">
                {l.label}
              </Button>
            </a>
          ))}
        </div>
      </motion.header>

      {/* Professional Summary */}
      <motion.section
        className="prose prose-lg mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="italic text-gray-600 dark:text-gray-400">{resumeData.summary}</p>
      </motion.section>

      {/* Education & Skills */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <section>
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          {resumeData.education.map((e) => (
            <div key={e.institution} className="mb-2">
              <p className="font-medium">{e.institution}</p>
              <p>{e.degree}</p>
              {e.details && <p>{e.details}</p>}
            </div>
          ))}
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            {resumeData.skills.map((s) => (
              <li key={s.label}>
                <strong>{s.label}:</strong> {s.items.join(', ')}
              </li>
            ))}
          </ul>
        </section>
      </motion.div>

      {/* Experience */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Experience</h2>
        <div className="space-y-8">
          {resumeData.experience.map((exp) => (
            <article key={`${exp.company}-${exp.role}`} className="space-y-2">
              <h3 className="text-xl font-bold">
                {exp.company} — {exp.role}
              </h3>
              <p className="italic text-gray-600">{exp.period}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Select Projects</h2>
        <div className="space-y-6">
          {resumeData.projects.map((p) => (
            <article key={p.title}>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{p.description}</p>
            </article>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Jose Roberto Juarez</p>
      </footer>
    </main>
  );
};

export default Resume;