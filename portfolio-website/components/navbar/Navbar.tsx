import React from 'react';
import Container from "@/components/global/Container";
import NavLinks from "@/components/navbar/NavLinks";
import DarkMode from "@/components/navbar/DarkMode";

function Navbar() {
    return (

        <div className='border-b'>
            <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8'>
                <DarkMode></DarkMode>

                <h1 className="text-2xl font-bold">My Portfolio</h1>

                <NavLinks />

            </Container>


        </div>

    );
}

export default Navbar;