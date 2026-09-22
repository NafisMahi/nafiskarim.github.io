import nst from "@/public/nst.png";
import os from "@/public/os.jpeg";
import nmap from "@/public/nmap.png";
import secu from "@/public/secu.gif";
import raytracingImg from "@/public/ray-tracing.bmp";
import compilerImgDark from "@/public/compiler-dark.png";
import compilerImg from "@/public/compiler.png";

export const siteConfig = {
  name: "Nafis Karim",
  position: "PhD Student in Computer Science",
  institution: "University of Illinois Chicago",
  institutionUrl: "https://cs.uic.edu/",
  tagline:
    "I work on web security and the security of AI agents: how LLM-powered browser agents behave on the web, how to tell them apart from people, and how to keep them from being abused.",
  advisor: {
    name: "Jason Polakis",
    url: "https://www.cs.uic.edu/~polakis/",
  },
  cvPath: "/CV.pdf",
  lastUpdated: "September 2026",
} as const;

export const links = [
  { name: "About", hash: "#about" },
  { name: "News", hash: "#news" },
  { name: "Publications", hash: "#publications" },
  { name: "Research", hash: "#research" },
  { name: "Teaching", hash: "#teaching" },
  { name: "Projects", hash: "#projects" },
  { name: "Education", hash: "#education" },
  { name: "Contact", hash: "#contact" },
] as const;

export const researchInterests = [
  "Agentic AI security",
  "Behavioral and browser fingerprinting",
  "Web security",
  "AI agent detection",
] as const;

export const newsData = [
  {
    date: "Sep 2026",
    text: "AgentShield, our study of AI browser agents against anti-bot defenses, is accepted (with shepherding) at IEEE S&P 2027.",
    href: "#publications",
  },
  {
    date: "Aug 2026",
    text: "Teaching assistant for CS 107 (Introduction to Computing and Programming) at UIC for Fall 2026.",
  },
  {
    date: "Jan 2026",
    text: "Teaching assistant for Introduction to MATLAB at UIC for Spring 2026.",
  },
  {
    date: "Aug 2025",
    text: "Started my PhD in Computer Science at the University of Illinois Chicago, advised by Jason Polakis.",
  },
  {
    date: "Jul 2024",
    text: "Joined the Department of CSE at BRAC University as a Lecturer.",
  },
  {
    date: "Jun 2024",
    text: "Graduated from BUET with a B.Sc. in Computer Science and Engineering.",
  },
  {
    date: "Dec 2023",
    text: "Best Student Poster at the 10th International Conference on Networking, Systems and Security (NSysS 2023) for our COVID-19 forecasting work.",
  },
  {
    date: "Dec 2021",
    text: "Best Student Poster at the 8th International Conference on Networking, Systems and Security (NSysS 2021) for our work on signal processing in deceased animal brains.",
  },
] as const;

export const publicationsData = [
  {
    title:
      "AgentShield: Fortifying Web Applications Against AI Agents and Agentic Browsers",
    authors: [
      { name: "Moiz Ali", equal: true },
      { name: "Nafis Karim", equal: true, me: true },
      { name: "Rownak ul Islam" },
      { name: "Jyotirmay Chauhan" },
      { name: "Dhruv Kucchal" },
      { name: "Jason Polakis", url: "https://www.cs.uic.edu/~polakis/" },
    ],
    venue: "IEEE Symposium on Security and Privacy (S&P)",
    year: 2027,
    status: "Accepted, with shepherding",
    summary:
      "A systematic empirical evaluation of modern AI browser agents (Perplexity Comet, ChatGPT Atlas, Claude for Chrome, and others) against widely deployed anti-bot defenses, showing that many existing mechanisms cannot reliably distinguish autonomous agents from humans. We introduce a behavioral fingerprinting framework that targets the perception-reasoning-action loop driving agentic clients, and identify Extinction-Induced Policy Drift, a failure mode in which repeatedly obstructed agents relax their own safety constraints.",
    note: "* Equal contribution",
    links: [] as ReadonlyArray<{ label: string; url: string }>,
  },
] as const;

