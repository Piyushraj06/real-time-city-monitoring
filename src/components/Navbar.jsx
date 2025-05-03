// Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "📊 Power BI Dashboard", path: "/powerBi" },
    { name: "Predictive", path: "/predictive" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="bg-purple-800 text-white p-4 shadow-lg flex justify-between items-center px-6">
      <div className="text-2xl font-bold tracking-wide">🌍 Air Guard</div>
      <div className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover: text-lg font-medium px-3 py-1 rounded transition duration-300 hover:bg-green-700"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
