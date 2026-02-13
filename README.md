# 🚀 Lakshay Sehgal's Developer Portfolio

A modern, interactive 3D developer portfolio showcasing full-stack projects, technical expertise, and creative abilities. Built with cutting-edge web technologies including React, GSAP and TailwindCSS.

---

## 📚 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Featured Projects](#-featured-projects)
- [Experience](#-experience)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Customization](#-customization-guide)
- [Deployment](#-deployment)
- [Contact](#-contact)

---

## 🎯 Overview

A portfolio website designed to showcase my journey as a Full Stack Developer, featuring:

- **5+ Production Projects**: Real-time messaging, blockchain applications, AI platforms, and more
- **Interactive Animations**: Smooth 3D visuals, scroll-triggered effects, and micro-interactions
- **Professional Showcase**: Work experience, technical skills, and project case studies
- **Contact Integration**: Fully functional contact form for inquiries
- **Responsive Design**: Optimized for all device sizes

---

## ✨ Features

- 🎨 **3D Visual Elements**: Interactive 3D components and animations
- ⚡ **Smooth Animations**: GSAP timeline animations and scroll effects
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🎬 **Parallax Effects**: Engaging parallax background and visual depth
- 💌 **Contact Form**: EmailJS integration for direct messaging
- 🚀 **Lightning Fast**: Vite for instant development server and optimized builds
- 📊 **Project Showcase**: Detailed project cards with technologies and links
- 🏢 **Experience Timeline**: Professional experience and skills display

---

## 🛠 Tech Stack

### Frontend Core

- **React 18.2**: Modern UI library with hooks
- **Vite 6.1**: Next-generation build tool and dev server
- **TailwindCSS 4**: Utility-first CSS framework
- **React Router DOM 7**: Client-side routing

### Animation & 3D

- **GSAP 2**: Professional animation library
- **Framer Motion**: React animation library
- **Lucide React**: Icon library
- **Cobe**: Interactive globe component
- **maath**: Mathematical utilities for animations

### Utilities & Integration

- **EmailJS**: Email form submission
- **React Responsive**: Responsive design utilities
- **Motion**: Animation framework

### Development Tools

- **ESLint**: Code quality and style enforcement
- **Tailwind CSS Vite**: TailwindCSS plugin for Vite

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── assets/
│       ├── logos/          # Technology logos
│       ├── projects/       # Project screenshots
│       └── socials/        # Social media icons
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── icons/          # SVG icon components
│   │   ├── Alert.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Loader.jsx
│   │   ├── Marquee.jsx
│   │   ├── Particles.jsx
│   │   ├── Timeline.jsx
│   │   └── ...
│   ├── sections/           # Page sections
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # About/Skills section
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Experiences.jsx # Work experience
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer
│   ├── constants/          # Data constants
│   │   └── index.js        # Projects, experiences, skills data
│   ├── lib/
│   │   └── util.js         # Utility functions
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles & Tailwind
│   └── main.jsx            # Entry point
├── eslint.config.js        # ESLint configuration
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # TailwindCSS configuration
├── package.json            # Dependencies
└── index.html              # HTML entry point
```

---

## 🎯 Featured Projects

### 1. **Chatty - Real-Time Messaging App**

A WhatsApp-like real-time chat application supporting instant messaging and live updates using WebSockets.

- **Tech**: TypeScript, React, Express, WebSockets
- **Live**: [chatty-6.netlify.app](https://chatty-6.netlify.app/)
- **Highlights**:
  - WebSocket-based real-time messaging
  - Live user status updates
  - Dynamic chat UI with conversation management
  - Persistent chat history

### 2. **VeriFy - Certificate Verification Platform**

A blockchain-based platform to verify academic certificates and degrees, preventing forgery.

- **Tech**: Blockchain, React, Solidity, TailwindCSS, NodeJS
- **Live**: [verify-v1.netlify.app](https://verify-v1.netlify.app/)
- **Highlights**:
  - Tamper-proof verification system
  - On-chain certificate hashes
  - Role-based access control
  - Real-time verification interface

### 3. **AI Studio - Multi-Tool AI Platform**

An AI-powered web application offering content generation and image utilities.

- **Tech**: React, TypeScript, Gemini API, Clerk, TailwindCSS
- **Live**: [quick-ai.netlify.app](https://quick-ai.netlify.app/)
- **Highlights**:
  - Blog/article generation
  - AI image generation and manipulation
  - Authentication with Clerk
  - Subscription management
  - Community sharing features

### 4. **Zentry - Gaming Experience Website**

A highly animated gaming website with cinematic landing experience.

- **Tech**: React, JavaScript, GSAP, TailwindCSS
- **Live**: [gaming-zentry.netlify.app](https://gaming-zentry.netlify.app/)
- **Highlights**:
  - Complex clip-path and parallax effects
  - Timeline-based GSAP animations
  - Video reveal effects
  - Micro-interactions and visual storytelling
  - Fully responsive

### 5. **CrowdFund - Decentralized Funding Platform**

A blockchain-based crowdfunding platform using Ethereum smart contracts.

- **Tech**: Solidity, Ethereum, React, Web3
- **Live**: [crownfund.netlify.app](https://crownfund.netlify.app/)
- **Highlights**:
  - Smart contract development
  - Secure ETH contributions
  - Wallet integration
  - Trustless fund transfers
  - Transparent donation tracking

---

## 💼 Experience

### Software Development Intern

**NDV Techsys** | 2025

- Implemented background worker system for asynchronous task handling
- Developed AI interview feature using Vapi for real-time conversational simulations
- Built resume analysis and learning roadmap generation tools
- Created 1:1 expert connect module for live mentorship sessions
- Integrated Razorpay payment gateway for secure transactions
- Designed expert slot booking system with availability management

### Full Stack Developer

**Personal Projects & Hackathons** | 2024-Present

- Developed multiple production full-stack applications
- Built smart contracts and integrated web3 wallet interactions
- Implemented WebSocket-based real-time communication systems
- Focused on scalable backend architecture and intuitive frontend design

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/lakshaysehgal/portfolio.git
cd Portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Create environment file** (if needed for EmailJS)

```bash
cp .env.example .env
```

4. **Start development server**

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

---

## 💻 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

### Project Organization

- **Constants**: All data (projects, experiences, skills) is centralized in `src/constants/index.js` for easy updates
- **Components**: Reusable UI components in `src/components/`
- **Sections**: Page sections in `src/sections/` (Hero, About, Projects, etc.)
- **Styling**: TailwindCSS with custom configuration in `tailwind.config.js`

---

## 🎨 Customization Guide

### Update Profile Information

Edit `src/constants/index.js` to update:

```javascript
// Add/modify projects
export const myProjects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    subDescription: ["details..."],
    href: "https://project-link.com",
    image: "/assets/projects/image.png",
    tags: [
      /* technology tags */
    ],
  },
  // ...
];

// Add/modify experience
export const experiences = [
  {
    title: "Your Role",
    job: "Company Name",
    date: "2024",
    contents: ["achievement 1", "achievement 2"],
  },
  // ...
];
```

### Customize Styling

1. **Colors & Theme**: `tailwind.config.js` - customize colors, fonts, spacing
2. **Global Styles**: `src/index.css` - modify global CSS and animations
3. **Component Styles**: Update individual component files

### Update Contact Information

The contact form is integrated with EmailJS. To set it up:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Update your EmailJS credentials in the Contact component
3. Configure your email service and template

### Add New Sections

1. Create component in `src/sections/YourSection.jsx`
2. Import and add to `src/App.jsx`
3. Style with TailwindCSS

---

## 📦 Deployment

### Deploy to Netlify

1. **Build the project**

```bash
npm run build
```

2. **Connect to Netlify**
   - Push to GitHub
   - Connect repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. **Environment Variables**
   - Add any required environment variables in Netlify dashboard

### Deploy to Vercel

1. **Install Vercel CLI**

```bash
npm i -g vercel
```

2. **Deploy**

```bash
vercel
```

3. **Connect GitHub for automatic deployments**

### Other Hosting Options

- GitHub Pages
- AWS Amplify
- Firebase Hosting

---

## 📝 License

This project is open source and available under the MIT License.

---

## 📬 Contact

Feel free to reach out for collaborations, opportunities, or just a chat!

- **Email**: sehgall333@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/lakshay-sehgal-a9b426309/
- **GitHub**:https://github.com/Lakshaysehgal01

---

## 🙏 Acknowledgments

- Inspired by modern web design trends and creative developer portfolios
- Icons from Lucide React
- Animations powered by GSAP and Framer Motion
- Built with React and TailwindCSS

---

**Last Updated**: February 2026
**Portfolio Version**: 1.0.0
👉 What should I build next?

- A beautiful Landing Page

- A complete E-commerce site

- A fun App Clone (YouTube, Netflix, etc.)

Or another interactive Portfolio

Let me know!

---