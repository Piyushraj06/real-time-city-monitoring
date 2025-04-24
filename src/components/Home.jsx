import { motion } from "framer-motion";

const Home = () => {
  const aqiData = [
    { city: "Delhi", aqi: 342, pm25: 295, status: "Hazardous" },
    { city: "Mumbai", aqi: 178, pm25: 154, status: "Unhealthy" },
    { city: "Bangalore", aqi: 95, pm25: 88, status: "Moderate" },
  ];

  const getAqiColor = (aqi) => {
    if (aqi > 300) return 'text-red-500';
    if (aqi > 200) return 'text-orange-500';
    if (aqi > 100) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-5xl font-bold text-black text-center mb-12"
        >
          🌍 Real-Time Air Quality
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aqiData.map((city, index) => (
            <motion.div
              key={city.city}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-purple-900 text-center">
                  {city.city}
                </h2>
                
                <p className={`text-5xl font-bold text-center ${getAqiColor(city.aqi)}`}>
                  {city.aqi}
                </p>

                <p className="text-lg text-purple-700 text-center font-medium">
                  {city.status}
                </p>

                <div className="h-3 bg-gray-200 rounded-full">
                  <div 
                    className={`h-full rounded-full ${getAqiColor(city.aqi).replace('text', 'bg')}`}
                    style={{ width: `${Math.min(city.aqi/4, 100)}%` }}
                  />
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-900 text-center">
                    PM2.5: <span className="font-bold">{city.pm25} µg/m³</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;