import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Nav() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  const linkClass = "hover:underline transition";
  const activeClass = "underline font-semibold";

  const links = [
    { to: "/", label: language === "de" ? "Startseite" : "Home" },
    { to: "/projects", label: language === "de" ? "Projekte" : "Projects" },
    { to: "/about", label: language === "de" ? "Über mich" : "About" },
  ];

  return (
    <nav className="relative">
      <div className="hidden md:flex gap-6 font-medium">
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
        ☰
      </button>

      {open && (
        <div className="absolute left-0 mt-4 flex flex-col gap-4 bg-white p-4 shadow-md rounded-md md:hidden">
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
