"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const projects = [
    {
        "Name": "Verification Cargo System",
        "Description": "Verifies cargo goes out with the correct truck and driver.",
        "Url": "",
        "Date_Created": "2024-11-27",
        "Tech_Stack": ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "prisma"],
        "Owner": "Jose Roberto Juarez"
    },
    {
        "Name": "Store ecommerce and inventory management system",
        "Description": "A real-time reports and inventory management system.",
        "Url": "",
        "Date_Created": "2023-08-13",
        "Tech_Stack": ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "prisma"],
        "Owner": "Jose Roberto Juarez"
    },
    {
        "Name": "Warehouse Management System",
        "Description": "Slam distribution warehouse management system.",
        "Url": "",
        "Date_Created": "2024-06-14",
        "Tech_Stack": ["Jquery", "C# .Net", "Sql Server"],
        "Owner": "Op Computer business Solutions"
    },
    {
        "Name": "Single Sign on and Authentication",
        "Description": "Single sign on and authentication for the application suite for Heb",
        "Url": "",
        "Date_Created": "2022-11-20",
        "Tech_Stack": ["React.js", "Flask"],
        "Owner": "HEB Digital"
    },

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
                        {/*<TableHead>Link</TableHead>*/}
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
                            {/*<TableCell>*/}
                            {/*    <Link href={project.Url} target="_blank" className="text-blue-600 underline">*/}
                            {/*        Visit*/}
                            {/*    </Link>*/}
                            {/*</TableCell>*/}
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
