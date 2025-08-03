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
        <p className="mt-1 text-lg">
          Freelancing Email: rjuarez@ondevsystem.com
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

        {/* Professional Summary */}
        <p className="mt-6 text-center italic">
          Full Stack Software Developer with 2+ years of experience designing, building, and deploying enterprise-grade applications across diverse environments, specializing in logistics and Warehouse Management Systems (WMS). Proven expertise in front-end and back-end development using modern frameworks such as React, Next.js, ASP.NET Core, and SQL Server, alongside hands-on experience with cloud and DevOps practices leveraging AWS, Azure, and Terraform. Demonstrated ability to independently manage end-to-end software delivery, optimize system performance, and maintain strong client relationships through effective communication and proactive problem-solving. Passionate about continually adopting emerging technologies and improving development processes for maximum efficiency and reliability.
        </p>
      </header>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">EDUCATION</h2>
        <p className="mb-1 font-medium">
          The University of Texas at San Antonio — Bachelor of Science, Computer Science
        </p>
        <p className="mb-1">GPA: 3.7</p>
        <p className="mb-1">Concentration: Software Engineering</p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">SKILLS</h2>
        <p className="mb-1">
          <span className="font-semibold">Languages & Frameworks:</span> C++ | C# | ASP.NET Core | .NET | React | Next.js | JavaScript | Python | jQuery | Java
        </p>
        <p className="mb-1">
          <span className="font-semibold">UI & Tools:</span> Material UI | ShadCN | Tailwind CSS | Cursor AI | Generative AI | Visual Studio | Git & GitHub | Postman | Axios | React Query | Redis & Redis Bloom | Hangfire | Seq & Serilog
        </p>
        <p className="mb-1">
          <span className="font-semibold">Cloud & DevOps:</span> AWS | Azure | Google Cloud | Oracle Cloud | Terraform | Ansible | Docker
        </p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">EXPERIENCE</h2>

        <article className="mb-6">
          <h3 className="text-xl font-bold">OP Computer Business Solutions — Full Stack Software Engineer</h3>
          <p className="italic mb-1">May 2024 – Present</p>
          <ul className="list-disc ml-6">
            <li>Developed APIs, designed intuitive UI, and created robust database schemas for primary enterprise systems, particularly a Warehouse Management System (WMS), enhancing operational efficiency across commercial trade applications.</li>
            <li>Implemented comprehensive Cyclic Inventory operations and reporting modules, alongside automated FIFO order processing via complex stored procedures.</li>
            <li>Designed Lot Pallet Number (LPN) management, direct order processing, repack handling, and dynamic ordering based on SKU and LPN criteria.</li>
            <li>Optimized system architecture for picking, sorting, and inbound/outbound logistics, reducing processing times by 20%.</li>
            <li>Built real-time cargo tracking monitors to visualize box lifecycles from warehouse entry through broker inspection, ensuring 100% visibility.</li>
            <li>Conduct weekly client meetings for requirements gathering, feature previews, and solution design, delivering accurate implementation plans and quotes.</li>
            <li>Remote deployment to private cloud environments; collaborate with DevOps for CI/CD, infrastructure monitoring, and troubleshooting.</li>
          </ul>
        </article>

        <article className="mb-6">
          <h3 className="text-xl font-bold">Rocket Labs Technologies — Full Stack Software Developer</h3>
          <p className="italic mb-1">Jan 2023 – June 2024</p>
          <ul className="list-disc ml-6">
            <li>Built scalable web applications using ASP.NET Core backends and Next.js/React frontends, ensuring maintainability and performance.</li>
            <li>Architected database schemas, API endpoints, and UI flows aligned with business requirements.</li>
            <li>Led small teams in feature development, technology selection, and code reviews.</li>
            <li>Managed projects end-to-end in a startup environment, from requirements to deployment.</li>
          </ul>
        </article>

        <article className="mb-6">
          <h3 className="text-xl font-bold">H‑E‑B Digital — Co-op Software Engineer</h3>
          <p className="italic mb-1">Aug 2022 – Dec 2022</p>
          <ul className="list-disc ml-6">
            <li>Developed a unified OneLogin authentication app with Flask & React, integrating SAML and OAuth protocols.</li>
            <li>Participated in Agile sprints and automated CI/CD pipelines using GitLab.</li>
          </ul>
        </article>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">PROJECTS</h2>
        <article className="mb-6">
          <h3 className="text-xl font-bold">Enterprise Logistics Monitoring System</h3>
          <ul className="list-disc ml-6">
            <li>Real-time monitoring dashboard providing analytics on shipping and warehouse operations.</li>
            <li>Integrated live data streams to optimize supply chain processes.</li>
          </ul>
        </article>
        <article className="mb-6">
          <h3 className="text-xl font-bold">Document Storage System (ERP)</h3>
          <ul className="list-disc ml-6">
            <li>Secure PDF storage platform with web-based authentication; deployed on AWS.</li>
            <li>Automated MySQL data sync via cron jobs for timely updates.</li>
          </ul>
        </article>
        <article className="mb-6">
          <h3 className="text-xl font-bold">User Authentication Dashboard</h3>
          <ul className="list-disc ml-6">
            <li>Multi-protocol auth dashboard (SAML, OAuth) built with React & Flask.</li>
            <li>Optimized backend performance to reduce authentication latency by 30%.</li>
          </ul>
        </article>
      </section>

      {/* Footer */}
      <footer className="mt-8 text-center text-sm text-gray-600">
        <p>
          <a
            href="https://www.linkedin.com/in/roberto-juárez-b0b76a225/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          {' | '}
          <a
            href="https://github.com/robertojuarezjose"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Resume;
