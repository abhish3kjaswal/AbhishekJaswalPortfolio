import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  jira,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
  myAccess,
  gem,
  connectTracker,
  SwiggyClone,
  shoppingstop,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Js Developer",
    icon: web,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },

  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Backend NodeJS Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "JIRA",
    icon: jira,
  },
];

const experiences = [
  {
    title: "Software Associate Consultant",
    company_name: "INFOSYS",
    company_website: "https://www.infosys.com/",
    icon: null,
    iconBg: "#E6DEDD",
    date: "March 2024 - Present",
    points: [
      "Built scalable frontend solutions using React.js, Redux, and Hooks, improving performance by 25% and maintainability.",
      "Optimized Verizon MyAccess UI with modern React and styled-components, reducing load time by 15% and improving accessibility.",
      "Improved reliability using Jest testing and debugging, reducing production defects by 20% and increasing stability.",
      "Delivered features 30% faster through Agile collaboration, using Git and Jira to streamline development and releases.",
    ],
  },
  {
    title: "Systems Engineer C1",
    company_name: "Tata Consultancy Services",
    company_website: "https://www.tcs.com/",
    icon: null,
    iconBg: "#E6DEDD",
    date: "May 2023 - Nov 2023",
    points: [
      "Contributed as a Frontend Developer on the Government e-Marketplace (GeM) project using React.js, Redux, Material UI, and Jest, building scalable UI and improving performance and reliability.",
      "Resolved complex frontend issues, optimized state management, and adapted to evolving requirements, enabling efficient feature delivery in an Agile environment.",
    ],
  },
  {
    title: "Software Engineer L1",
    company_name: "BidonHomes dot com",
    company_website: "https://www.bidonhomes.com/",
    // icon: newgen,
    icon: null,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2023",
    points: [
      "Developed and maintained scalable CRM features using React.js and Redux, improving performance and increasing agent productivity by 40–50%.",
      "Optimized Google Maps API integration and data visualization using React.js, improving system efficiency by 60–70% and delivering reliable solutions.",
    ],
  },
  {
    title: "Associate Consultant",
    company_name: "Bristlecone",
    company_website: "https://www.bristlecone.com/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Sept 2021",
    points: [
      "Developed and maintained PayPal and SugarCRM adapters in Oracle Integration Cloud using Java, SOAP, REST APIs, and Docker, enabling seamless third-party integrations.",
      "Delivered integration solutions using Oracle tools and Jira in cross-functional Agile teams while strengthening expertise in React.js and modern integration technologies.",
    ],
  },
];

const projects = [
  {
    name: "Verizon MyAccess",
    description:
      "Verizon myAccess Rewards is a platform offering personalized deals, exclusive event access, presale tickets, and loyalty benefits to enhance customer experience and engagement.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "jest",
        color: "blue-text-gradient",
      },
    ],
    image: myAccess,
    hosted_link: "https://www.verizon.com/my-access-rewards/",
  },
  {
    name: "Government eMarketplace",
    description:
      "Government e-Marketplace (GeM) is India’s national digital platform for transparent and efficient government procurement of goods and services.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
       {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: gem,
    hosted_link: "https://mkp.gem.gov.in/market",
  },
  {
    name: "Connect Tracker",
    description:
      "Built a full-stack social media platform to connect for jobs and references with authentication, user dashboard, connection dashboards, and admin dashboard using React.js, Node.js, Express.js, and MongoDB.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },{
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDb",
        color: "green-text-gradient",
      },
    ],
    image: connectTracker,
    hosted_link: "https://github.com/abhish3kjaswal/Connect-Tracker",
  },
  {
    name: "Swiggy Clone",
    description:
      "Food Ordering app Swiggy clone app, Developed a Swiggy-like SPA using React Hooks and Redux Toolkit with reusable components and Jest testing for scalable state management.",
    tags: [
     {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "blue-text-gradient",
      },
    ],
    image: SwiggyClone,
    hosted_link:
      "https://github.com/abhish3kjaswal/FoodAppQwiggy?tab=readme-ov-file",
  },
  {
    name: "ShoppingStop webApp",
    description:
      "The shopping web app just like amazon.com, MERN-based eCommerce web application using React, Redux, Node.js, and MongoDB for scalable frontend, backend, and state management.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },{
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDb",
        color: "green-text-gradient",
      }
    ],
    image: shoppingstop,
    hosted_link: "https://github.com/abhish3kjaswal/ShoppingStop_MERN",
  }
];

const personalInfo = {
  name: "Abhishek Jaswal",
  fullName: "Abhishek Jaswal",
  email: "abhishek.jaswal.1999@gmail.com",
  role: "Frontend Developer",
  about: `I'm a skilled Frontend Engineer with 4.8+ years of experience specializing in React.js, JavaScript, and Redux, building scalable and
high-performance web applications. Strong expertise in developing reusable UI components, optimizing application performance,
and ensuring code quality through testing and best practices. Experienced in Agile environments, collaborating with
cross-functional teams, and delivering user-centric solutions using modern technologies, including MERN stack, REST APIs, and
Git. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `The projects below highlight my experience in developing robust and scalable applications. They showcase my technical skills, problem-solving mindset, and ability to build efficient solutions using modern frameworks and best practices.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1OSEUVV4bw1lxoZcltB4aGScQONQvcg7M/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/abhishek-jaswal-170514180/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/abhish3kjaswal",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
