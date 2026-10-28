import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Eye, Menu, X, Languages } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/screening", key: "nav.screening" },
  { to: "/results", key: "nav.results" },
  { to: "/history", key: "nav.history" },
  { to: "/about", key: "nav.about" },
];

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition ${
    isActive
      ? "bg-teal-50 text-teal-700"
      : "text-slate-600 hover:text-teal-700 hover:bg-slate-100"
  }`;

function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-slate-900">
          <span className="bg-teal-600 text-white p-1.5 rounded-lg">
            <Eye size={20} />
          </span>
          DR Screen <span className="text-teal-600">AI</span>
        </Link>

        <nav className="hidden md:flex gap-1">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {t(link.key)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="flex items-center gap-1.5 border border-slate-300 rounded-md px-3 py-1.5 text-sm font-medium hover:bg-slate-100"
            aria-label="Switch language"
          >
            <Languages size={16} />
            {t("lang.switch")}
          </button>

          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-slate-200 bg-white px-4 py-2 flex flex-col">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {t(link.key)}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;