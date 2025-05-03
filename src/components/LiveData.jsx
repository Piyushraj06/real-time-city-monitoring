// src/components/LiveData.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchCityAQI } from "../api";
import { fetchCityHistoricalData } from "../components/apiHistorical";
import { PulseLoader } from "react-spinners";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from "recharts";
import PetalAnimation from "./PetalAnimation";

const cities = [
  "Delhi", "Lahore", "Kuwait City", "Dhaka", "Dakar", "Manama", "Santiago", "Baghdad", "Kolkata", "Prague",
    "Cairo", "Hanoi", "Ulaanbaatar", "Jakarta", "Beijing", "Tehran", "Mumbai", "Karachi", "Accra", "Nairobi",
    "Addis Ababa", "Lagos", "Casablanca", "Algiers", "Tashkent", "Bishkek", "Tbilisi", "Yerevan", "Baku", "Astana",
    "Sofia", "Belgrade", "Skopje", "Sarajevo", "Bucharest", "Budapest", "Warsaw", "Vilnius", "Riga", "Tallinn",
    "Helsinki", "Oslo", "Stockholm", "Copenhagen", "Amsterdam", "Brussels", "Paris", "Berlin", "Madrid", "Rome",
    "Begusarai", "Guwahati", "Delhi", "Greater Noida", "Muzaffarnagar", "Gurgaon", "Arrah", "Dadri", "Patna", 
    "Faridabad", "Noida", "Meerut", "Ghaziabad", "Rohtak", "Byrnihat", "Angul", "Balasore", "Bhubaneswar", "Katihar",
    "Bhagalpur", "Dharuhera", "Manesar", "Baghpat", "Bhiwadi", "Agartala", "Bahadurgarh", "Mullanpur", "Loni", "New Delhi", 
    "Ganganagar", "Bikaner", "Dholpur", "Hanumangarh", "Charkhi Dadri", "Araria", "Alandi", "Rajgir", "Muzaffarpur", "Saharanpur",
    "Panipat", "Yamunanagar", "Ambala", "Hisar", "Karnal", "Kurukshetra", "Rewari", "Sonipat", "Jhajjar", "Kaithal", "Palwal",
    "São Paulo", "New York", "Los Angeles", "London", "Sydney", "Hong Kong", "Tokyo", "Seoul", "Singapore", "Istanbul",
    "Moscow", "Rome", "Mexico City", "Lagos", "Buenos Aires", "Rio de Janeiro", "Cape Town", "Jakarta", "Dubai", "Bangkok",
    "Manila", "Lima", "Cairo", "Santiago", "Lagos", "Lahore", "Beijing", "Mumbai", "Karachi", "Tehran", "Bangalore", 
    "Chennai", "Ahmedabad", "Hyderabad", "Kolkata", "Pune", "Jaipur", "Surat", "Chandigarh", "Coimbatore", "Indore",
    "Nagpur", "Lucknow", "Visakhapatnam", "Bhopal", "Patna", "Vadodara", "Madurai", "Rajkot", "Kochi", "Vijayawada",
    "Guwahati", "Agra", "Noida", "Meerut", "Faridabad", "Gurgaon", "Mysore", "Bhubaneswar", "Jalandhar", "Patiala",
    "Amritsar", "Kanpur", "Firozabad", "Bikaner", "Dibrugarh", "Tirunelveli", "Kolkata", "Mangalore", "Aligarh", "Bareilly",
    "Nashik", "Jamshedpur", "Aurangabad", "Rajahmundry", "Solapur", "Raipur", "Bhilai", "Bokaro", "Ranchi", "Madhubani",
    "Siliguri", "Jammu", "Srinagar", "Udaipur", "Jodhpur", "Gaya", "Bihar Sharif", "Jalpaiguri", "Durgapur", "Rourkela",
    "Gwalior", "Muzaffarpur", "Hoshiarpur", "Amritsar", "Navi Mumbai", "Bhopal", "Satna", "Bilaspur", "Chandrapur", "Kozhikode",
    "Gandhinagar", "Nellore", "Vijayawada", "Panipat", "Tirunelveli", "Dindigul", "Rajgir", "Chhapra", "Shimla", "Haldia",
    "Bilaspur", "Chandigarh", "Kochi", "Rajkot", "Jammu", "Srinagar", "Vadodara", "Kanpur", "Patna", "Varanasi", "Nagaland",
    "Dhanbad", "Ranchi", "Rishikesh", "Haridwar", "Tezpur", "Rohtak", "Moga", "Gurgaon", "Tirupati", "Faridabad", "Navi Mumbai",
    "Chennai", "Raigad", "Vellore", "Kolkata", "Jorhat", "Shillong", "Dibrugarh", "Tirunelveli", "Aurangabad", "Shimla", 
    "Surat", "Nagpur", "Thane", "Bhubaneshwar", "Jalna", "Akola", "Kota", "Mysuru", "Gandhinagar", "Vishakhapatnam", 
    "Thiruvananthapuram", "Kochi", "Kottayam", "Alappuzha", "Pathanamthitta", "Changanassery", "Kannur", "Kasargod", "Wayanad", 
    "Malappuram", "Ernakulam", "Idukki", "Kollam", "Trichur", "Palakkad", "Kozhikode", "Muvattupuzha", "Muvattupuzha", "Ollur",
    "Kunnamkulam", "Nelliyampathy", "Changanassery", "Kattappana", "Kottayam", "Pune", "Solapur", "Bhilai", "Ranchi", "Pondicherry", 
    "Nagapattinam", "Jalgaon", "Bhopal", "Dehradun", "Shivpuri", "Chhindwara", "Mandsaur", "Betul", "Khargone", "Dewas",
    "Hoshangabad", "Sehore", "Damoh", "Sagar", "Guna", "Shahdol", "Rajgarh", "Barwani", "Mandla", "Chhatarpur", "Balaghat",
    "Alirajpur", "Jhabua", "Ujjain", "Panchgani", "Satna", "Panna", "Shahdol", "Bina", "Khandwa", "Khargone", "Sagar", 
    "Satna", "Bhopal", "Indore", "Jabalpur", "Jabalpur", "Sagar", "Ujjain", "Morena", "Bhind", "Seoni", "Betul", "Hoshangabad"
];

