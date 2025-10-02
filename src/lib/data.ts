// src/data/projectsData.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github?: string;
  website?: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  period?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Lossless Youths',
    description: 'A modern web application built with cutting-edge technologies, featuring real-time data synchronization and an intuitive user interface designed for seamless user experience.',
    image: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
    github: 'https://github.com/yourusername/lossless-youths',
    website: 'https://lossless-youths.demo.com'
  },
  {
    id: 'project-2',
    title: 'Estrange Bond',
    description: 'An innovative platform that connects people through shared interests, utilizing advanced algorithms for intelligent matching and community building features.',
    image: 'https://i.redd.it/tc0aqpv92pn21.jpg',
    github: 'https://github.com/yourusername/estrange-bond',
    website: 'https://estrange-bond.demo.com'
  },
  {
    id: 'project-3',
    title: 'The Gate Keeper',
    description: 'A robust security management system with advanced authentication protocols, role-based access control, and comprehensive audit logging capabilities.',
    image: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
    github: 'https://github.com/yourusername/gate-keeper',
    website: 'https://gate-keeper.demo.com'
  },
  {
    id: 'project-4',
    title: 'Last Trace Of Us',
    description: 'A narrative-driven application that preserves and shares digital memories, featuring cloud storage integration and AI-powered photo organization.',
    image: 'https://images7.alphacoders.com/878/878663.jpg',
    github: 'https://github.com/yourusername/last-trace',
    website: 'https://last-trace.demo.com'
  },
  {
    id: 'project-5',
    title: 'Urban Decay',
    description: 'An artistic portfolio showcasing urban photography and digital art, with interactive galleries and immersive visual experiences.',
    image: 'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
    github: 'https://github.com/yourusername/urban-decay',
    website: 'https://urban-decay.demo.com'
  },
  {
    id: 'project-6',
    title: 'The Migration',
    description: 'A data visualization tool that tracks and analyzes migration patterns, featuring interactive maps and comprehensive statistical analysis.',
    image: 'https://da.se/app/uploads/2015/09/simon-december1994.jpg',
    github: 'https://github.com/yourusername/the-migration',
    website: 'https://the-migration.demo.com'
  }
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Senior Web Developer',
    description: 'Led a team of 5 developers in creating scalable web applications using modern frameworks. Implemented CI/CD pipelines and improved application performance by 40%.',
    image: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
    period: '2022 - Present'
  },
  {
    id: 'exp-2',
    title: 'Full Stack Developer',
    description: 'Developed and maintained multiple client projects using React, Node.js, and MongoDB. Collaborated with UX designers to create intuitive user interfaces.',
    image: 'https://i.redd.it/tc0aqpv92pn21.jpg',
    period: '2020 - 2022'
  },
  {
    id: 'exp-3',
    title: 'Frontend Developer',
    description: 'Built responsive web applications with focus on performance optimization and accessibility. Implemented modern CSS techniques and JavaScript frameworks.',
    image: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
    period: '2018 - 2020'
  },
  {
    id: 'exp-4',
    title: 'Junior Developer',
    description: 'Started career in web development, learning best practices and contributing to various projects. Gained expertise in HTML, CSS, JavaScript, and version control.',
    image: 'https://images7.alphacoders.com/878/878663.jpg',
    period: '2016 - 2018'
  },
  {
    id: 'exp-5',
    title: 'Web Design Intern',
    description: 'Assisted in creating website mockups and prototypes. Learned fundamental design principles and basic web development technologies.',
    image: 'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
    period: '2015 - 2016'
  },
  {
    id: 'exp-6',
    title: 'Freelance Designer',
    description: 'Provided graphic and web design services to local businesses. Developed skills in client communication and project management.',
    image: 'https://da.se/app/uploads/2015/09/simon-december1994.jpg',
    period: '2014 - 2015'
  }
];
