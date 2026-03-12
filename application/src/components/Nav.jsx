import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Nav() {
  const { language } = useLanguage();

  const linkClass = "hover:underline transition";
  const activeClass = "underline font-semibold";

  const links = [
    { to: "/", label: language === "de" ? "Startseite" : "Home" },
    { to: "/projects", label: language === "de" ? "Projekte" : "Projects" },
    { to: "/about", label: language === "de" ? "Über mich" : "About" },
  ];

  return (
    <nav className="flex gap-6 font-medium">
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
    </nav>
  );
}
