"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {redirect} from "next/navigation";

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center flex-grow text-center px-6 text-black dark:text-white min-h-[calc(100vh-4rem)]">
                <motion.h1
                    className="text-5xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Welcome to My Website
                </motion.h1>
                <p className="text-lg text-gray-500 dark:text-gray-300 max-w-xl">
                    I am a passionate developer building modern web applications with Next.js, TypeScript, Tailwind CSS, Asp.Net Core, and more.
                </p>

                {/* Call to Action */}
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Button size="lg" className="bg-white text-blue-950 font-bold hover:bg-gray-200" onClick={() => redirect("/About-Me")}>
                        Get Started
                    </Button>
                </motion.div>
            </div>

        </>
    );
}
