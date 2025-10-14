import { Link, useLocation } from "react-router-dom";
import { Home, Cog, Briefcase, User, Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/images/logo-bg.png";

const Navigation = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: Cog },
    { name: "Portfolio", path: "/portfolio", icon: Briefcase },
    { name: "About", path: "/about", icon: User },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <nav className="w-full h-fit relative px-6 flex items-center justify-between">
      <div className="w-fit h-fit md:block hidden absolute top-5 left-6">
        <img src={logo} alt="logo" className="w-24 h-fit object-contain" />
      </div>

      <div className="bg-transparent m-auto fixed top-0 left-0 right-0 z-50 w-fit h-fit">
        <div className="px-6 h-16 flex justify-center w-fit items-center border rounded-full border-b-[.2rem] bg-background/30 backdrop-blur transition-all duration-300 mx-auto my-4">
          <div className="flex items-center gap-8 md:gap-12">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {pathname === link.path ? (
                    <div>
                      <IconComponent size={26} className="text-primary md:hidden block" />
                      <span className="text-primary font-mono font-semibold text-sm md:block hidden">{link.name}</span>
                    </div>
                  ) : (
                    <IconComponent size={26} className="text-muted-foreground" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="hidden items-center gap-4 md:flex absolute top-6 right-6 z-20">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/joshua-onyeka/"
          rel="noreferrer"
          className="cursor-pointer hover:scale-110 p-2 border-2 w-fit h-fit bg-background/30 backdrop-blur transition-all duration-300 mx-auto rounded-full"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          target="_blank"
          href="https://x.com/jo_shua_9"
          rel="noreferrer"
          className="cursor-pointer hover:scale-110 p-2 border-2 w-fit h-fit bg-background/30 backdrop-blur transition-all duration-300 mx-auto rounded-full"
        >
          <FaXTwitter size={20} />
        </a>
        <a
          target="_blank"
          href="https://github.com/Jo-shua09"
          rel="noreferrer"
          className="cursor-pointer hover:scale-110 p-2 border-2 w-fit h-fit bg-background/30 backdrop-blur transition-all duration-300 mx-auto rounded-full"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
