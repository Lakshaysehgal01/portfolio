export const myProjects = [
  {
    id: 1,
    title: "Chatty - Real-Time Messaging App",
    description:
      "A WhatsApp-like real-time chat application supporting instant messaging and live updates using WebSockets.",

    subDescription: [
      "Built real-time messaging using WebSockets enabling instant message delivery and live user status updates.",
      "Developed a TypeScript React frontend with dynamic chat UI and conversation management.",
      "Implemented an Express backend handling authentication, message storage, and socket connections.",
      "Designed scalable communication flow for multiple users with persistent chat history.",
    ],

    href: "https://chatty-6.netlify.app/",
    logo: "",
    image: "/assets/projects/chatty.webp",

    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/logos/typescript.webp",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/logos/express.png",
      },
      {
        id: 4,
        name: "WebSockets",
        path: "/assets/logos/socket.webp",
      },
    ],
  },
  {
    id: 2,
    title: "VeriFy - Certificate Verification Platform",
    description:
      "A blockchain-based platform to verify academic certificates and degrees, preventing forgery and enabling instant validation.",
    subDescription: [
      "Built a tamper-proof verification system where institutions issue certificates and anyone can verify authenticity instantly.",
      "Stored certificate hashes on-chain to ensure integrity while keeping actual documents secure off-chain.",
      "Implemented role-based access for institutions and verifiers to manage issuance and validation workflows.",
      "Developed a responsive React frontend for uploading, issuing, and verifying certificates in real time.",
    ],
    href: "https://verify-v1.netlify.app/",
    logo: "",
    image: "/assets/projects/veriFy.webp",
    tags: [
      {
        id: 1,
        name: "Blockchain",
        path: "/assets/logos/bitcoin.webp",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Solidity",
        path: "/assets/logos/solidity.webp",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "NodeJS",
        path: "/assets/logos/typescript.webp",
      },
    ],
  },
  {
    id: 3,
    title: "AI Studio - Multi-Tool AI Platform",
    description:
      "An AI-powered web application offering content generation and image utilities with authentication and subscription support.",

    subDescription: [
      "Built multiple AI tools including blog/article generation, title creation, image generation, background removal, object removal, and resume review.",
      "Integrated Gemini API to process text and image tasks in real time.",
      "Implemented authentication and subscription management using Clerk.",
      "Created a community section where users can share and explore AI-generated images.",
    ],

    href: "https://quick-ai.netlify.app/",
    logo: "",
    image: "/assets/projects/quick-ai.webp",

    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/logos/typescript.webp",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Clerk",
        path: "/assets/logos/clerk.webp",
      },
      {
        id: 4,
        name: "Gemini",
        path: "/assets/logos/gemini.webp",
      },
    ],
  },
  {
    id: 4,
    title: "Zentry - Gaming Experience Website",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Developed a highly animated frontend using React, JavaScript, and GSAP for smooth scroll and timeline-based transitions.",
      "Implemented complex clip-path, parallax, and video reveal effects to create a cinematic landing experience.",
      "Optimized animation performance for responsiveness across devices and screen sizes.",
      "Focused on micro-interactions and visual storytelling to simulate a real game launch website feel.",
    ],
    href: "https://gaming-zentry.netlify.app/",
    logo: "",
    image: "/assets/projects/Zentry.webp",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/js.webp",
      },
      {
        id: 3,
        name: "GSAP",
        path: "/assets/logos/gsap.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 5,
    title: "CrowdFund - Decentralized Funding Platform",
    description:
      "A blockchain-based crowdfunding platform where users can create campaigns and receive funds securely using Ethereum.",

    subDescription: [
      "Built smart contracts allowing users to create and manage fundraising campaigns on-chain.",
      "Implemented secure ETH contributions with transparent tracking of donors and raised amounts.",
      "Developed a React frontend to interact with the contract using wallet connection and transaction signing.",
      "Ensured trustless payments where funds are directly transferred to campaign creators without intermediaries.",
    ],

    href: "https://crownfund.netlify.app/",
    logo: "",
    image: "/assets/projects/crownFund.webp",

    tags: [
      {
        id: 1,
        name: "Solidity",
        path: "/assets/logos/solidity.webp",
      },
      {
        id: 2,
        name: "Ethereum",
        path: "/assets/logos/eth.webp",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "Web3",
        path: "/assets/logos/web3.webp",
      },
    ],
  }

];


export const experiences = [
  {
    title: "Software Development Intern",
    job: "NDV Techsys",
    date: "2025",
    contents: [
      "Implemented a background worker system to handle asynchronous tasks and improve platform responsiveness.",
      "Developed an AI interview feature using Vapi enabling real-time conversational interview simulations.",
      "Built resume analysis and learning roadmap generation tools to guide users on skill improvement paths.",
      "Created a 1:1 expert connect module allowing users to schedule and attend live mentorship sessions.",
      "Integrated Razorpay payment gateway for secure booking and session payments.",
      "Designed an expert slot booking system similar to BookMyShow with availability management and conflict prevention.",
    ],
  },
  {
    title: "Full Stack Developer",
    job: "Personal Projects & Hackathons",
    date: "2024-Present",
    contents: [
      "Developed multiple full-stack applications including real-time chat systems, AI platforms, and blockchain-based apps.",
      "Built smart contracts and integrated wallet interactions for decentralized applications.",
      "Implemented WebSocket-based real-time communication and event-driven architectures.",
      "Focused on building scalable backends and intuitive frontend user experiences.",
    ],
  }
];
