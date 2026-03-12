import { NavLink } from "react-router-dom";

const linkClass = "hover:underline transition";

const activeClass = "underline font-semibold";

export default function Nav() {
  return (
    <nav className="flex gap-6 font-medium">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        Projects
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        About
      </NavLink>
    </nav>
  );
}