export const researchData = [
  {
    title:
      "Enhancing Cyber Threat Intelligence with Transformer-based LLMs: A Comparative Analysis with Few-Shot Learning",
    organization: "Department of CSE, BUET",
    date: "May 2023 - Dec 2023",
    supervisor: {
      name: "Dr. Md. Shohrab Hossain",
      url: "https://mshohrabhossain.buet.ac.bd/",
    },
    collaborators: [
      {
        name: "Prof. Ying-Dar Lin (NYCU)",
        url: "https://speed.cs.nycu.edu.tw/~ydlin/",
      },
      {
        name: "Prof. Ren-Hung Hwang (NYCU)",
        url: "https://aint.lab.nycu.edu.tw/professor-2",
      },
    ],
    bullets: [
      "Applied named entity recognition to extract threat actors, malware, and other critical entities from unstructured cyber threat intelligence text.",
      "Benchmarked fine-tuned transformers (BERT, RoBERTa, SecureBERT) against few-shot prompting of GPT-3.5, GPT-4, and Gemini on the DNRTI and APTNER datasets.",
      "Found that domain-specific fine-tuning consistently outperforms few-shot prompting for specialized security entity extraction.",
    ],
    awards: [],
    links: [],
  },
  {
    title:
      "Forecasting of COVID-19 Cases Using a Custom Deep Learning Architecture Incorporating Vaccination",
    organization: "Department of CSE, BUET",
    date: "Jun 2023 - Dec 2023",
    supervisor: null,
    collaborators: [],
    bullets: [
      "Designed a fusion-type deep learning architecture combining channel-wise and global convolution with recurrent networks for time-series case forecasting.",
      "Incorporated vaccination rates and hospital admission data, factors often excluded from prior forecasting models.",
      "Outperformed state-of-the-art baselines on US and UK datasets, showing the significant role of vaccination in case trajectories.",
    ],
    awards: [{ title: "Best Student Poster", event: "NSysS 2023" }],
    links: [],
  },
  {
    title:
      "Exploring Post-Mortem Neural Signal Processing: Uncovering Computational Potentials in Deceased Animal Brains",
    organization: "Department of CSE, BUET",
    date: "Mar 2021 - Dec 2023",
    supervisor: {
      name: "Dr. A. B. M. Alim Al Islam",
      url: "https://cse.buet.ac.bd/faculty/faculty_detail/razi",
    },
    collaborators: [],
    bullets: [
      "Investigated whether a deceased animal brain can still process signals by measuring its response to external electrical stimuli.",
      "Explored the ability of a deceased goat brain to act as a memory unit.",
      "Characterized its transfer behaviour and modelled the corresponding function with representative circuits.",
    ],
    awards: [{ title: "Best Student Poster", event: "NSysS 2021" }],
    links: [
      { type: "code", url: "https://github.com/asifhaider/Is-It-Really-Dead" },
      {
        type: "poster",
        url: "https://www.researchgate.net/publication/357335958_Is_It_Really_Dead_-Digging_into_Dead_Brains_through_Analyzing_Its_Behavior_in_Response_to_Inducing_External_Impulses",
      },
    ],
  },
] as const;

export const teachingData = [
  {
    institution: "University of Illinois Chicago",
    department: "Department of Computer Science",
    entries: [
      {
        role: "Teaching Assistant",
        course: "CS 107: Introduction to Computing and Programming",
        term: "Fall 2026",
      },
      {
        role: "Teaching Assistant",
        course: "Introduction to MATLAB",
        term: "Spring 2026",
      },
      {
        role: "Teaching Assistant",
        course: "CS 107: Introduction to Computing and Programming",
        term: "Fall 2025",
      },
    ],
  },
  {
    institution: "BRAC University",
    department: "Department of Computer Science and Engineering",
    entries: [
      {
        role: "Lecturer",
        course:
          "CSE 321 Operating Systems, CSE 230 Discrete Mathematics, CSE 111 Object Oriented Programming, CSE 220 Data Structures, CSE 110 Programming Language I",
        term: "Jul 2024 - Aug 2025",
      },
    ],
  },
] as const;

export const educationData = [
  {
    degree: "PhD in Computer Science",
    institution: "University of Illinois Chicago",
    location: "Chicago, IL, USA",
    date: "Aug 2025 - Present",
    details: ["CGPA 4.00 / 4.00", "Advisor: Jason Polakis"],
  },
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    location: "Dhaka, Bangladesh",
    date: "May 2019 - Jun 2024",
    details: [
      "CGPA 3.81 / 4.00 (3.97 in final year)",
      "Coursework: Computer Security, Machine Learning, Artificial Intelligence, Operating Systems, Computer Networks, Software Engineering, Discrete Mathematics",
    ],
  },
  {
    degree: "Higher Secondary School Certificate",
    institution: "Notre Dame College",
    location: "Dhaka, Bangladesh",
    date: "2016 - 2018",
    details: [
      "GPA 5.00 / 5.00",
      "Talentpool Board Scholarship (33rd in Dhaka Division)",
    ],
  },
  {
    degree: "Secondary School Certificate",
    institution: "Ideal School and College",
    location: "Dhaka, Bangladesh",
    date: "2006 - 2016",
    details: [
      "GPA 5.00 / 5.00",
      "Talentpool Board Scholarship (12th in Dhaka Division)",
    ],
  },
] as const;

