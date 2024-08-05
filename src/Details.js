// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/parth-logo.png";
// import mitProfile from "./assets/mit-profile.ico"
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import nodejs from "./assets/techstack/node js.png"
import nodejs2 from "./assets/techstack/node js2.webp"
import typescript from "./assets/techstack/ts.png"
import mongodb from "./assets/techstack/mongo db.png"
import mongodbCompass from './assets/techstack/mognoCompass.jpg'
import githubDeskTop from './assets/techstack/githubDesktop.jpg'
import reduxtoolkit from './assets/techstack/redux-toolkit.jpg'
import python from './assets/techstack/python.jpg'

import cpp from './assets/techstack/c++.png'
import mysql from './assets/techstack/mysql.jpg'
import mongodbnew from './assets/techstack/mongodbnew.jpg'
import java from './assets/techstack/javalogo.png'
import tableau from './assets/techstack/Tableau-Logo.png'
import c_logo from './assets/techstack/c_lan.jpg'
import django from './assets/techstack/Django-Logo.png'


// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Parth Oza",
  tagline: "Coding Freak : Transforming visions into interactive realities",
  img: profile,
  about: `Hello, I'm Parth Oza, a dedicated professional with a strong foundation in machine learning and Python. I am currently pursuing my master's degree at Roosevelt University in the USA. My academic journey and practical experiences have equipped me with the ability to tackle complex problems and develop innovative solutions in the field of machine learning. I am also a competitive programmer who loves to solve challenging problems on various platforms like codeshef and hackerrank. My proficiency in Python allows me to effectively implement algorithms and build robust models. I am committed to leveraging my knowledge and skills to contribute to cutting-edge projects and drive advancements in technology..`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/oza-parth/",
  github: "https://github.com/Parth-Oza/",
  email: "ozaparth055@gmail.com",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Machine learning Intern",
    Company: `Infolabz`,
    Location: "Ahmedabad",
    Type: "Full time",
    Duration: "Jan 2023 - April 2023",
  },
  {
    Position: "Data analytics Intern",
    Company: `Infolabz`,
    Location: "Ahmedabad",
    Type: "Full Time",
    Duration: "June 2022 - july 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Ms (Master Of Science) in Computer Science",
    Company: "Roosevelt University",
    Location: "Chicago USA",
    Type: "Full Time",
    Duration: "Jan 2024 - Current",
  },
  {
    Position: "Bachelor in Computer Engineering",
    Company: `Saffrony Institute Of Technology`,
    Location: "Mehsana - Ahmedabad Highway, Linch",
    Type: "Full Time",
    Duration: "June 2019 - June 2023",
  },
  {
    Position: "HSC",
    Company: "Shri J.M. Chaudhary Sarvajanik Vidhyalaya Mehsana",
    Location: "Mehsana",
    Type: "Full Time",
    Duration: "June 2017 - May 2019",
  },
 
];

// export const achievements = [
//   {
//     Position: "Codeshef",
//     Company: `Max rating - 1759 (3 star) `,
//     Location: "Mehsana - Ahmedabad Highway, Linch",
//     Type: "Full Time",
//     Duration: "June 2019 - June 2023",
//   }
// ]

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  nodejs:nodejs,
  nodejs2:nodejs2,
  typescript:typescript,
  mongodb:mongodb,
  python:python,
  reduxToolkit:reduxtoolkit,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  githubDesktop:githubDeskTop,
  mongodbCompass:mongodbCompass,
  github: github,
  figma: figma,
  java:java,
  cpp:cpp,
  c_logo:c_logo,
  tableau:tableau,
  django:django,
  mysql:mysql,
  mongodbnew
  :mongodbnew

};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Recommendation System",
    image: projectImage1,
    description: `Behavioural and Sentimental analysis based recommendation system for e-commerce, magazines and other data sets using SVD`,
    techstack: "Sentimental Analysis , Machine Learning",
    previewLink: "https://stepper-d3c8b.web.app/",
    githubLink: "hhttps://github.com/Parth-Oza/Recommendationn-system-infolabz-/blob/main/project_final.ipynb",
  },
  {
    title: "Line Following Car",
    image: projectImage2,
    description: `Using Arduino Uno, four DC motors, a battery, two IR sensors, and a motor driver shield, I successfully designed and developed an automated car capable of accurately following the path defined by a specific color`,
    techstack: "Arduino UNO, IOT",
    previewLink: "https://folder-structure-e7b75.web.app/",
    githubLink: "hhttps://github.com/Parth-Oza/Arduino-ROBOT/blob/main/README.md",
  },
  {
    title: "Intern Comune",
    image: projectImage3,
    description: `Developed a dynamic website enabling users to actively engage in the latest internship opportunities offered
by companies. Utilizing HTML, CSS, and JavaScript
• Designed three user interfaces of the dashboard for USERS,COMPANY and DEVELOPERS`,
    techstack: "Django, MySQL,HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Parth-Oza/Intern-Commun",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "mitprajapati0311@gmail.com",
  phone: "+919265228778",
};
