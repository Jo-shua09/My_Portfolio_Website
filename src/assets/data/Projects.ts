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
import boukar from "@/assets/images/boukar.png";
import benodynamic from "@/assets/images/benodynamic.png";

export const projects = [
  {
    id: "1",
    title: "Beno Dynamic Concept Website",
    description:
      "Engineered a high-performance corporate platform for Beno Dynamic Concept Nig., Nigeria's premier executive transportation and security service. This modern React application features a sleek UI, intuitive navigation, and seamless user experience, serving as a powerful digital gateway for client acquisition and showcasing the company's elite travel solutions.",
    image: benodynamic,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Lucide React", "React Router DOM", "React Hook Form", "Zod"],
    category: "Web Application",
    live: "https://benoconcept.vercel.app/",
    github: "https://github.com/Jo-shua09/Beno-Dynamic-Concept",
    type: "client",
  },
  {
    id: "2",
    title: "Judeiria - Business Consultant Website",
    description:
      "Developed a dynamic personal brand website for Jude Iria, a top-tier Business Consultant and Growth Strategist. The platform highlights professional services and client success stories through smooth Framer Motion animations, while integrating seamless consultation booking and secure communication channels to drive lead generation.",
    image: judeiria,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion", "React Router DOM", "EmailJS"],
    category: "Web Application",
    live: "https://judeiria.vercel.app",
    github: "https://github.com/Jo-shua09/Judeiria-Website",
    type: "client",
  },
  {
    id: "3",
    title: "BoukarTech - Leading Tech Solutions & Software Development Company",
    description:
      "Architected the official corporate website for BoukarTech, a leading digital transformation agency. Designed to highlight a diverse portfolio of tech solutions—from web development to digital marketing—the site employs modern React architectures and immersive animations to engage global enterprises and drive B2B partnerships.",
    image: boukar,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Lucide React", "Framer Motion", "React Router", "EmailJS"],
    category: "Web Application",
    live: "https://boukartech.vercel.app",
    github: "https://github.com/Jo-shua09/BoukarTech-Website",
    type: "client",
  },
  {
    id: "4",
    title: "Vitalink - Healthcare Management Platform",
    description:
      "A Codefest Hackathon-winning healthcare management platform connecting patients and medical professionals. Vitalink revolutionizes digital health with real-time vitals monitoring, role-based access, and a culturally-aware Gemini AI chatbot (supporting English, Pidgin, and Hausa) to provide accessible, intelligent, and seamless health insights.",
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
    id: "5",
    title: "Maglo - Financial Management Dashboard",
    description:
      "A comprehensive financial management dashboard built to simplify personal and business finance tracking. Maglo provides real-time data visualization, invoice management, and wallet monitoring through a robust React and Appwrite architecture, delivering a highly secure, intuitive, and responsive user experience.",
    image: maglo,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Appwrite", "React Query", "Recharts", "React Hook Form", "Zod"],
    category: "Web Application",
    live: "https://magloboard.vercel.app/",
    github: "https://github.com/Jo-shua09/Maglo-Finance-Dashboard",
    type: "personal",
  },
  {
    id: "6",
    title: "EnvoyRoute Global Transit",
    description:
      "Designed and developed a scalable logistics platform for EnvoyRoute Global Courier. The application streamlines complex shipping processes by allowing users to effortlessly track parcels, request detailed quotes, and manage global transit needs through an ultra-fast, accessible, and modern web interface.",
    image: envoyroute,
    tags: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS", "React Router", "React Hook Form", "Zod", "React Query"],
    category: "Web Application",
    live: "https://envoyroute.vercel.app/",
    github: "https://github.com/Jo-shua09/EnvoyRoute-Global",
    type: "personal",
  },
  {
    id: "7",
    title: "Solstice Sanctuary",
    description:
      "Crafted an immersive digital experience for Solstice Sanctuary, a luxury wellness and spa retreat. The responsive platform encapsulates the spa’s serene atmosphere, offering users an elegant interface to explore premium therapeutic treatments, read about holistic philosophies, and securely book appointments online.",
    image: solstice,
    tags: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS", "React Router"],
    category: "Web Application",
    live: "https://solstice-santuary.vercel.app",
    github: "https://github.com/Jo-shua09/solstice-santuary",
    type: "personal",
  },
  {
    id: "8",
    title: "IBLCDA CDA Street Registry",
    description:
      "Developed a centralized civic management system for the Igbogbo Baiyeku Local Council (IBLCDA). This robust street registry platform digitizes the tracking and administration of Community Development Areas (CDAs), streamlining local governance and providing citizens with accessible, transparent street information.",
    image: iblcda,
    tags: ["React", "Tailwind CSS", "Firebase", "Framer Motion", "React Hook Form"],
    category: "Web Application",
    live: "https://iblcda-cda-registry.vercel.app",
    github: "https://github.com/Jo-shua09/CDA-Street-Registry",
    type: "personal",
  },
  {
    id: "9",
    title: "Estantien - Luxury Real Estate Platform",
    description:
      "An exclusive real estate platform dedicated to high-end property discovery. Estantien offers discerning buyers a curated catalog of luxury homes, featuring advanced search filters, rich virtual tours, and a highly polished UI. The platform redefines property browsing by prioritizing elegance, speed, and personalized user journeys.",
    image: estantien,
    tags: ["React", "Tailwind CSS", "Material-UI", "Swiper", "Mockaroo", "AOS"],
    category: "Web Application",
    live: "https://estantien.vercel.app",
    github: "https://github.com/Jo-shua09/real-estate",
    type: "personal",
  },
  {
    id: "10",
    title: "Kicks - Online Sneaker & Footwear Store",
    description:
      "A full-featured e-commerce storefront specializing in premium sneakers and athletic footwear. Kicks integrates secure state management via Redux with a visually striking, mobile-first design, ensuring a frictionless shopping journey from product discovery through to an optimized checkout process.",
    image: kicks,
    tags: ["React", "Tailwind CSS", "Material-UI", "Swiper", "AOS", "Redux"],
    category: "Web Application",
    live: "https://kickss.vercel.app",
    github: "https://github.com/Jo-shua09/kicks-e-commerce",
    type: "personal",
  },
  {
    id: "11",
    title: "RentChain - Decentralized Renting & Property Management Platform",
    description:
      "A pioneering Web3 property management platform built on the Morph network. Developed collaboratively, RentChain leverages blockchain technology to decentralize and secure global rent payments. It offers landlords and tenants unmatched transparency, automated smart contract transactions, and a unified dashboard for modern property administration.",
    image: rentchain,
    tags: ["React", "Tailwind CSS"],
    category: "Web Application",
    live: "https://rent-chain.vercel.app",
    github: "https://github.com/Emmyhack/Morph-RentChain",
    type: "hackathon",
  },
  {
    id: "12",
    title: "EDMOSS - Business Growth Consulting Landing Page",
    description:
      "Engineered a high-conversion landing page for EDMOSS, a premier African business consultancy firm. The digital gateway highlights the company’s authority in strategic growth and digital transformation, utilizing compelling copy and a highly optimized, responsive design to convert enterprise leads and build trust across the continent.",
    image: edmoss,
    tags: ["React", "Tailwind CSS"],
    category: "Web Application",
    live: "https://edmoss.vercel.app",
    github: "https://github.com/Jo-shua09/Edmoss_landingPage",
    type: "client",
  },
];
