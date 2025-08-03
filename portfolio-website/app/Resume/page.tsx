"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

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
          JOSE ROBERTO JUAREZ
        </h1>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          Laredo, Texas | (956) 955-0163 |{' '}
          <a href="mailto:robertojuarezjose90@gmail.com" className="text-blue-500 hover:underline">
            robertojuarezjose90@gmail.com
          </a>
        </p>
        <p className="mt-1 text-lg text-gray-700 dark:text-gray-300">
          Freelancing Email:{' '}
          <a href="mailto:rjuarez@ondevsystem.com" className="text-blue-500 hover:underline">
            rjuarez@ondevsystem.com
          </a>
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="/RobertoJuarez_Resume.pdf" download>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Download PDF
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/roberto-juárez-b0b76a225/" target="_blank" rel="noopener noreferrer">
            <Button size="default" className="border border-blue-600 text-blue-600 hover:bg-blue-50">
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/robertojuarezjose" target="_blank" rel="noopener noreferrer">
            <Button size="default" className="border border-gray-600 text-gray-600 hover:bg-gray-100">
              GitHub
            </Button>
          </a>
        </div>
      </motion.header>

      {/* Professional Summary */}
      <motion.section
        className="prose prose-lg mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="italic text-gray-600 dark:text-gray-400">
          Full Stack Software Developer with 2+ years of experience designing, building, and deploying enterprise-grade applications across diverse environments, specializing in logistics and Warehouse Management Systems (WMS). Proven expertise in front-end and back-end development using React, Next.js, ASP.NET Core, and SQL Server, with hands-on cloud and DevOps experience on AWS, Azure, and Terraform.
        </p>
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
          <p className="font-medium">The University of Texas at San Antonio</p>
          <p>Bachelor of Science, Computer Science (GPA: 3.7)</p>
          <p>Concentration: Software Engineering</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li><strong>Languages & Frameworks:</strong> C++, C#, ASP.NET Core, React, Next.js, JavaScript, TypeScript, Python, Java</li>
            <li><strong>UI & Tools:</strong> Tailwind CSS, Material UI, ShadCN, Framer Motion, Git, Postman, Axios, React Query</li>
            <li><strong>Cloud & DevOps:</strong> AWS, Azure, Google Cloud, Oracle Cloud, Terraform, Docker, Ansible, Redis</li>
          </ul>
        </section>
      </motion.div>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Experience</h2>
        <div className="space-y-8">
          {/* OP CBS */}
          <article className="space-y-2">
            <h3 className="text-xl font-bold">OP Computer Business Solutions — Full Stack Software Engineer</h3>
            <p className="italic text-gray-600">May 2024 – Present</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Developed robust APIs, intuitive UIs, and scalable database schemas for a Warehouse Management System, improving processing speed by 20%.</li>
              <li>Implemented cyclic inventory modules and FIFO order automation via advanced stored procedures.</li>
              <li>Built real-time cargo tracking dashboards, achieving 100% visibility from warehouse entry to broker inspection.</li>
            </ul>
          </article>
          {/* Rocket Labs */}
          <article className="space-y-2">
            <h3 className="text-xl font-bold">Rocket Labs Technologies — Software Developer</h3>
            <p className="italic text-gray-600">Jan 2023 – Jun 2024</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Architected full-stack solutions using ASP.NET Core backends and Next.js/React frontends.</li>
              <li>Led cross-functional teams, defined API contracts, and optimized database performance.</li>
            </ul>
          </article>
          {/* H-E-B Digital */}
          <article className="space-y-2">
            <h3 className="text-xl font-bold">H-E-B Digital — Co-op Software Engineer</h3>
            <p className="italic text-gray-600">Aug 2022 – Dec 2022</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Developed a unified SAML & OAuth OneLogin portal using Flask and React.</li>
              <li>Automated CI/CD workflows in GitLab, reducing deployment times by 30%.</li>
            </ul>
          </article>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Select Projects</h2>
        <div className="space-y-6">
          <article>
            <h3 className="text-lg font-bold">Enterprise Logistics Monitoring System</h3>
            <p className="text-gray-700 dark:text-gray-300">Real-time analytics dashboard for shipping and warehouse operations integration.</p>
          </article>
          <article>
            <h3 className="text-lg font-bold">Document Storage System (ERP)</h3>
            <p className="text-gray-700 dark:text-gray-300">Secure PDF storage with AWS deployment and automated MySQL syncing.</p>
          </article>
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