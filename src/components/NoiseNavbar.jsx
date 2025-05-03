import { Link } from "react-router-dom";

const NoiseNavbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">
          <span role="img" aria-label="noise">🔊</span> Noise Pollution
        </h1>

        <div className="flex gap-6 text-lg font-medium items-center">
          <button
            onClick={() => setActiveTab("info")}
            className={`px-4 py-1.5 rounded-full transition duration-300 ${
              activeTab === "info"
                ? "bg-white text-purple-800 font-semibold"
                : "hover:bg-purple-500 hover:text-white"
            }`}
          >
            📚 Articles & Videos
          </button>
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-1.5 rounded-full transition duration-300 ${
              activeTab === "dashboard"
                ? "bg-white text-purple-800 font-semibold"
                : "hover:bg-purple-500 hover:text-white"
            }`}
          >
            📊 Power BI Dashboard
          </button>
          <Link to="/seher" className="hover:text-yellow-300 transition">Back to Seher Suchna</Link>
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        </div>
      </div>
    </nav>
  );
};

export default NoiseNavbar;
