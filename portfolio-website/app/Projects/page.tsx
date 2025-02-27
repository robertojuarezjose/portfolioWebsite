"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const projects = [
    {
        "Name": "AI Assistant",
        "Description": "An AI-powered virtual assistant.",
        "Url": "https://example.com/ai-assistant",
        "Date_Created": "2024-05-27",
        "Tech_Stack": ["Next.js", "TypeScript", "Tailwind CSS"],
        "Owner": "Jose Roberto Juarez"
    },
    {
        "Name": "Crypto Tracker",
        "Description": "A real-time cryptocurrency tracking app.",
        "Url": "https://example.com/crypto-tracker",
        "Date_Created": "2023-09-13",
        "Tech_Stack": ["React", "Node.js", "MongoDB"],
        "Owner": "Jose Roberto Juarez"
    },
    {
        "Name": "E-Learning Platform",
        "Description": "A modern e-learning platform for courses.",
        "Url": "https://example.com/e-learning-platform",
        "Date_Created": "2024-08-28",
        "Tech_Stack": ["Python", "Django", "PostgreSQL"],
        "Owner": "Jose Roberto Juarez"
    },
    {
        "Name": "Weather App",
        "Description": "A weather forecasting app with AI.",
        "Url": "https://example.com/weather-app",
        "Date_Created": "2024-11-20",
        "Tech_Stack": ["Vue.js", "Firebase", "Chart.js"],
        "Owner": "Jose Roberto Juarez"
    },
    {
        "Name": "Fitness Tracker",
        "Description": "A fitness tracking app with smart analytics.",
        "Url": "https://example.com/fitness-tracker",
        "Date_Created": "2023-11-29",
        "Tech_Stack": ["Flutter", "Dart", "Firebase"],
        "Owner": "Jose Roberto Juarez"
    },
    {
        "Name": "Expense Manager",
        "Description": "An expense manager with budget planning.",
        "Url": "https://example.com/expense-manager",
        "Date_Created": "2024-05-16",
        "Tech_Stack": ["Swift", "Kotlin", "Firebase"],
        "Owner": "Jose Roberto Juarez"
    }
];

const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    // Get current projects based on page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <section className="p-6">
            <Table>
                <TableCaption>
                    Total Projects: {projects.length}
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Tech Stack</TableHead>
                        <TableHead>Date Created</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Link</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentProjects.map((project, index) => (
                        <TableRow key={index}>
                            <TableCell>{project.Name}</TableCell>
                            <TableCell>{project.Description}</TableCell>
                            <TableCell>{project.Tech_Stack.join(", ")}</TableCell>
                            <TableCell>{project.Date_Created}</TableCell>
                            <TableCell>{project.Owner}</TableCell>
                            <TableCell>
                                <Link href={project.Url} target="_blank" className="text-blue-600 underline">
                                    Visit
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Pagination Buttons */}
            <div className="flex justify-center mt-4 space-x-4">
                <Button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="border border-gray-500 px-4 py-2"
                >
                    Previous
                </Button>
                <span className="text-lg font-medium">{currentPage} / {totalPages}</span>
                <Button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="border border-gray-500 px-4 py-2"
                >
                    Next
                </Button>
            </div>
        </section>
    );
};

export default Page;
