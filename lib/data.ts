import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import laserSecurityImg from "@/public/laser-security-system.jpg";
import nst from "@/public/nst.png";
import os from "@/public/os.jpeg";
import nmap from "@/public/nmap.png";
import secu from "@/public/secu.gif";
import raytracingImg from "@/public/ray-tracing.bmp";
import syncincImg from "@/public/syncinc.png";
import syncincImgDark from "@/public/syncinc-dark.png";
import rentastayImg from "@/public/rentastay.png";
import compilerImgDark from "@/public/compiler-dark.png";
import compilerImg from "@/public/compiler.png";
import huhImg from "@/public/huh.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Research", // New research link
    hash: "#research",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#experience",
  },
  {
    name: "Work Experience", // New link for Work Experience
    hash: "#work-experience", // Use the same ID as in the WorkExperience component
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Sc. in CSE, Bangladesh University of Engineering and Technology (BUET)",
    location: "Dhaka, Bangladesh",
    description:
      "Completed my Bachelor of Science in Computer Science and Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2024",
    others: {
      CGPA: "3.81/4.00\n\n",
      "Relevant Courseworks": [
        "Computer Security, ",
        "Machine Learning, ",
        "Bioinformatics Algorithms, ",
        "Simulation and Modeling, ",
        "Computer Graphics, ",
        "Artificial Intelligence, ",
        "Operating Systems, ",
        "Computer Networks, ",
        "Data Structures and Algorithms, ",
        "Database Systems, ",
        "Software Engineering, ",
        "Information System Design, ",
        "Numerical Methods, ",
        "Discrete Mathematics, ",
        "Object Oriented Programming, ",
        "Linear Algebra, ",
        "Probability and Statistics",
      ],
    },
  },
  {
    title: "Higher Secondary School Certificate (HSC)",
    institution: "Notre Dame College (NDC)",
    location: "Dhaka, Bangladesh",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2018",
    others: {
      GPA: "5.00/5.00",
    },
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Ideal School and College",
    location: "Dhaka, Bangladesh",
    icon: React.createElement(LuGraduationCap),
    date: "2006 - 2016",
    others: {
      GPA: "5.00/5.00",
    },
  },
] as const;

export const workExperienceData = [
  {
    title: "Lecturer, Department of CSE",
    organization: "BRAC University",
    location: "Dhaka, Bangladesh",
    date: "July 2024 - Present",
    courses: [
      "Programming Language 1 (CSE 110)",
      "Object Oriented Programming (CSE 111)",
      "Data Structures Lab (CSE 220)",
      "Discrete Mathematics (CSE 230)",
    ],
  },
];


export const researchData = [

  {
    title: "Exploring Few-Shot Learning for Named Entity Recognition in Cyber Threat Intelligence: A Novel but Inefficient Approach Compared to Transformer-Based Models",
    description:
      "Developed and evaluated methods for Named Entity Recognition (NER) in Cyber Threat Intelligence using transformer models (BERT, SecureBERT) and few-shot learning models (GPT-3.5, GPT-4.0, Gemini) on DNRTI and APTNER datasets. Results demonstrated that fine-tuned transformers outperformed few-shot models in accuracy and precision, highlighting the value of domain-specific training for CTI applications.",
      supervisor: {
        name: "Dr. Md. Shohrab Hossain",
        url: "https://mshohrabhossain.buet.ac.bd/",
      },
      collaborators: [
        {
          name: "Professor Ren-Hung Hwang",
          url: "https://rhhwang.csie.io/English/index.html",
        },
        {
          name: "Professor Ying Dar Lin",
          url: "https://speed.cs.nycu.edu.tw/~ydlin/",
        },
      ],
    date: "2024",
  },
  // {
  //   title: "Extracting MITRE techniques from unstructured threat reports using Large Language Models",
  //   description:
  //     "In this work, we started with the automated collection of threat intelligence reports from leading cybersecurity platforms, including Threatpost, Comodo News, and Securelist, using advanced web scraping powered by Selenium. This data serves as the foundation for demonstrating how Large Language Models (LLMs) can significantly enhance the extraction and categorization of threat techniques, providing CTI practitioners with a more efficient and precise tool for threat analysis and response",
  //     supervisor: {
  //       name: "Dr. Md. Shohrab Hossain",
  //       url: "https://mshohrabhossain.buet.ac.bd/",
  //     },
  //     collaborators: [
  //       {
  //         name: "Professor Ren-Hung Hwang",
  //         url: "https://rhhwang.csie.io/English/index.html",
  //       },
  //       {
  //         name: "Professor Ying Dar Lin",
  //         url: "https://speed.cs.nycu.edu.tw/~ydlin/",
  //       },
  //     ],
  //   date: "Ongoing",
  // },

  {
    title: "Forecasting of COVID-19 cases using a custom deep learning architecture incorporating vaccination",
    description:
      "Developed a deep learning model to predict COVID-19 cases, incorporating factors like vaccination rates and hospital admissions often overlooked in traditional models. The fusion-type network architecture combined channel-wise and global convolution with recurrent networks to capture complex time series dependencies. Tested on US and UK datasets, the model outperformed state-of-the-art methods, emphasizing the impact of vaccination on controlling case spread.",
      awards: [
        {
          title: "Best Student Poster",
          event: "NSysS",
          year: 2023
        }
      ],
      supervisor: null,
      collaborators: [],
      
    date: "Decemeber 2023",
  },

  {
    title : "Exploring Post-Mortem Neural Signal Processing: Uncovering Computational Potentials in Deceased Animal Brains",
   conference: {
     name: "CHI",
     year: 2025,
     status: "Submitted"
   },
   awards: [{
     title: "Best Student Poster",
     event: "NSysS",
     year: 2021
   }],
   description: "We investigate the potential of a deceased animal brain to process signals. Specifically, we examine the brain’s responses to external stimuli in the form of electrical signals and its ability to act as a memory unit. We also explore the transfer characteristics of the deceased goat brain and elucidate the corresponding function through representative circuits.",
   supervisor:
     {
       name: "Dr. A. B. M. Alim Al Islam",
       url: "https://cse.buet.ac.bd/faculty/faculty_detail/razi"  // Replace with actual URL if available
     },
   collaborators: [],
   "links": [
     {
       "type": "code",
       "url": "https://github.com/asifhaider/Is-It-Really-Dead"  // Replace with actual URL if available
     },
     {
       "type": "poster",
       "url": "https://www.researchgate.net/publication/357335958_Is_It_Really_Dead_-Digging_into_Dead_Brains_through_Analyzing_Its_Behavior_in_Response_to_Inducing_External_Impulses"  // Replace with actual URL if available
     }
   ]
  },


  


 
] as const;