export const honorsData = [
  "University Dean's List Scholarship, BUET (Levels 1, 2, 4)",
  "University Merit List Scholarship, BUET (Levels 1, 2, 4)",
  "Student Poster Champion, 10th International Conference on Networking, Systems and Security (2023)",
  "Student Poster Champion, 8th International Conference on Networking, Systems and Security (2021)",
] as const;

export const skillsData = [
  {
    category: "Languages",
    items: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "Bash", "SQL"],
  },
  {
    category: "Security tools",
    items: ["Wireshark", "Nmap", "NS2", "CamFlow"],
  },
  {
    category: "Frameworks",
    items: ["PyTorch", "TensorFlow", "Django", "Node.js", "React", "Next.js"],
  },
  {
    category: "Other",
    items: ["Git", "LaTeX", "Docker", "HTML/CSS"],
  },
] as const;

export const projectsData = [
  {
    title: "Neural Image Style Transfer",
    description:
      "An implementation of neural style transfer after Gatys et al., combining the style of one image with the content of another using convolutional neural networks.",
    tags: ["Python", "PyTorch", "CNNs"],
    imageUrl: nst,
    imageUrlDark: null,
    githubUrl: "https://github.com/NafisMahi/Neural-Image-Style-Transfer",
    websiteUrl: "",
  },
  {
    title: "Ray Tracing",
    description:
      "A ray tracer that renders 3D scenes of geometric shapes with realistic lighting, reflections, and shadows.",
    tags: ["C++", "OpenGL", "Computer Graphics"],
    imageUrl: raytracingImg,
    imageUrlDark: null,
    githubUrl: "https://github.com/NafisMahi/CSE-410--Computer-Graphics-Sessional",
    websiteUrl: "",
  },
  {
    title: "A Subset-C Compiler",
    description:
      "A compiler for a subset of C that performs lexical, syntax, and semantic analysis and emits optimized 8086 assembly.",
    tags: ["C", "Flex", "Bison", "Assembly"],
    imageUrl: compilerImg,
    imageUrlDark: compilerImgDark,
    githubUrl: "https://github.com/NafisMahi/CSE-310--Compiler-Sessional",
    websiteUrl: "",
  },
  {
    title: "System Calls, Scheduling, and Memory Management in xv6",
    description:
      "Custom system calls, a lottery scheduler, and copy-on-write paging added to the xv6 operating system, alongside shell scripting and pthread synchronization exercises.",
    tags: ["C", "xv6", "Operating Systems"],
    imageUrl: os,
    imageUrlDark: null,
    githubUrl: "https://github.com/NafisMahi/CSE-314-Operating-Systems-Sessional",
    websiteUrl: "",
  },
  {
    title: "Cryptography, Vulnerabilities, Attacks and Protection",
    description:
      "A public key cryptography system with AES, Diffie-Hellman, and RSA over client-server sockets, plus explorations of malware, buffer overflows, firewall configuration, and browser exploitation with BeEF.",
    tags: ["C", "Python", "Docker", "Security"],
    imageUrl: secu,
    imageUrlDark: null,
    githubUrl: "https://github.com/NafisMahi/CSE-406--Computer-Security-Sessional",
    websiteUrl: "",
  },
  {
    title: "Nmap: Network Scanning in Practice",
    description:
      "A study of the network scanning tool Nmap and its detection, evasion, and scripting features, carried out for the Computer Security sessional course.",
    tags: ["Python", "Nmap", "Network Security"],
    imageUrl: nmap,
    imageUrlDark: null,
    githubUrl: "https://github.com/NafisMahi/Nmap-Computer-Security-Project",
    websiteUrl: "",
  },
  {
    title: "Simulation and Modeling Projects",
    description:
      "Simulation assignments covering queueing systems, inventory management, project scheduling, and Monte Carlo methods, each modelling a real-world problem.",
    tags: ["Python", "Simulation"],
    imageUrl: null,
    imageUrlDark: null,
    githubUrl: "https://github.com/NafisMahi/CSE-412-Simulation-and-Modeling-Sessional",
    websiteUrl: "",
  },
  {
    title: "Non-invasive Mechanical Ventilator",
    description:
      "A cost-effective non-invasive ventilator built around a microcontroller, designed and implemented as a hardware course project.",
    tags: ["Arduino", "Embedded Systems"],
    imageUrl: null,
    imageUrlDark: null,
    githubUrl: "",
    websiteUrl: "",
  },
] as const;

export const socialsData = {
  github: { url: "https://github.com/NafisMahi" },
  linkedin: { url: "https://www.linkedin.com/in/nafis-karim-bb95a01b0/" },
  email: { address: "nafiskarim1999@gmail.com" },
} as const;
