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

} from "@/components/dialog/DialogComponents"; // Adjust import path if needed

export default function About() {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center text-black">
            {/* Profile Image */}
            <motion.div
                className="mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src="/profile.jpeg"
                    alt="Profile Picture"
                    width={150}
                    height={150}
                    className="rounded-full shadow-lg"
                />
            </motion.div>

            {/* About Me Text */}
            <motion.h1
                className="text-4xl font-bold mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                About Me
            </motion.h1>
            <p className="text-lg text-gray-700 max-w-2xl mb-6">
                Full Stack Software Developer with experience in implementing and deploying enterprise applications across diverse environments, including AI assistant and prompt engineering. Proven expertise in leading the development of custom, complex systems and web applications leveraging React, ASP.NET Core, Electron, Next.js, and modern UI frameworks. Currently specializing in Cloud and DevOps to drive infrastructure modernization initiatives, adeptly utilizing AWS, Azure, Google Cloud, and Oracle Cloud platforms.
                <br /><br />
                In my current role as a Full Stack Software Engineer at OP Computer Business Solutions, I develop APIs, UIs, and database schemas for enterprise logistics and WMS, focusing on efficiency and automation. Previously, at Rocket Labs Technologies, I led teams and managed the full project lifecycle for scalable web applications using ASP.NET Core and Next.js/React. I also have experience as a Co-op Software Engineer at H-E-B Digital, where I built authentication systems and automated deployments.
            </p>

            {/* Contact Me Button */}
            <motion.div
                className="mt-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Button
                    size="lg"
                    onClick={() => setOpen(true)}
                    className="bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg"
                >
                    Contact Me
                </Button>
            </motion.div>

            {/* Contact Modal */}
            <Dialog open={open} onClose={setOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Contact Information</DialogTitle>
                        <DialogDescription className="text-left">
                            <p>
                                <strong>Name:</strong> Jose Roberto Juarez
                            </p>
                            <p>
                                <strong>Location:</strong> Laredo, Texas
                            </p>
                            <p>
                                <strong>Phone:</strong> (956) 955-0163
                            </p>
                            <p>
                                <strong>Email:</strong> robertojuarezjose90@gmail.com
                            </p>
                            <p>
                                <strong>LinkedIn:</strong>{" "}
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
                                <strong>GitHub:</strong>{" "}
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
                            className="bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Close
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
