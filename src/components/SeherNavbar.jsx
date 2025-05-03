import { Link, useLocation } from "react-router-dom";

const SeherNavbar = () => {
  const location = useLocation();

  const tabs = [
    { path: "/seher", label: "Seher Suchna" },
    { path: "/noise", label: "Noise Pollution" },
    { path: "/water", label: "Water Pollution" },
    { path: "/", label: "Air Pollution" },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-pink-500 p-4 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">🔔 Seher Dashboard</h1>
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`text-lg font-medium ${
                location.pathname === tab.path ? "underline underline-offset-4" : "hover:opacity-80"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SeherNavbar;
