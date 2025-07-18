import React from 'react';

const Resume = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">JOSE ROBERTO JUAREZ</h1>
                <p className="mt-2 text-lg">
                    Laredo, Texas | (956) 955-0163 | robertojuarezjose90@gmail.com
                </p>
                <div className="mt-2">
                    <a
                        href="https://www.linkedin.com/in/roberto-juárez-b0b76a225/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline mr-4"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/robertojuarezjose"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        GitHub
                    </a>
                </div>
                <div className="mt-2">
                    <a
                        href="https://portfolio-website-swart-tau.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline mr-4"
                    >
                        Website
                    </a>
                    <a
                        href="https://robertojuarezjose.medium.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Portfolio
                    </a>
                </div>
                <div className="mt-4">
                    <a
                        href="/RobertoJuarez_Resume.pdf"
                        download
                        className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Download Resume
                    </a>
                </div>
            </header>

            {/* Education */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">EDUCATION</h2>
                <p className="mb-1 font-medium">
                    The University of Texas at San Antonio - Bachelor of Science, Computer Science
                </p>
                <p className="mb-1">Concentration: Software Engineering</p>
                <p className="mb-1">
                    <span className="font-semibold">GPA:</span> 3.7
                </p>
            </section>

            {/* Skills */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">SKILLS</h2>
                <p className="mb-1"><span className="font-semibold">Languages & Frameworks:</span> C#, ASP.NET Core, React, Next.js, JavaScript, Python, JQuery</p>
                <p className="mb-1"><span className="font-semibold">UI & Tools:</span> Material UI, ShadCN, Tailwind CSS, Cursor AI, Visual Studio, Git & GitHub, Postman, Axios, React Query, ChatGPT, Redis & Redis Bloom, Hangfire, Seq & serilog</p>
                <p className="mb-1"><span className="font-semibold">Cloud & DevOps:</span> AWS, Azure, Google Cloud, Oracle Cloud, Terraform, Ansible, Docker</p>
            </section>

            {/* Experience */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">EXPERIENCE</h2>
                <article className="mb-6">
                    <h3 className="text-xl font-bold">OP Computer Business Solutions – Full Stack Software Engineer</h3>
                    <p className="italic mb-1">May 2024 – Present</p>
                    <ul className="list-disc ml-6">
                        <li>Developed APIs, UI, and designed database schemas for enterprise logistics and Warehouse Management Systems (WMS), significantly enhancing efficiency in commercial trade operations with a primary focus on WMS functionalities.</li>
                        <li>Implemented comprehensive Cyclic Inventory operations and reporting modules, alongside automated order processing using FIFO methodology using complex stored procedures.</li>
                        <li>Designed and developed critical system features, including Lot Pallet Number (LPN) management, direct order processing, repack order handling, and dynamic ordering based on SKU and LPN criteria.</li>
                        <li>Optimized the original system architecture to introduce enhanced functionalities, significantly improving core operational capabilities such as picking, sorting, inbound, and outbound logistics.</li>
                        <li>Streamlined departure scanning operations for LPN, boosting accuracy and reducing processing time.</li>
                        <li>Built several monitoring tools to track cargo box statuses, ensuring continuous visibility from warehouse entry through broker inspection, thus maintaining complete lifecycle management using advanced javascript strategies along with APIs for data fetching.</li>
                        <li>Contributed to developing monitors for tracking document processing workflows, ensuring efficient and transparent documentation handling.</li>
                        <li>Deployed projects remotely to a private cloud environment.</li>
                    </ul>
                </article>
                <article className="mb-6">
                    <h3 className="text-xl font-bold">Rocket Labs Technologies – Software Developer</h3>
                    <p className="italic mb-1">Jan 2023 – Nov 2024</p>
                    <ul className="list-disc ml-6">
                        <li>Designed and developed scalable web applications using ASP.NET Core for backend services and Next.js/React for frontend development, ensuring robust performance and maintainability.</li>
                        <li>Architected database schemas, API endpoints, application flowcharts, and user interfaces, aligning technical implementations closely with business objectives.</li>
                        <li>Led project teams of 1-3 developers, overseeing major feature implementations, technical decisions, and overall technology stack selections.</li>
                        <li>Managed complete project lifecycle in a startup environment, including requirements gathering, technology evaluation, cost analysis, full-stack development, and deployment.</li>
                    </ul>
                </article>
                <article className="mb-6">
                    <h3 className="text-xl font-bold">H-E-B Digital – Co-op Software Engineer</h3>
                    <p className="italic mb-1">Aug 2022 – Dec 2022</p>
                    <ul className="list-disc ml-6">
                        <li>Developed a unified OneLogin authentication application using Flask and React, enhancing security and user accessibility.</li>
                        <li>Actively participated in Agile sprints, collaborating with team members and a Scrum Master to meet project deadlines.</li>
                        <li>Designed and integrated a secure landing page with SAML authentication, ensuring a seamless user experience.</li>
                        <li>Utilized GitLab CI/CD pipelines to automate testing and deployment, reducing development cycle time.</li>
                    </ul>
                </article>
            </section>

            {/* Projects */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">PROJECTS</h2>
                <article className="mb-6">
                    <h3 className="text-xl font-bold">Enterprise Logistics Monitoring System</h3>
                    <ul className="list-disc ml-6">
                        <li>Developed a real-time logistics monitoring platform that provides analytics on shipping, warehouse operations, and trade compliance.</li>
                        <li>Integrated live data tracking with warehouse management tools to optimize supply chain operations.</li>
                        <li>Tech Stack: ASP.NET, C#, MySQL, MongoDB, jQuery, JavaScript</li>
                    </ul>
                </article>
                <article className="mb-6">
                    <h3 className="text-xl font-bold">Document Storage System (ERP System)</h3>
                    <ul className="list-disc ml-6">
                        <li>Built a secure, scalable document storage platform for managing PDF files, integrated with robust web-based authentication.</li>
                        <li>Deployed the application on AWS and managed performance through DevOps best practices.</li>
                        <li>Automated data retrieval and storage processes using cron jobs, ensuring timely updates to a MySQL database.</li>
                        <li>Tech Stack: PHP, MySQL, JavaScript, AWS, DevOps</li>
                    </ul>
                </article>
                <article className="mb-6">
                    <h3 className="text-xl font-bold">User Authentication Dashboard</h3>
                    <ul className="list-disc ml-6">
                        <li>Created a multi-functional authentication dashboard with React and Flask, supporting SAML and OAuth protocols.</li>
                        <li>Optimized backend API performance, reducing authentication time by 30%.</li>
                        <li>Implemented role-based access controls for enhanced security and user management.</li>
                        <li>Tech Stack: React, Flask, Docker, GitHub, MySQL</li>
                    </ul>
                </article>
            </section>

            {/* Footer / Social Links */}
            <footer className="mt-8 text-center text-sm text-gray-600">
                <p>
                    LinkedIn:{' '}
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
                    GitHub:{' '}
                    <a
                        href="https://github.com/robertojuarezjose"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        robertojuarezjose
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default Resume;