export const projectsData = [
  {
    title: "Neural Image Style Transfer",
    description:
      "This project is inspired by the seminal paper from Gatys et al., on neural style transfer. The goal of this project is to explore and implement the neural style transfer technique where the style of one image is combined with the content of another using convolutional neural networks.",
    tags: ["Python", "Pytorch", "Machine Learning", "Convolutional Neural Networks"],    
    imageUrl: nst,
    imageUrlDark: nst,
    githubUrl: "https://github.com/NafisMahi/Neural-Image-Style-Transfer",
    websiteUrl: "",
  },
  {
    title: "Ray Tracing",
    description:
      "A ray tracing program that renders a 3D scene with realistic lighting.",
    tags: ["C++", "OpenGL", "Computer Graphics"],
    imageUrl: raytracingImg,
    imageUrlDark: null,
    githubUrl:
      "https://github.com/NafisMahi/CSE-410--Computer-Graphics-Sessional",
    websiteUrl: "",
  },
  {
    title: "A C Compiler",
    description:
      "A subset C compiler that analyzes and compiles C code to optimized assembly 8086 code.",
    tags: ["C", "Flex", "Bison", "Assembly", "C++"],
    imageUrl: compilerImg,
    imageUrlDark: compilerImgDark,
    githubUrl: "https://github.com/NafisMahi/CSE-310--Compiler-Sessional",
    websiteUrl: "",
  },
  {
    title: "Implementing System Calls, Scheduling, Memory Management with xv6",
    description:
      "Explored bash scripting and pthread synchronization, implemented custom system calls and a lottery scheduling algorithm, and added a copy-on-write paging mechanism to enhance memory management in the xv6 operating system.",
    tags: ["C", "C++", "SHELL", "xv6"],
    imageUrl: os,
    imageUrlDark: os,
    githubUrl:
      "https://github.com/NafisMahi/CSE-314-Operating-Systems-Sessional",
    websiteUrl: "",
  },
{
    title: "Nmap- Computer Security Project",
    description:
      "Various features of the network scanning tool, Nmap are explored and studied as part of the CSE 406- Computer Security Sessional project.",
    tags: ["Python", "Nmap", "Network Security"],
    imageUrl: nmap,
    imageUrlDark: nmap,
    githubUrl:
      "https://github.com/NafisMahi/Nmap-Computer-Security-Project",
    websiteUrl: "",
  },
  {
    title: "Simulation and Modeling Sessional Projects - CSE412",
    description:
      "A collection of simulation and modeling assignments for the CSE412 course, each designed to address a unique real-world problem. These projects utilize various simulation techniques, including queueing systems, inventory management, project scheduling, and Monte Carlo methods.",
    tags: ["Python"],
    imageUrl: null,
    imageUrlDark: null,
    githubUrl: "https://github.com/NafisMahi/CSE-412-Simulation-and-Modeling-Sessional",
    websiteUrl: "",
  },
  {
    title: "Cryptography Algorithms, Security Vulnerabilities, Attacks and Protection",
    description:
      "Implemented a public key cryptography system with AES, Diffie-Hellman, and RSA key exchanges over client-server sockets. Explored malware functionalities, buffer overflow attacks, and experimented with firewall configurations and browser exploitation using BeEF.",
    tags: ["C", "C++", "Python", "Docker", "Firewall"],
    imageUrl: secu,
    imageUrlDark: secu,
    githubUrl: "https://github.com/NafisMahi/CSE-406--Computer-Security-Sessional",
    websiteUrl: "https://shamit187.itch.io/huh",
  },

] as const;

export const skillsData = [
  "Pytorch",
  "Tensorflow",
  "Keras",
  "C",
  "C++",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Bash",
  "SQL",
  "MongoDB",
  "React",
  "django",
  "Spring Boot",
  "Bootstrap",
  "Tailwindcss",
  "Git",
  "LaTeX",
  "Adobe Illustrator",
  "Arduino",
] as const;

export const socialsData = {
  github: {
    url: "https://github.com/NafisMahi",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/nafis-karim-bb95a01b0/?originalSubdomain=bd",
  },
  email: {
    address: "nafiskarim1999@gmail.com",
  },
} as const;

export const hobbies = [
  "travelling.",
  "coding.",
  "problem solving.",
  "learning new things.",
  "building secure softwares and systems.",
  "playing video games.",
] as const;
