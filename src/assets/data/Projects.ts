import vitalink from "@/assets/images/vitalink.png";
import maglo from "@/assets/images/maglo.jpeg";
import iblcda from "@/assets/images/iblcda.jpg";
import estantien from "@/assets/images/estantien.jpg";
import kicks from "@/assets/images/kickss.jpg";
import rentchain from "@/assets/images/rent-chain.jpg";
import edmoss from "@/assets/images/edmoss.jpg";
import solstice from "@/assets/images/solstice.png";
import envoyroute from "@/assets/images/envoyroute.png";
import judeiria from "@/assets/images/judeiria.jpeg";
import boukar from "@/assets/images/boukar.jpeg";
import benodynamic from "@/assets/images/benodynamic.png";

export const projects = [
  {
    id: "1",
    title: "Judeiria - Business Consultant Website",
    description:
      "A modern, responsive website for Jude Iria, a Business Consultant, Career Coach, and Brand & Growth Strategist. The site showcases services, testimonials, and provides an easy way for clients to book consultations and get in touch. Built with React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Framer Motion, React Router DOM, and EmailJS for contact integration.",
    image: judeiria,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion", "React Router DOM", "EmailJS"],
    category: "Web Application",
    live: "https://judeiria.vercel.app",
    github: "https://github.com/Jo-shua09/Judeiria-Website",
    type: "client",
  },
  {
    id: "2",
    title: "BoukarTech - Leading Tech Solutions & Software Development Company",
    description:
      "BoukarTech is a cutting-edge technology company specializing in software development, web applications, mobile apps, and digital transformation solutions. Based in Lagos, Nigeria, we empower businesses worldwide with innovative technology and creative excellence. Services include software development, web development, mobile app development, livestreaming solutions, graphic design, video editing, hosting & domain services, and ads specialist. Built with React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Lucide React, Framer Motion, React Router, and EmailJS.",
    image: boukar,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Lucide React", "Framer Motion", "React Router", "EmailJS"],
    category: "Web Application",
    live: "https://boukartech.vercel.app",
    github: "https://github.com/Jo-shua09/BoukarTech-Website",
    type: "client",
  },
  {
    id: "3",
    title: "Vitalink - Healthcare Management Platform",
    description:
      "A comprehensive healthcare management platform built with React, TypeScript, and Vite that connects patients and doctors through an intuitive web interface. Vitalink enables seamless health monitoring, patient management, and AI-powered health insights. This winning hackathon project from Codefest features role-based authentication, real-time vital monitoring, and a culturally aware multilingual AI chatbot supporting English, Pidgin, and Hausa.",
    image: vitalink,
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "React Query",
      "Recharts",
      "React Hook Form",
      "Zod",
      "Google Gemini AI",
    ],
    category: "Web Application",
    live: "https://vitalink-indol.vercel.app/",
    github: "https://github.com/CHIDI00/submissions/tree/main/team-32-Vitalink",
    type: "hackathon",
  },
  {
    id: "4",
    title: "Maglo - Financial Management Dashboard",
    description:
      "Maglo Finance Dashboard is a modern, responsive financial management web application designed to help users track their financial transactions, manage invoices, and monitor wallet balances. Built with React and TypeScript, it features a clean, intuitive interface with real-time data visualization and robust state management.",
    image: maglo,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Appwrite", "React Query", "Recharts", "React Hook Form", "Zod"],
    category: "Web Application",
    live: "https://magloboard.vercel.app/",
    github: "https://github.com/Jo-shua09/Maglo-Finance-Dashboard",
    type: "personal",
  },
  {
    id: "5",
    title: "EnvoyRoute Global Transit",
    description:
      "A comprehensive, modern React-based web application for EnvoyRoute Global Courier & Logistics Service. This platform provides a seamless user experience for customers to explore services, request quotes, track shipments, and manage logistics needs. Built with cutting-edge technologies to ensure fast performance, accessibility, and scalability.",
    image: envoyroute,
    tags: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS", "React Router", "React Hook Form", "Zod", "React Query"],
    category: "Web Application",
    live: "https://envoyroute.vercel.app/",
    github: "https://github.com/Jo-shua09/EnvoyRoute-Global",
    type: "personal",
  },
  {
    id: "6",
    title: "Solstice Sanctuary",
    description:
      "A modern, responsive website for Solstice Sanctuary, a luxurious spa offering a variety of wellness services including massages, facials, hydrotherapy, and body treatments. The site provides an immersive experience to book appointments, explore services, and learn about the spa's philosophy.",
    image: solstice,
    tags: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS", "React Router"],
    category: "Web Application",
    live: "https://solstice-santuary.vercel.app",
    github: "https://github.com/Jo-shua09/solstice-santuary",
    type: "personal",
  },
  {
    id: "7",
    title: "IBLCDA CDA Street Registry",
    description:
      "A comprehensive web platform for the Igbogbo Baiyeku Local Council Development Association (IBLCDA) CDA, Street Registry. This system provides a centralized database for managing and tracking Community Development Area (CDA) street registrations, enabling efficient administration and public access to street information across various communities.",
    image: iblcda,
    tags: ["React", "Tailwind CSS", "Firebase", "Framer Motion", "React Hook Form"],
    category: "Web Application",
    live: "https://iblcda-cda-registry.vercel.app",
    github: "https://github.com/Jo-shua09/CDA-Street-Registry",
    type: "personal",
  },
  {
    id: "8",
    title: "Estantien - Luxury Real Estate Platform",
    description:
      "Estantien is a sophisticated web platform designed for luxury real estate, offering an exclusive gateway to premium properties. It provides users with advanced search capabilities, virtual tours, and a curated selection of high-end homes, apartments, and commercial properties. The platform aims to connect discerning clients with their dream properties through a seamless and personalized browsing experience.",
    image: estantien,
    tags: ["React", "Tailwind CSS", "Material-UI", "Swiper", "Mockaroo", "AOS"],
    category: "Web Application",
    live: "https://estantien.vercel.app",
    github: "https://github.com/Jo-shua09/real-estate",
    type: "personal",
  },
  {
    id: "9",
    title: "Kicks - Online Sneaker & Footwear Store",
    description:
      "Kicks is an e-commerce platform designed as a premier destination for trendy and comfortable footwear. It offers a diverse collection of the latest sneakers, boots, and athletic shoes, providing a seamless online shopping experience for customers looking for their perfect pair.",
    image: kicks,
    tags: ["React", "Tailwind CSS", "Material-UI", "Swiper", "AOS", "Redux"],
    category: "Web Application",
    live: "https://kickss.vercel.app",
    github: "https://github.com/Jo-shua09/kicks-e-commerce",
    type: "personal",
  },
  {
    id: "10",
    title: "RentChain - Decentralized Renting & Property Management Platform",
    description:
      "In collaboration with @emmyhack, Rentchain is an innovative blockchain-based web platform built on the Morph network, designed to revolutionize residential and commercial rent payments and property management. It offers a secure, transparent, and efficient solution for both landlords and tenants globally, leveraging decentralized technology to streamline transactions and interactions.",
    image: rentchain,
    tags: ["React", "Tailwind CSS"],
    category: "Web Application",
    live: "https://rent-chain.vercel.app",
    github: "https://github.com/Emmyhack/Morph-RentChain",
    type: "hackathon",
  },
  {
    id: "11",
    title: "EDMOSS - Business Growth Consulting Landing Page",
    description:
      "This project is the landing page for EDMOSS, a leading business consultancy firm based in Nigeria. The page is designed to serve as the primary digital gateway for the company, effectively showcasing its expertise in strategic growth, digital transformation, and operational excellence, specifically targeting Nigerian and broader African enterprises. It aims to establish EDMOSS as a trusted partner for businesses seeking sustainable growth and strategic advisory.",
    image: edmoss,
    tags: ["React", "Tailwind CSS"],
    category: "Web Application",
    live: "https://edmoss.vercel.app",
    github: "https://github.com/Jo-shua09/Edmoss_landingPage",
    type: "client",
  },
  {
    id: "12",
    title: "Beno Dynamic Concept Website",
    description:
      'A modern, responsive React application for Beno Dynamic Concept Nig., showcasing Nigeria\'s premier executive transportation and professionally trained security drivers. Built with cutting-edge web technologies for optimal performance and user experience.\n\n## 🌟 Features\n\n### Core Functionality\n\n- **Multi-Page Website**: Home, About, Services, and Contact pages with seamless navigation\n- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)\n- **Interactive Contact Form**: Multi-step booking form with WhatsApp integration for instant inquiries\n- **Modern UI/UX**: Glassmorphism effects, smooth animations, and professional design\n\n### Technical Features\n\n- **Type-Safe Development**: Full TypeScript implementation for robust code\n- **Fast Performance**: Vite-powered build system with optimized production builds\n- **Component Library**: shadcn/ui components for consistent, accessible UI\n- **Routing**: Client-side routing with React Router for SPA experience\n- **Form Handling**: Advanced form management with validation and error handling\n- **Toast Notifications**: User feedback with customizable toast messages\n\n### Business Features\n\n- **Service Showcase**: Detailed presentation of executive driver services\n- **Company Story**: Timeline and milestones of Beno Dynamic Concept\n- **Driver Training Info**: Comprehensive information about " Driver" training program\n- **Contact Integration**: Direct WhatsApp messaging for booking inquiries\n- **SEO Optimized**: Meta tags and structured content for search engines\n\n## 🛠️ Technologies Used\n\n### Frontend Framework\n\n- **React 18.3.1** - Modern UI library with hooks and concurrent features\n- **TypeScript 5.8.3** - Type-safe JavaScript for better development experience\n- **Vite 5.4.19** - Fast build tool and development server\n\n### UI & Styling\n\n- **Tailwind CSS 3.4.17** - Utility-first CSS framework\n- **shadcn/ui** - High-quality, accessible UI components built on Radix UI\n- **Lucide React** - Beautiful & consistent icon library\n- **Tailwind Animate** - Animation utilities for Tailwind CSS\n\n### Development Tools\n\n- **ESLint** - Code linting and formatting\n- **PostCSS** - CSS processing and optimization\n- **Autoprefixer** - Automatic CSS vendor prefixing\n\n### Additional Libraries\n\n- **React Router DOM 6.30.1** - Declarative routing for React\n- **React Hook Form 7.61.1** - Performant forms with easy validation\n- **@tanstack/react-query 5.83.0** - Powerful data synchronization for React\n- **Zod 3.25.76** - TypeScript-first schema validation\n- **date-fns 3.6.0** - Modern JavaScript date utility library',
    image: benodynamic,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Lucide React", "React Router DOM", "React Hook Form", "Zod"],
    category: "Web Application",
    live: "https://benoconcept.vercel.app/",
    github: "https://github.com/Jo-shua09/Beno-Dynamic-Concept",
    type: "client",
  },
];
