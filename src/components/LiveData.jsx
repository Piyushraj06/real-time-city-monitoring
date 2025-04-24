import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const LiveData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      setData([
        {
          city: "London",
          aqi: 245,
          pm25: 198,
          no2: 34,
          timestamp: new Date().toISOString(),
        },
        {
          city: "New York",
          aqi: 178,
          pm25: 142,
          no2: 28,
          timestamp: new Date().toISOString(),
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  // Function to get AQI color
  const getAqiColor = (aqi) => {
    if (aqi > 300) return "bg-red-600 text-white"; // Hazardous
    if (aqi > 200) return "bg-orange-500 text-white"; // Unhealthy
    if (aqi > 100) return "bg-yellow-500 text-black"; // Moderate
    return "bg-green-500 text-white"; // Good
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-6 py-8"
    >
      <h1 className="text-4xl font-bold text-black-900 text-center mb-8">
        Live Pollution Data Stream
      </h1>

      {/* Show Loader While Fetching Data */}
      {loading ? (
        <div className="flex justify-center">
          <PulseLoader color="#6b46c1" size={12} />
        </div>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {data.map((item, index) => (
            <motion.div
              key={item.city}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-purple-300 w-72 hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-semibold text-purple-900">
                    {item.city}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {new Date(item.timestamp).toLocaleString()}
                  </p>
                </div>
                <span
                  className={`text-xl font-bold px-3 py-1 rounded-full ${getAqiColor(
                    item.aqi
                  )}`}
                >
                  AQI: {item.aqi}
                </span>
              </div>

              {/* Pollution Data Grid */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">PM2.5</p>
                  <p className="text-xl font-semibold text-purple-900">
                    {item.pm25} µg/m³
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">PM10</p>
                  <p className="text-xl font-semibold text-purple-900">
                    {(item.pm25 * 1.2).toFixed(1)} µg/m³
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">NO₂</p>
                  <p className="text-xl font-semibold text-purple-900">
                    {item.no2} ppb
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Ozone</p>
                  <p className="text-xl font-semibold text-purple-900">
                    {(item.no2 * 0.5).toFixed(1)} ppb
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default LiveData;
