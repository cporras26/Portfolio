// this comtains the data we are gonna for AboutMe component and slider component 

export const AboutData = [
  {
    count: 1,
    title: "UI / UX Designer",
    img: "/first.svg",
    array: [
      "Information Architecture",
      "Pen and Paper",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "Framer",
      "Typography / Spacing / ..."
    ]
  },
  {
    count: 2,
    title: "Front-end Developer",
    img: "/second.svg",
    array: [
      "HTML / CSS3",
      "javaScript (ES6)",
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "Bootstrap",
      "REST API / GraphQL"
    ]
  },
  {
    count: 3,
    title: "Back-end Developer",
    img: "/third.svg",
    array: [
      "NodeJS / Express.js",
      "MongoDB / MySQL / MSSQL",
      "Next.js (API)",
      "PHP",
      "WordPress Theme Dev",
      "WordPress Plugin Dev.",
      "ASP (Once upon a time)"
    ]
  },
  {
    count: 4,
    title: "DevOps and Admin",
    img: "/fourth.svg",
    array: [
      "Docker / CI CD",
      "Apache / Nginx",
      "CentOS / Ubuntu",
      "Windows Server / IIS",
      "Mail Servers / DNS Servers",
      "Firewalls / Security",
      "VMWare ESXi"
    ]
  },
  {
    count: 5,
    title: "CMS and Headless CMS",
    img: "/fifth.svg",
    array: [
      "Contentful",
      "GraphCMS",
      "Strapi",
      "WordPress (Gutenberg)",
      "Directus",
      "Sanity",
      "SiteBaan (My Own)"
    ]
  },
  {
    count: 6,
    title: "Tools and Things",
    img: "/sisxth.svg",
    array: [
      "VSCode",
      "Git / Github",
      "Bash / Powershell",
      "NPM / Yarn",
      "Plesk Control Panel",
      "Vercel / Stormkit / Netlify",
      "Postman / Insomnia"
    ]
  }
];


// this is for the slider 
export const DataArray = [
  {
    name: "Carsties",
    description: "This application simulates a car bidding service. It was made following the microservices architecture in which the back-end solution is composed of five microservices and a client app created in NextJS (styled with TailwindCSS). For authentication the application uses Duende IdentityService which follows the OAuth2.0 and OpenID Connect protocols. This was the project build thanks to the microservices course by Neil Cummings.",
    image: "/carstiesImage.png",
    tags: ["NetCore", "NextJS", "Tailwind"],
    info: "These services communicate asynchronously using a rabbitmq service bus and synchronously using gRPC. Some of them use a postgreSQL database and others mongo. So these show the flexibility that microservices can bring. The client talks to a gateway service which serves as a reverse-proxy and routes the calls to the corresponding API. Also SignalR is implemented to show some real-time events in the client.",
    github: "https://github.com/cporras26/Carsties",
    demo: "google.com"
  },
  {
    name: "The Wild Oasis",
    description: "This project was made for simulating an internal website used by the staff of a company which business model is to offer vacation cabins to customers. It uses Supabase as a back-end open source tool which offers a PostgresDB, Authentication, and instant APIs. It uses React Query for Remote State, the Context API for UI State, React Hook Form for form management and React Router for routing. This was the final project from the React course by Jonas Schmedtmann.",
    image: "/theWildOasisImage.png",
    tags: ["REACT", "STYLED COMPONENTS", "SUPABASE"],
    github: "https://github.com/cporras26/the-wild-oasis",
    demo: "https://the-wild-oasis-cporras.netlify.app/login"
  },
  {
    name: "Omnifood",
    description: "This project was made using HTML, CSS and Javascript simulating a landing page for a company which is in charge of delivering healthy meals to their clients. The website is fully responsive for the different viewports. This project is the result of finishing the course about HTML & CSS from Jonas Schmedtmann. There is a little bit of Javascript included for some animations in the website.",
    image: "/omnifoodImage.png",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/cporras26/omnifood",
    demo: "https://omnifood-cporras.netlify.app"
  },
  {
    name: "Fast React Pizza Co.",
    description: "This project was made for simulating an application in which users could order pizzas online and then the payment will be done once the driver arrived to the destination. It uses React Router for Remote State Management and Routing, Redux for UI State Management and Tailwind CSS for styling (it is completely responsive). This was the first project from the React course by Jonas Schmedtmann and it focused mostly on learning Redux and Tailwind.",
    image: "/fastReactImage.png",
    tags: ["React", "Tailwind"],
    github: "https://github.com/cporras26/fast-react-pizza",
    demo: "https://fast-react-pizza-cporras.netlify.app"
  },
  {
    name: "Forkify",
    description: "This was the final project from the Complete Javascript course by Jonas Schmedtmann where he explains and emphasizes about every single aspect of Javascript, and how it works behind the scenes. This project was built following the MVC Architecture and it consumes an already existing API. This application allows users to search for recipes, create own ones and also bookmark favorite recipes.",
    image: "/forkifyImage.png",
    tags: ["JAVASCRIPT"],
    github: "https://github.com/cporras26/forkify",
    demo: "https://forkify-cporras.netlify.app"
  },
  {
    name: "Natours",
    description: "This project was made using only HTML and CSS to simulate the landing page of a company which offers tours in nature. The purpose of this project was to create all the effects using only CSS and no Javascript at all and explore some interesting css properties and animations/effects. The overall layout was made using Floats. This was the first out of three projects from the Advanced CSS course from Jonas Schmedtmann.",
    image: "/natoursImage.png",
    tags: ["HTML", "CSS"],
    github: "https://github.com/cporras26/Natours",
    demo: "https://natours-cporras.netlify.app"
  },
  {
    name: "Trillo",
    description: "This project was made using only HTML and CSS. The purpose of this project was to learn in depth how flexbox works and also use some new css properties, so the overall layout of the website was built using flexbox. The website is fully responsive, by taking advantage of flexbox properties too. This was the second out of three projects from the Advanced CSS course from Jonas Schmedtmann.",
    image: "/trilloImage.png",
    tags: ["HTML", "CSS"],
    github: "https://github.com/cporras26/trillo",
    demo: "https://trillo-cporras.netlify.app/#"
  },
  {
    name: "Nexter",
    description: "This project was made using only HTML and CSS. The purpose of this project was to learn in depth how flexbox works and also use some new css properties, so the overall layout of the website was built using flexbox. The website is fully responsive, by taking advantage of flexbox properties too. This was the second out of three projects from the Advanced CSS course from Jonas Schmedtmann.",
    image: "/nexterImage.png",
    tags: ["HTML", "CSS"],
    github: "https://github.com/cporras26/nexter",
    demo: "https://nexter-cporras.netlify.app"
  }
];
