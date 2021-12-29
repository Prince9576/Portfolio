export const EDUCATION_DATA = [
  {
    university: "MCKV Institute of Engineering",
    degree: "Bachelor of Technology ( Information Technology )",
    startDate: new Date(2015, 4),
    endDate: new Date(2019, 5),
  },
  {
    university: "Guru Gobind Singh Public School",
    degree: "Intermediate",
    startDate: new Date(2013, 4),
    endDate: new Date(2015, 5),
  },
  {
    university: "Guru Gobind Singh Public School",
    degree: "Matriculation",
    startDate: new Date(2001, 4),
    endDate: new Date(2013, 5),
  },
];

export const WORK_EXPERIENCE_DATA = [
  {
    company: "Pratishthan Software Ventures Pvt Ltd",
    designation: "Front End Developer",
    startDate: new Date(2019, 8),
    tasks: [
      "Implemented features for a global provider of insurance products using Angular and Ionic",
      "Helped migrating a web app from React to Angular",
      "Implemented a scheduler for a web app in Angular",
      "Currently leading a team of two freshers and two interns",
      "Implemented features for a web application using React",
      "Rewritten codes for better performance, readability and standards",
    ],
  },
  {
    company: "Tenpi Technologies",
    designation: "Intern ( Front-End )",
    startDate: new Date(2018, 6),
    endDate: new Date(2018, 9),
    tasks: [
      "Implemented landing pages from concept and design to deployment using HTML, CSS, and Vanilla JS.",
    ],
  },
];

export const SKILLS_DATA = [
  {
    name: "HTML",
    percentage: 70,
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    percentage: 80,
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Javascript",
    percentage: 85,
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    percentage: 80,
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Angular",
    percentage: 85,
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Node JS",
    percentage: 65,
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Sass",
    percentage: 75,
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    name: "Typescript",
    percentage: 70,
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Mongo DB",
    percentage: 70,
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Ionic",
    percentage: 70,
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
  },
  {
    name: "Express",
    percentage: 70,
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "NextJS",
    percentage: 70,
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

export const PROJECTS_DATA = [
  {
    name: "Socials",
    description:
      "A Social Media app with features like chat, post, like, comment, followers etc.",
    techStack: ["React", "NextJS", "NodeJS", "Semantic UI"],
    imageSrc: "portfolio_ss.png",
  },
  {
    name: "Visualiser",
    description:
      "A webapp with sorting visualiser written in Vanilla JS with different sorting algorithms.",
    techStack: ["HTML", "CSS", "Javascript"],
    imageSrc: "portfolio_ss.png",
  },
  {
    name: "Blogster",
    description:
      "A Blogging Media app with features like login, blog, profile etc.",
    techStack: ["Angular", "Typescript", "SCSS", "NodeJS"],
    imageSrc: "portfolio_ss.png",
  },
  {
    name: "Weather",
    description: "A Weather app with analog clock implemented in Vanilla JS",
    techStack: ["HTML", "CSS", "Javascript"],
    imageSrc: "portfolio_ss.png",
  },
  {
    name: "Foodsanta",
    description:
      "A Food Delivery app with features like cart, shopping list etc.",
    techStack: ["React", "HTML", "CSS", "Javascript"],
    imageSrc: "portfolio_ss.png",
  },
  {
    name: "Portfolio",
    description: "My fully responsive personal Portfolio app",
    techStack: ["React", "Javascript", "CSS"],
    imageSrc: "portfolio_ss.png",
  },
];
