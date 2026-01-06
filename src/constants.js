// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// // Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// // Education Section Logo's
import sliitcityuni from './assets/education_logo/CityUni.png';
import uk from './assets/education_logo/UK.png';
import skyrek from './assets/education_logo/skyrek.png';

// // Project Section Logo's
import microcctvLogo from './assets/work_logo/MCCTV.png';
import portfolio from './assets/work_logo/portfolio.png';
import ToDoList from './assets/work_logo/ToDoList.png';
import clothingShop from './assets/work_logo/Clothing_Shop.png';
import moodle from './assets/work_logo/moodle.png';
import resturant from './assets/work_logo/resturant.png';
import sdkLogo from './assets/work_logo/SDKSolutions.png';
import sdkTravelsLogo from './assets/work_logo/sdktravells.png';
import pfpLogo from './assets/work_logo/pfp.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

//   export const experiences = [
//     {
//       id: 0,
//       img: webverseLogo,
//       role: "Fullstack Developer",
//       company: "Webverse Digital",
//       date: "April 2024 - Present",
//       desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
//       skills: [
//         "HTML",
//         "CSS",
//         "JavaScript",
//         "React JS",
//         "TypeScript",
//         "Node JS",
//         "Tailwind CSS",
//         "MongoDb",
//         "Redux",
//         " Next Js",
//       ],
//     },
//     {
//       id: 1,
//       img: agcLogo,
//       role: "Fullstack Engineer",
//       company: "Agumentik Group of Companies",
//       date: "July 2023 - March 2024",
//       desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
//       skills: [
//         "ReactJS",
//         "Redux",
//         "JavaScript",
//         "Tailwind CSS",
//         "HTML",
//         "CSS",
//         "SQL",
//       ],
//     },
//     {
//       id: 2,
//       img: newtonschoolLogo,
//       role: "Frontend Intern",
//       company: "Newton School",
//       date: "September 2021 - August 2022",
//       desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
//       skills: [
//         "HTML",
//         "CSS",
//         "Javascript",
//         "Bootstrap",
//         "Figma",
//         "Material UI",
//       ],
//     },
//   ];
  
  export const education = [
    {
      id: 0,
      img: uk,
      school: "University Of Bedfordshire, UK",
      date: "2025-2026",
      // grade: "73.2%",
      desc: "I am currently pursuing my BSc (Hons) in Computer Science and Software Engineering at the University of Bedfordshire, UK, and I am in my third year of study. This program has provided me with in-depth knowledge of computer science principles and advanced software engineering methodologies. I have studied modules such as Software Development, Web Engineering, Database Management, Computer Networks, Artificial Intelligence, and Project Management. The course emphasizes both theoretical learning and practical application, allowing me to strengthen my coding, analytical, and problem-solving skills. Being part of an international academic environment has also enhanced my adaptability, communication, and teamwork abilities, preparing me for a successful career in the tech industry.",
      degree: "Bsc (Hons) Computer Science and Software Engineering",
    },
     {
      id: 0,
      img: sliitcityuni,
      school: "SLIIT City University, Sri Lanka",
      date: "2023-2025",
      // grade: "7.81 CGPA",
      desc: "I have completed my Higher Diploma in Information Technology from SLIIT City University. Throughout my diploma, I developed a strong understanding of computer science fundamentals and modern software engineering practices. I studied core subjects such as Data Structures and Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, Web Technologies, Mobile Application Development, and Software Project Management. In addition, I gained hands-on experience through practical assignments, group projects, and real-world case studies, which improved my problem-solving, teamwork, and coding skills. My academic journey at SLIIT has significantly contributed to enhancing both my technical expertise and professional growth.",
      degree: "Higher Diploma in Information Technology",
    },
    {
      id: 2,
      img: skyrek,
      school: "SkyRek Academy, Sri Lanka",
      date: "2025",
      // grade: "78%",
      desc: "I have completed a Full Stack Web Development course (MERN Stack) at SkyRek Academy, where I gained practical experience in MongoDB, Express.js, React.js, Node.js, and version control using Git and GitHub. This course helped me build and deploy full-stack web applications efficiently.",
      degree: "Full Stack Web Development Course",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Micro CCTV Shop Web Site",
      description:
        "Micro CCTV is a professional CCTV service platform developed using the MERN (MongoDB, Express, React, Node.js) stack. It offers live camera feeds, package booking, and a customer-friendly dashboard.",
      image: microcctvLogo,
      tags: ["Reactjs", "TailwindCSS", "Expressjs", "Nodejs", "Mongodb"],
      github: "https://github.com/Sandaru03/MICRO-CCTV-PROJECT.git",
      webapp: "https://www.microcctvsecuritysolutions.store/",
    },

     {
      id: 1,
      title: "SDK Solutions Company Site",
      description:
        "SDK Solutions is a professional software development company website built to showcase services such as web development, custom software solutions, UI/UX design, and digital solutions. The platform is developed using modern technologies with a clean, responsive, and business-focused design.",
      image: sdkLogo,
      tags: ["Reactjs", "TailwindCSS", "Nextjs"],
      github: "https://github.com/Sandaru03/SDK-Solutions.git",
      webapp: "https://www.sdksolutions.site",
    },


     {
      id: 2,
      title: "SDK Travells",
      description:
        "SDK Travels is a modern travel and tour booking platform developed using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to explore Sri Lanka tour packages, accommodations, and make online bookings through a user-friendly dashboard.",
      image: sdkTravelsLogo,
      tags: ["Reactjs", "TailwindCSS", "Expressjs", "Nodejs", "Mongodb"],
      github: "https://github.com/Sandaru03/SDK-travels-frontend.git",
      webapp: "https://sdk-travels-frontend.vercel.app",
    },

     {
      id: 3,
      title: "PFP Frontend Developmnent",
      description:
        "PFP Frontend Development is a modern, responsive web interface built using React.js and Tailwind CSS. It focuses on clean UI design, smooth user experience, and performance optimization, delivering a visually appealing and user-friendly frontend solution suitable for marketing and business platforms.",
      image: pfpLogo,
      tags: ["Reactjs", "TailwindCSS"],
      github: "https://github.com/Sandaru03/SDK-SOLUTION-PFP-FE-DEVELOPMENT.git",
      webapp: "https://sdk-solution-pfp-frontend-developme.vercel.app",
    },

    {
      id: 4,
      title: "Portfolio Website",
      description:
        "This portfolio website is designed with React.js and styled using Tailwind CSS, ensuring a fast, clean, and responsive user experience. It highlights personal skills, projects, and achievements with an intuitive interface, making it easy for visitors, clients, and recruiters to explore professional work.",
      image: portfolio,
      tags: ["Reactjs", "TailwindCSS"],
      github: "https://github.com/Sandaru03/Portfolio-Website.git",
      webapp: "https://sandarudilshan.com/",

      
    },
    {
      id: 5,
      title: "ToDo List Web Application",
      description:
      "This ToDo List web application is built with React.js and styled with Bootstrap, offering a responsive and user-friendly interface. The backend uses Express.js, Node.js, and MongoDB, enabling users to efficiently create, update, and manage tasks with features like search and filtering.",       image: ToDoList,
      tags: ["Reactjs", "Bootstrap", "Expressjs", "Nodejs", "Mongodb"],
      github: "https://github.com/Sandaru03",
      webapp: "https://to-do-list-frontend-weld-nine.vercel.app/",

      
    },
    {
      id: 6,
      title: "Novathread Clothing Shop Web Site",
      description:
        "Novathread is an elegant clothing shop website developed using HTML, CSS, PHP, and MySQL. It provides customers with a smooth shopping experience, featuring product browsing, cart management, and secure checkout. The platform combines simplicity with functionality to create a reliable e-commerce solution.",
      image: clothingShop,
      tags: ["HTML", "CSS", "PHP", "MySql"],
      github: "https://github.com/Sandaru03/Novathread-Clothing-Website.git"
     
    },

    {
      id: 7,
      title: "Lanka Flavors Restaurant Web Site",
      description:
        "Lanka Flavors is a restaurant website developed using PHP, CodeIgniter, HTML, and CSS. The website features an interactive menu, online ordering system, and a modern responsive design tailored for an enhanced customer experience.",
      image: resturant,
      tags: ["PHP", "CodeIgniter", "HTML", "CSS"],
      github: "https://github.com/Sandaru03/Lanka-Flavors-Resturant-Website.git"
    },

    {
      id: 8 ,
      title: "SLIIT City Uni Moodle Recreation",
      description:
        "SLIIT City Uni Moodle Recreation is a UI/UX project designed in Figma to reimagine the university’s Moodle platform with a modern and user-friendly interface. The design focuses on simplicity, accessibility, and better navigation to enhance the student learning experience.",
      image: moodle,
      tags: ["Figma"]
    },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
 
  ];  


