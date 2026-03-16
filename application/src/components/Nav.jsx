import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function Nav() {
  const { language } = useLanguage();
  const { theme } = useTheme(); // ThemeContext für Dark Mode
  const [open, setOpen] = useState(false);

  const linkClass = "hover:underline transition";
  const activeClass = "underline font-semibold";

  const links = [
    { to: "/", label: language === "de" ? "Startseite" : "Home" },
    { to: "/projects", label: language === "de" ? "Projekte" : "Projects" },
    { to: "/about", label: language === "de" ? "Über mich" : "About" },
  ];

  // 🔹 Mobile Menu schließen, wenn Theme geändert wird
  useEffect(() => {
    setOpen(false);
  }, [theme]);

  return (
    <nav className="relative">
      <div className="hidden md:flex gap-6 font-medium items-center">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <button
        className="md:hidden text-2xl"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute left-0 mt-4 flex flex-col gap-4  bg-white dark:bg-gray-800 p-4 shadow-md rounded-md md:hidden min-w-[110px] z-50">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
