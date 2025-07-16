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
    description:
      "This is a transparent fundraising system that cuts out middlemen. It lets beneficiaries create verified campaigns directly, while donors track contributions in real-time, ensuring 100% of funds reach their intended recipients. No leaks. No ambiguity. Just accountable giving.",
    coverImage: "/projects/fund1.png", // Replace with your actual image path
    githubLink: "https://github.com/eyobworku/Fundraiser-System",
    liveDemoLink: "https://fundraiser-system-xi.vercel.app/",
    videoSrc: "https://www.youtube.com/watch?v=W2HC3xGMrTg", // Replace with actual video ID
    images: ["/projects/fund3.png", "/projects/fund2.png"], // Replace with actual image paths
  },
  {
    id: "project2",
    title: "To PDF Covert Telegram Bot",
    cardTitle: "Convert Telegram Bot",
    description:
      "This Telegram bot converts various file formats to PDF, including images, documents, and more. It supports multiple file types and provides a seamless user experience for quick conversions.",
    coverImage: "/projects/botpdf1.png",
    githubLink: "https://github.com/eyobworku/booksBot",
    liveDemoLink: "https://t.me/Topdfcoverterbot",
    videoSrc: "https://www.youtube.com/watch?v=EVABBRfkQs0",
    images: ["/projects/botpdf1.png"],
  },
  {
    id: "project3",
    title: "Blog Website",
    cardTitle: "Blog Website",
    description:
      "A responsive blog website built with Next.js and Tailwind CSS.",
    coverImage: "/projects/blog1.png",
    githubLink: "https://github.com/eyobworku/blog-client",
    liveDemoLink: "https://blog-client-coral-zeta.vercel.app/",
    images: [
      "/projects/blog1.png",
      "/projects/blog2.png",
      "/projects/blog3.png",
    ],
  },
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
