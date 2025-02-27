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
                {/* Download Button */}
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
                <p>
                    <span className="font-semibold">Programming Languages and Technologies:</span> Next.js, TypeScript, Tailwind, React, Shadcn, Redux, TanStack Query, Axios, Java, Spring Boot, C#, Asp.Net, JavaScript, Python, Docker, Kubernetes, MySQL, GitHub, DevOps, Linux, Bash/Python Scripts, MongoDB, GitOps, Maven, jQuery, Unit Testing, Cypress, CI/CD, dbDecrypt, Remote Desktop.
                </p>
            </section>

            {/* Experience */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">EXPERIENCE</h2>

                <article className="mb-6">
                    <h3 className="text-xl font-bold">OP Computer Business Solutions – Full Stack Software Engineer</h3>
                    <p className="italic mb-1">May 2024 – Present</p>
                    <ul className="list-disc ml-6">
                        <li>
                            Software Analysis, Design, & Development to build and maintain components of an Enterprise Control System such as an international trades system or WMS.
                        </li>
                        <li>
                            Developed full stack high performance features including design, testing, deployment, and maintenance. Administered databases, wrote stored procedures, synchronized dev-databases with production databases, and provided complex query solutions.
                        </li>
                        <li>
                            Provided customer software support remotely, updated real-time systems on remote servers, and developed system migration strategies for seamless integration.
                        </li>
                        <li>
                            Conducted weekly meetings with stakeholders to discuss project status, updates, and feature implementations, and provided detailed Excel reports outlining progress and upcoming tasks.
                        </li>
                    </ul>
                    <p className="mt-2">
                        <span className="font-semibold">Tech stack:</span> C#, Asp.Net, MySQL, NOSQL, MongoDB, JavaScript, jQuery, Ajax, Bootstrap, Python, Django, GitHub.
                    </p>
                </article>

                <article className="mb-6">
                    <h3 className="text-xl font-bold">Rocket Labs Technologies – Software Developer (By Contract)</h3>
                    <p className="italic mb-1">Jan 2023 – Present</p>
                    <ul className="list-disc ml-6">
                        <li>
                            Designed, developed, and implemented new features on both small and large scale system applications, enhancing functionality and user experience.
                        </li>
                        <li>
                            Identified and resolved software bugs through thorough debugging and testing, ensuring high-quality deliverables and optimal performance.
                        </li>
                        <li>
                            Collaborated with cross-functional teams to gather requirements and translate them into technical specifications, driving project success.
                        </li>
                    </ul>
                    <p className="mt-2">
                        <span className="font-semibold">Tech stack:</span> Next.js, TypeScript, Shadcn, React, TanStack Query, Axios, MySQL, JavaScript, Java Spring Boot, GitHub.
                    </p>
                </article>

                <article className="mb-6">
                    <h3 className="text-xl font-bold">H-E-B Digital – Co-op Student Software Engineer</h3>
                    <p className="italic mb-1">Aug 2022 – Dec 2022</p>
                    <ul className="list-disc ml-6">
                        <li>
                            Collaborated with software engineers to build a unified OneLogin and authentication web application using Flask and React.
                        </li>
                        <li>
                            Participated in a two-week sprint cycle guided by a Scrum Master, enhancing teamwork and project management skills within an Agile framework.
                        </li>
                        <li>
                            Designed and developed a user-friendly landing page, integrating it with SAML authentication via OneLogin to enhance security and user experience.
                        </li>
                        <li>
                            Leveraged GitLab CI/CD for automated testing and deployment, improving code quality and efficiency.
                        </li>
                    </ul>
                    <p className="mt-2">
                        <span className="font-semibold">Tech stack:</span> Flask-Python, React-JavaScript, Docker, GitLab CI/CD.
                    </p>
                </article>
            </section>

            {/* Projects */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">PROJECTS</h2>
                <article>
                    <h3 className="text-xl font-bold">Document Storage System: ERP System</h3>
                    <ul className="list-disc ml-6">
                        <li>
                            Developed a secure Document Storage System enabling the receipt, storage, and management of PDF files through web authentication.
                        </li>
                        <li>
                            Deployed a web server on AWS, controlled from a local terminal, ensuring reliable performance.
                        </li>
                        <li>
                            Utilized cron jobs for API communication to automate data retrieval and storage in a MySQL database.
                        </li>
                    </ul>
                    <p className="mt-2">
                        <span className="font-semibold">Tech stack:</span> PHP, MySQL, JavaScript, AWS, DevOps.
                    </p>
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
