"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow text-center px-6 text-black dark:text-white min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {/* Hero Section */}
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          Hello, I&apos;m Roberto Juárez
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I build modern web applications using Next.js, TypeScript, Tailwind CSS, ASP.NET Core, and more.
        </motion.p>
      </motion.div>

      {/* Hero Illustration */}
      <motion.div
        className="mb-8 w-full max-w-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <Image
          src="/hero-illustration.png"
          alt="Developer at work"
          width={500}
          height={300}
          className="mx-auto"
        />
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Button
          size="lg"
          className="bg-white text-blue-950 font-bold hover:bg-gray-200"
          onClick={() => redirect("/About-Me")}
        >
          About Me
        </Button>
        <Button
          size="lg"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold"
          onClick={() => redirect("/Projects")}
        >
          View Projects
        </Button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="mt-12"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="block w-3 h-3 bg-blue-600 dark:bg-indigo-300 rounded-full mx-auto mb-1"></span>
        <p className="text-sm text-gray-500 dark:text-gray-400">Scroll down</p>
      </motion.div>
    </main>
  );
}
