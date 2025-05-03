import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NoiseNavbar from "./NoiseNavbar";
import { Link } from "react-router-dom";

const cities = [
  { name: "Delhi", image: "/assets/delhi.jpg", path: "/noise/delhi" },
  { name: "Pune", image: "/assets/pune.jpg", path: "/noise/pune" },
  { name: "Vijayawada", image: "/assets/vijayawada.jpg", path: "/noise/vijayawada" },
  { name: "Bangalore", image: "/assets/banglore.jpg", path: "/noise/bangalore" },
  { name: "Chennai", image: "/assets/chennai.jpg", path: "/noise/chennai" },
  { name: "Hyderabad", image: "/assets/hyderabad.jpg", path: "/noise/hyderabad" },
  { name: "Mumbai", image: "/assets/mumbai.jpg", path: "/noise/mumbai" },
  { name: "Kolkata", image: "/assets/kolkata.jpg", path: "/noise/kolkata" },
  { name: "Patna", image: "/assets/patna.jpg", path: "/noise/patna" },
  { name: "Jaipur", image: "/assets/jaipur.jpg", path: "/noise/jaipur" },
];

const NoisePollution = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-pink-100">
      <NoiseNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

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
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Live Dashboard</h2>
            <iframe
              className="w-full h-[500px] rounded shadow-md"
              src="https://app.powerbi.com/view?r=eyJrIjoiMTM4ZDNjYjEtZWMyYy00MzhjLWE0YmEtOTcyYjQ2YTA3NTNlIiwidCI6ImY2Yzk1ZmFiLWNhZjYtNDYwNy1hNTkzLWQyMDA0YTUwZTllOCIsImMiOjEwfQ%3D%3D"
              allowFullScreen
              title="Noise Dashboard"
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

export default NoisePollution;