const getAqiColor = (aqi) => {
  if (aqi > 300) return "bg-[#dc2626] text-white"; // Red
  if (aqi > 200) return "bg-[#f97316] text-white"; // Orange
  if (aqi > 100) return "bg-[#facc15] text-black"; // Yellow
  return "bg-[#22c55e] text-white";               // Green
};

const LiveData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;

  const loadLiveData = async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await Promise.all(cities.map(fetchCityAQI));
      setData(results.filter(Boolean));
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const loadHistoricalData = async (city) => {
    try {
      const data = await fetchCityHistoricalData(city);
      setHistoricalData(data);
    } catch (err) {
      console.error("Error fetching historical data:", err);
    }
  };

  useEffect(() => {
    loadLiveData();
  }, []);

  const currentCities = data.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if ((page + 1) * itemsPerPage < data.length) setPage(page + 1);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setHistoricalData([]);
    loadHistoricalData(city);
  };

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden px-6 py-10 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        backgroundImage: "linear-gradient(to bottom right, #1e094a, #4a136f)",
      }}
    >
      <PetalAnimation />

      <h1 className="text-4xl font-bold text-center mb-12 z-10 relative ">
        Live Pollution Data Stream
      </h1>

      {loading ? (
        <div className="flex justify-center z-10 relative">
          <PulseLoader color="#c084fc" size={12} />
        </div>
      ) : error ? (
        <div className="text-center text-red-300 z-10 relative">{error}</div>
      ) : (
        <>
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-6 z-10 relative">
            {currentCities.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#fff7f3] rounded-xl shadow-md w-72 px-6 py-5 cursor-pointer hover:shadow-lg transition-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => handleCityClick(item.city)}
              >
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{item.city}</h2>
                    <div className="text-[10px] text-gray-400 mt-1">{item.time}</div>
                  </div>
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold ${getAqiColor(item.aqi)}`}>
                    {item.aqi}
                  </div>
                </div>

                {/* Icons */}
                <div className="mt-3 flex justify-center gap-1 text-lg">
                  <span>🍃</span>
                  <span>🌫️</span>
                  <span>🔥</span>
                  <span>💨</span>
                  <span>🌪️</span>
                </div>

                {/* Pollutants */}
                <div className="mt-4 flex justify-between text-xs text-gray-700">
                  <div>
                    <div className="font-bold">{item.pm25}</div>
                    <div className="text-gray-500">PM2.5</div>
                  </div>
                  <div>
                    <div className="font-bold">{item.pm10}</div>
                    <div className="text-gray-500">PM10</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-10 z-10 relative">
            <button
              className="bg-[#6b46c1] text-white px-6 py-2 rounded-lg hover:bg-[#a04138] transition disabled:opacity-40"
              onClick={handlePrev}
              disabled={page === 0}
            >
              Previous
            </button>
            <button
              className="bg-[#6b46c1] text-white px-6 py-2 rounded-lg hover:bg-[#689c6a] transition disabled:opacity-40"
              onClick={handleNext}
              disabled={(page + 1) * itemsPerPage >= data.length}
            >
              Next
            </button>
          </div>

          {/* AQI Chart */}
          {selectedCity && historicalData.length > 0 && (
            <div className="max-w-4xl mx-auto mt-16 mb-10 z-10 relative">
              <h2 className="text-xl font-semibold text-center mb-4 text-white ">
                Live AQI Chart – {selectedCity}
              </h2>
              <div className="bg-white rounded-xl p-6">
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pm25" stroke="#8884d8" strokeWidth={2} name="PM2.5" />
                    <Line type="monotone" dataKey="pm10" stroke="#82ca9d" strokeWidth={2} name="PM10" />
                    <Line type="monotone" dataKey="no2" stroke="#ff7300" strokeWidth={2} name="NO₂" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};

export default LiveData;
