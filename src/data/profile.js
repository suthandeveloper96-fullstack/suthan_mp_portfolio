// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Suthan MP',
  role: 'Full Stack Developer',
  tagline:
    'I design, build, and deploy scalable web applications with React, Node.js, PostgreSQL, and AWS — from responsive interfaces to microservice backends.',
  location: 'Tamil Nadu, India',
  email: 'suthandeveloper96@gmail.com',
  // Contact form delivery (FormSubmit). After activating, you can swap the email for the random alias FormSubmit gives you.
  formEndpoint: 'https://formsubmit.co/ajax/suthandeveloper96@gmail.com',
  phone: '+91 8825981768',
  // WhatsApp chat link (country code + number, no '+' or spaces) with a pre-filled greeting
  whatsapp: `https://wa.me/918825981768?text=${encodeURIComponent("Hi Suthan, I saw your portfolio and I'd like to connect.")}`,
  resumeUrl: '', // e.g. '/resume.pdf' (place the file in /public)
  socials: {
    github: '', // e.g. 'https://github.com/your-username'
    linkedin: 'https://www.linkedin.com/in/suthan-m-p-760169271',
    instagram: 'https://www.instagram.com/suthan___mp/',
  },
  about: [
    'I am a Full Stack Developer with 3+ years of experience building web applications end to end. I started out focused on the frontend, spending over two years creating responsive, component-driven React applications with Redux, Tailwind CSS, and Material UI.',
    'Today I work across the full stack — building Node.js services in a microservices architecture, designing REST and GraphQL APIs, writing and optimizing SQL on PostgreSQL, caching with Redis, and deploying on AWS.',
    'I care about clean, reusable, maintainable code, enjoy debugging and performance tuning, and adapt quickly to new technologies while working in agile teams.',
  ],
  stats: [
    { value: '3+', label: 'Years of experience' },
    { value: '2', label: 'Companies' },
    { value: '3', label: 'Production projects' },
  ],
}

export const skills = [
  {
    group: 'Frontend Development',
    summary: 'Responsive, component-driven interfaces with clean state management.',
    items: ['React', 'JavaScript (ES6+)', 'TypeScript', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI'],
  },
  {
    group: 'Backend & APIs',
    summary: 'Node.js services and microservices with well-designed REST and GraphQL APIs.',
    items: ['Node.js', 'REST APIs', 'GraphQL', 'Microservices', 'Axios'],
  },
  {
    group: 'Database & Caching',
    summary: 'Complex SQL queries, data modelling and performance tuning with caching.',
    items: ['SQL', 'PostgreSQL', 'Redis'],
  },
  {
    group: 'Cloud & Tooling',
    summary: 'Deploying and configuring applications on AWS with a solid team workflow.',
    items: ['AWS', 'Git', 'GitHub', 'Postman', 'Altair', 'Jira'],
  },
]

export const process = [
  { title: 'Understand', text: 'Clarify requirements, users and edge cases before writing code.' },
  { title: 'Design', text: 'Plan components, APIs and data models that scale cleanly.' },
  { title: 'Build', text: 'Write clean, reusable code across React frontends and Node.js services.' },
  { title: 'Ship', text: 'Test, debug, tune performance and deploy on AWS.' },
]

export const experience = [
  {
    company: 'Troniqsrationale Pvt Ltd',
    role: 'Full Stack Developer',
    period: 'Dec 2024 — Present',
    location: 'Nagercoil',
    points: [
      'Develop features end to end for SmartScripts (PerfectRx), a healthcare platform for online prescription delivery from pharmacies to patients.',
      'Build responsive React interfaces and Node.js backend services within a microservices architecture.',
      'Design and integrate both REST and GraphQL APIs for frontend–backend communication.',
      'Work with PostgreSQL as the primary database and Redis caching to improve performance.',
      'Deploy and host services on AWS, including environment configuration.',
    ],
    tech: ['React', 'Node.js', 'GraphQL', 'REST', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    company: 'Kalyx India Pvt Ltd',
    role: 'Frontend Developer',
    period: 'Sep 2022 — Dec 2024',
    location: 'Chennai',
    points: [
      'Built UIs for an e-learning platform and a construction management application using React and hooks.',
      'Created responsive layouts with HTML5, CSS, Tailwind CSS, and Material UI.',
      'Managed application state with Redux and integrated backend APIs using Axios.',
    ],
    tech: ['React', 'Redux', 'JavaScript', 'Tailwind CSS', 'Material UI'],
  },
]

export const projects = [
  {
    title: 'SmartScripts (PerfectRx)',
    company: 'Troniqsrationale',
    description:
      'Healthcare platform that lets patients receive prescriptions from pharmacies through an online delivery system. Full stack work across a React frontend and Node.js microservices, with REST and GraphQL APIs, PostgreSQL, Redis caching, and AWS hosting.',
    tech: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS'],
    github: '',
    live: '',
  },
  {
    title: 'Toni International',
    company: 'Kalyx India',
    description:
      'E-learning platform where students browse and purchase courses published by admins. Built the React frontend with hooks, Redux state management, and Axios API integration.',
    tech: ['React', 'Redux', 'Tailwind CSS', 'Material UI'],
    github: '',
    live: '',
  },
  {
    title: 'Construction Management',
    company: 'Kalyx India',
    description:
      'Application for managing construction projects — budgeting, scheduling, resource management, and task execution. Developed the responsive React UI and API integration layer.',
    tech: ['React', 'Redux', 'Axios', 'Material UI'],
    github: '',
    live: '',
  },
]

export const education = [
  { degree: 'B.E. Mechanical Engineering', school: 'PSN Engineering College, Tirunelveli', period: '2017' },
]
