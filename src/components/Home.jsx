import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTree, FaTint, FaWind } from "react-icons/fa";
import { fetchCityAQI } from "../api";
import { Link } from "react-router-dom";

// Rotating eco quotes
const quotes = [
  "“The future will either be green or not at all.” – Bob Brown",
  "“Breathe clean, live green.”",
  "“Pollution is not the price of progress.” – Al Gore",
  "“Air is life, don’t make it rife.”",
  "“Let’s clear the air, together.”"
];

const precautions = [
  {
    title: "Plant More Trees",
    description: "Trees absorb pollutants and CO₂. A greener world is a cleaner world.",
    icon: <FaTree className="text-green-600 text-5xl" />,
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Avoid Polluting Water",
    description: "Cleaner water = less environmental stress. It all connects.",
    icon: <FaTint className="text-blue-500 text-5xl" />,
    image: "/src/assets/ian-talmacs-YTmNAmmO5bA-unsplash.jpg",
  },
  {
    title: "Use Clean Energy",
    description: "Electric cars, solar power, wind energy — cleaner choices for cleaner air.",
    icon: <FaWind className="text-cyan-500 text-5xl" />,
    image: "/src/assets/theo-pan-PA0AxqW6pR0-unsplash.jpg",
  },
];

const Home = () => {
  const [aqiData, setAqiData] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const loadAQI = async () => {
      const city = await fetchCityAQI("Delhi");
      if (city) setAqiData(city);
    };
    loadAQI();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000); // Slower rotation: 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-sky-50 to-white py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* 🌍 Hero Section */}
      <div className="relative bg-gradient-to-r from-sky-100 via-white to-purple-100 pt-0 pb-28 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-800 via-purple-600 to-pink-500 text-transparent bg-clip-text leading-tight mb-6 drop-shadow-xl">
            🌍 Air Guard
          </h1>

          {/* Rotating Animated Quote */}
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              className="text-xl md:text-2xl text-gray-700 font-semibold italic mb-4 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {quotes[quoteIndex]}
            </motion.p>
          </AnimatePresence>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get real-time air pollution data at your fingertips. Stay aware, stay safe — make smart, eco-conscious decisions.
          </p>
        <div className="flex gap-20 ml-45">
        <Link
            to="/live"
            className="inline-block mt-8 px-8 py-4 bg-purple-700 text-white rounded-full text-lg font-semibold hover:bg-green-800 transition-all shadow-lg hover:scale-105"
          >
            🔎 View Live AQI
          </Link>

          <Link
            to="/seher"
            className="inline-block mt-8 px-8 py-4 bg-purple-700 text-white rounded-full text-lg font-semibold hover:bg-green-800 transition-all shadow-lg hover:scale-105"
          >
            🔎 Seher Suchna Seva
          </Link>
        </div>
          
        </motion.div>
      </div>

      {/* 🌿 Precautions Section */}
      <div className="max-w-6xl mx-auto text-center mt-10 mb-12">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🌿 Simple Steps to Breathe Cleaner Air
        </motion.h2>
      </div>

      {/* 🟩 Precautions Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {precautions.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden border hover:shadow-2xl transition"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 * index }}
          >
            <img
              src={item.image}
              alt={item.title}
              onError={(e) => (e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found")}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-center text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-center mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 📊 AQI Stats Section */}
      {aqiData && (
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-20 mb-20 mt-24">
          {[
            { label: "PM2.5", value: aqiData.pm25, color: "bg-red-100 text-red-800" },
            { label: "PM10", value: aqiData.pm10, color: "bg-yellow-100 text-yellow-800" },
            { label: "NO₂", value: aqiData.no2, color: "bg-blue-100 text-blue-800" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className={`rounded-xl shadow-md p-6 text-center ${item.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * idx }}
            >
              <h4 className="text-xl font-bold">{item.label}</h4>
              <p className="text-3xl font-extrabold mt-2">{item.value ?? "--"}</p>
              <p className="text-sm">μg/m³</p>
            </motion.div>
          ))}
        </div>
      )}

      {/* 🔻 Footer */}
      <div className="mt-20 text-center text-gray-500 text-sm">
        Made with 💚 by Air Guard Team Piyush, Roshini and Ankit | Stay aware, breathe with care.
      </div>
    </motion.div>
  );
};

export default Home;
