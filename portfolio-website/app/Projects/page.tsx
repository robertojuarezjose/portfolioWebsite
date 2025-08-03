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
        "Date_Created": "2023-09-27",
        "Owner": "Rocket Labs Technologies / Buckland "
    },
    {
        "Name": "Store ecommerce and inventory management system",
        "Description": "A real-time reports and inventory management system.",
        "Url": "",
        "Date_Created": "2023-02-13",
        "Owner": "Rocket Labs Technologies"
    },
    {
        "Name": "Slam Distribution",
        "Description": "Slam distribution warehouse management system.",
        "Url": "",
        "Date_Created": "2024-07-14",
        "Owner": "Op Computer business Solutions / Shared System"
    },
    {
        "Name": "Single Sign on and Authentication",
        "Description": "Single sign on and authentication for the application suite for Heb",
        "Url": "",
        "Date_Created": "2022-11-20",
        "Owner": "HEB Digital"
    },
    {
        "Name": "First Cash",
        "Description": "A solution to detect locking technology for First Cash.",
        "Url": "",
        "Date_Created": "2023-05-22",
        "Owner": "Rocket Labs Technologies"
    },
    {
        "Name": "Airpot Monitor",
        "Description": "Airpot like monitor for real-time Dashboards displaying the live status of cargo boxes",
        "Url": "https://medium.com/@robertojuarezjose/real-time-dasboard-displaying-the-live-status-of-cargo-boxes-from-warehouse-arrival-through-13cc2893cb13",
        "Date_Created": "2025-07-24",
        "Owner": "Op Computer business Solutions / SR Fowarding / Laredo Cold Services",
    },
    {
        "Name": "Logistics Management System & monitor",
        "Description": "This is a logistics system thats connected to a traffic and order system. It helps monitor incoming and outgoing cargo, upload/download documents, and prepare traffic data to be set before arrival. ",
        "Url": "",
        "Date_Created": "2023-05-22",
        "Owner": "Op Computer business Solutions / RXO Logistics"
    },
    {
        "Name": "Monitor de Colores",
        "Description": "this monitor helps visual the times of each step in the process of cargo management.",
        "Url": "",
        "Date_Created": "2023-05-22",
        "Owner": "Op Computer business Solutions / SR Fowarding / Laredo Cold Services"
    },
    {
        "Name": "Monitor de Trazabilidad",
        "Description": "this monitor helps visual the time of each traffic reference and the required documents that have been uploaded for each reference. The table has interactive buttons to upload documents and mark events of each traffic reference.",
        "Url": "",
        "Date_Created": "2025-03-03",
        "Owner": "Op Computer business Solutions / American Export"
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
