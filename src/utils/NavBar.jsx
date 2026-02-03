import React from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "/team" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);

    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="ZENVY Logo" className="w-7 h-7" />
            <span className="text-2xl font-black tracking-tighter text-black dark:text-white">
              ENVY
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              >
                {link.name}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-full bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-white/10 shadow-lg hover:scale-110 transition"
            >
              {darkMode ? <Sun size={18} color="#fff" /> : <Moon size={18} />}
            </button>

            {/* CTA */}
            <Link
              to="/contact"
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-500 dark:text-gray-300"
            >
              {darkMode ? <Sun color="#fff"/> : <Moon />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-500 dark:text-gray-300"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-100 dark:border-white/10"
        >
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("/contact")}
              className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-xl font-medium"
            >
              Start a Project
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
