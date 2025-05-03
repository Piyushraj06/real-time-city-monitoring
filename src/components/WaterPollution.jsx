import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import WaterNavbar from "./WaterNavbar";

const cities = [
  { name: "Delhi", image: "/src/assets/delhi.jpg", path: "/water/delhi" },
  { name: "Pune", image: "/src/assets/pune.jpg", path: "/water/pune" },
  { name: "Vijayawada", image: "/src/assets/vijayawada.jpg", path: "/water/vijayawada" },
  { name: "Bangalore", image: "/src/assets/banglore.jpg", path: "/water/bangalore" },
  { name: "Chennai", image: "/src/assets/chennai.jpg", path: "/water/chennai" },
  { name: "Hyderabad", image: "/src/assets/hyderabad.jpg", path: "/water/hyderabad" },
  { name: "Mumbai", image: "/src/assets/mumbai.jpg", path: "/water/mumbai" },
  { name: "Kolkata", image: "/src/assets/kolkata.jpg", path: "/water/kolkata" },
  { name: "Patna", image: "/src/assets/patna.jpg", path: "/water/patna" },
  { name: "Jaipur", image: "/src/assets/jaipur.jpg", path: "/water/jaipur" },
];

const WaterPollution = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-purple-100">
      <WaterNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <AnimatePresence mode="wait">
        {activeTab === "info" ? (
          <motion.div
            key="info"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white max-w-5xl mx-auto mt-10 p-6 rounded-xl shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Live Dashboard</h2>
            <iframe
              className="w-full h-[500px] rounded shadow-md"
              src="https://app.powerbi.com/view?r=eyJrIjoiZTMwODI5MWUtOTFmMS00N2ZlLTgxYTgtZGRkNTU1NTBhZDE1IiwidCI6ImY2Yzk1ZmFiLWNhZjYtNDYwNy1hNTkzLWQyMDA0YTUwZTllOCIsImMiOjEwfQ%3D%3D"
              allowFullScreen
              title="Water Dashboard"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* City Image Grid - only visible in info tab */}
      {activeTab === "info" && (
        <div className="max-w-6xl mx-auto mt-12 px-4">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Explore City Reports</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cities.map((city) => (
              <Link to={city.path} key={city.name} className="text-center hover:scale-105 transition transform">
                <img src={city.image} alt={city.name} className="w-full h-32 object-cover rounded-lg shadow-md" />
                <p className="mt-2 font-medium text-gray-800">{city.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WaterPollution;
