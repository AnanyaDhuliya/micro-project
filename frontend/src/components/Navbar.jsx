import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/screening", label: "Screening" },
  { to: "/results", label: "Results" },
  { to: "/history", label: "History" },
  { to: "/about", label: "About" },
];

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xl font-bold">DR Screening</span>
        <ul className="flex flex-wrap gap-4">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "font-semibold underline" : "hover:underline"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;