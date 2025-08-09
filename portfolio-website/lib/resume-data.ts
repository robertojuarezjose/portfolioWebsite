export type ResumeLink = {
  label: string;
  href: string;
};

export type ResumeEmail = {
  label: string;
  value: string;
};

export type ResumeContact = {
  location: string;
  phone: string;
  emails: ResumeEmail[];
  links: ResumeLink[];
};

export type EducationEntry = {
  institution: string;
  degree: string;
  details?: string;
};

export type SkillCategory = {
  label: string;
  items: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export type ProjectEntry = {
  title: string;
  description: string;
};

export type ResumeData = {
  name: string;
  resumePdfPath: string;
  contact: ResumeContact;
  summary: string;
  education: EducationEntry[];
  skills: SkillCategory[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
};

export const resumeData: ResumeData = {
  name: 'JOSE ROBERTO JUAREZ',
  resumePdfPath: '/RobertoJuarez_Resume.pdf',
  contact: {
    location: 'Laredo, TX, United States',
    phone: '(956) 955-0163',
    emails: [
      { label: 'Personal', value: 'robertojuarezjose90@gmail.com' },
      { label: 'Freelancing', value: 'rjuarez@ondevsystem.com' },
    ],
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/roberto-juárez-b0b76a225/' },
      { label: 'GitHub', href: 'https://github.com/robertojuarezjose' },
      { label: 'Website', href: 'https://robertojuarezjose.com' },
    ],
  },
  summary:
    'Full-Stack Software Engineer specializing in enterprise logistics and WMS solutions. Skilled in React, Next.js, ASP.NET Core, and SQL Server. Experienced in Cloud DevOps for reliable deployments and intuitive, client-focused applications.',
  education: [
    {
      institution: 'The University of Texas, San Antonio',
      degree: 'Bachelor of Science, Computer Science',
      details: 'San Antonio · 2022 · GPA: 3.7 — 4 semesters on Dean’s List; Project lead on all school projects',
    },
  ],
  skills: [
    { label: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Material UI', 'Tailwind CSS', 'jQuery'] },
    { label: 'Backend', items: ['ASP.NET Core', 'C#', 'Python', 'Flask', 'Node.js'] },
    { label: 'Databases', items: ['SQL Server', 'Supabase', 'MySQL', 'MongoDB'] },
    { label: 'DevOps & Cloud', items: ['Azure', 'AWS', 'Terraform', 'Docker', 'GitLab CI'] },
    { label: 'Tools', items: ['Postman', 'Generative AI', 'Axios', 'Ajax', 'dbForge SQL Decryptor', 'Hangfire', 'iTextSharp', 'Seq', 'Serilog'] },
    { label: 'Languages', items: ['English (Proficient)', 'Spanish (Native)'] },
  ],
  experience: [
    {
      company: 'OP Computer Business Solutions',
      role: 'Full Stack Software Engineer',
      period: 'June 2024 – Present, Laredo, Texas',
      bullets: [
        'Built end-to-end features by architecting RESTful ASP.NET Core APIs and React/Next.js + jQuery/Bootstrap UIs (modern and legacy stacks), improving delivery, real-time visibility, and streamlined operations across logistics, WMS, and cargo monitoring. Improved manual operations by 55%.',
        'Automated shipping document generation using iTextSharp and C#, transforming a time‑intensive process into an instant download experience, reducing time by 90%.',
        'Optimized SQL Server by refining indexes and tuning stored procedures via ADO.NET to accelerate 250k+ row queries and reduce logical reads.',
        'Facilitated stakeholder workshops and one‑on‑one consultations to elicit precise requirements and align feature integrations, ensuring clear communication and delivery of solutions that exceed user expectations.',
        'Led legacy modernization and system audits, implemented stability fixes, and delivered end‑to‑end features with rigorous automated/manual testing and consistent release management.',
        'Handled DevOps updates and troubleshooting in a private cloud environment, ensuring system uptime and on‑time project delivery.',
      ],
    },
    {
      company: 'Rocket Labs Technologies',
      role: 'Full Stack Software Developer',
      period: 'January 2023 – June 2024, Remote',
      bullets: [
        'Designed and deployed applications using ASP.NET Core and Next.js/React by building RESTful APIs, configuring robust middleware pipelines, and implementing asynchronous functions, reducing API response times by 38% and improving scalability.',
        'Improved project delivery efficiency by managing the full project lifecycle from requirements to deployment, reducing costs by up to 50%.',
        'Utilized Clean Architecture principles and MediatR‑based CQRS patterns to construct maintainable systems with a modular code structure.',
        'Deployed cloud‑based applications using Azure and incorporating Agile sprints for iterative improvements.',
        'Implemented structured logging with Serilog (JSON + enrichers) and Seq for centralized search/analysis; instrumented APIs and jobs.',
        'Integrated CI/CD pipeline within the application, improving software reliability and accelerating deployment cycles by 70%.',
      ],
    },
    {
      company: 'H‑E‑B Digital',
      role: 'Co‑op Software Engineer',
      period: 'August 2022 – December 2022, Hybrid, San Antonio, Texas',
      bullets: [
        'Integrated secure API endpoints for React applications using Axios to manage user access, apply authentication state updates, and ensure multi‑protocol compatibility during backend data retrieval.',
        'Participated in weekly stand‑ups to review progress on improvement initiatives, surface and resolve blockers, and align cross‑functional teams on priorities.',
        'Utilized static analysis and manual examination techniques with modern version control systems to ensure code integrity before final deployment.',
        'Developed with React and Material UI to craft an intuitive and responsive landing page layout and UI features, aligning design components with user‑centric principles.',
        'Containerized the front‑end React application and defined multi‑service orchestration with Docker Compose.',
        'Led project presentations for stakeholders, articulating key milestones and soliciting actionable feedback to identify and prioritize strategic enhancements.',
      ],
    },
  ],
  projects: [
    {
      title: 'Enterprise Logistics Monitoring System',
      description:
        'Real-time analytics dashboard for shipping and warehouse operations integration.',
    },
    {
      title: 'Document Storage System (ERP)',
      description: 'Secure PDF storage with AWS deployment and automated MySQL syncing.',
    },
  ],
};


