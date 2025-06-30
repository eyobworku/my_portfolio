export interface Project {
  id: string;
  title: string;
  cardTitle: string; // For the text overlay on the card image
  description: string;
  coverImage: string; // Path relative to /public/
  githubLink?: string;
  liveDemoLink?: string;
  apiDocsLink?: string;
  videoSrc?: string; // YouTube embed URL or similar
  images?: string[]; // Paths relative to /public/ for modal gallery
}

export const projectsData: Project[] = [
  {
    id: "project1",
    title: "Fundraiser System",
    cardTitle: "Fundraiser System",
    description: "This is a transparent fundraising system that cuts out middlemen. It lets beneficiaries create verified campaigns directly, while donors track contributions in real-time, ensuring 100% of funds reach their intended recipients. No leaks. No ambiguity. Just accountable giving.",
    coverImage: "/projects/fund1.png", // Replace with your actual image path
    githubLink: "https://github.com/eyobworku/Fundraiser-System",
    liveDemoLink: "https://fundraiser-system-xi.vercel.app/",
    videoSrc: "https://www.youtube.com/watch?v=W2HC3xGMrTg", // Replace with actual video ID
    images: ['/projects/fund3.png', '/projects/fund2.png'], // Replace with actual image paths
  },
  // {
  //   id: "project2",
  //   title: "E-commerce RESTful API",
  //   cardTitle: "E-commerce API",
  //   description: "A complete backend solution for e-commerce platforms with user authentication, product management, and order processing. Built with Express.js and MongoDB.",
  //   coverImage: "/projects/main.webp",
  //   githubLink: "#",
  //   apiDocsLink: "#",
  //   videoSrc: "https://www.youtube.com/watch?v=O2qtAbP7vrw",
  //   images: ["/projects/image.jpg", "/projects/image2.jpg", "/projects/image3.jpg"],
  // },
  // {
  //   id: "project3",
  //   title: "Real-time Chat Application",
  //   cardTitle: "Real-time Chat App",
  //   description: "A real-time messaging platform with features like private chats, group conversations, and file sharing. Built with Socket.io, Express, and React.",
  //   coverImage: "/projects/image2.jpg",
  //   githubLink: "#",
  //   liveDemoLink: "#",
  //   videoSrc: "https://www.youtube.com/watch?v=O2qtAbP7vrw",
  // },
  // {
  //   id: "project4",
  //   title: "Restaurant Management System",
  //   cardTitle: "Restaurant Mgmt Sys",
  //   description: "A comprehensive system for restaurants to manage orders, reservations, and inventory. Includes a customer-facing mobile app and admin dashboard.",
  //   coverImage: "/projects/image.jpg",
  //   githubLink: "#",
  //   liveDemoLink: "#",
  // },
];