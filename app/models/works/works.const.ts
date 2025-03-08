import type { Work } from "./works.types";

export const WORKS: Work[] = [
  {
    id: "1",
    title: "Strap - Online Whiteboard Tool",
    category: "Web Application",
    url: "https://product.strap.app/",
    role: "UX Design, Frontend, Backend",
    techStacks: ["React", "TypeScript", "Firebase"],
    description: [
      "Developed the front-end interface for a web application using Pixi, React, and TypeScript as a top contributor of the project",
      "Contributed to the back-end development using Firebase, made thorough communication between front-end and back-end",
      "Collaborated closely with Product Managers and Designers to establish implementation timelines and plans for project milestones",
      "Supported 10+ team members by engaging in code reviews and conducting pair-programming sessions, fostering a collaborative environment",
    ],
    image: "/assets/works/strap.png",
  },
  {
    id: "2",
    title: "Huddler - Information Management Tool",
    category: "Web Application",
    url: "https://service.huddler.app/",
    role: "UX Design, Frontend, Backend",
    techStacks: ["Vue", "Laravel", "AWS"],
    image: "/assets/works/huddler.jpg",
    description: [
      "Developed the front-end interface for a web application using Vue.js, Vuex, and SCSS",
      "Implemented a RESTful API using Laravel, MySQL, and AWS services",
      "Collaborated with the Product team to design and implement new features, ensuring a seamless user experience",
    ],
  },
  {
    id: "3",
    title: "KINTON RAMEN Official Website",
    category: "Website",
    url: "https://kintonramen.com/",
    role: "UX Design, Frontend, Backend",
    techStacks: ["WordPress/PHP", "HTML", "CSS", "JavaScript"],
    image: "/assets/works/kinton.jpg",
    description: [
      "Developed a custom WordPress theme for a restaurant website using PHP, HTML, CSS, and JavaScript",
      "Designed the front-end interface with a mobile-first approach, ensuring a responsive and user-friendly experience",
      "Collaborated with the Marketing team to create a content strategy and optimize the site for SEO",
    ],
  },
  {
    id: "4",
    title: "KINKA SUSHI BAR IZAKAYA Official Website",
    category: "Website",
    url: "https://kinkaizakaya.com/",
    role: "UX Design, Frontend, Backend",
    techStacks: ["WordPress/PHP", "HTML", "CSS", "JavaScript"],
    image: "/assets/works/kinka.jpg",
    description: [
      "Developed a custom WordPress theme for a restaurant website using PHP, HTML, CSS, and JavaScript",
      "Designed the front-end interface with a mobile-first approach, ensuring a responsive and user-friendly experience",
      "Collaborated with the Marketing team to create a content strategy and optimize the site for SEO",
    ],
  },
];
