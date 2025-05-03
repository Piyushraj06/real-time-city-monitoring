import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCity, FaCloudSun, FaChartLine, FaCheckCircle } from 'react-icons/fa';

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

const PredictiveAnalysis = () => {
  const [prediction, setPrediction] = useState(null);
  const [cityInput, setCityInput] = useState('');

  const handlePredict = () => {
    const matchedCity = cities.find(
      (c) => c.toLowerCase() === cityInput.trim().toLowerCase()
    );

    if (matchedCity) {
      setPrediction({
        city: matchedCity,
        aqi: Math.floor(Math.random() * 200 + 50),
        trend: Math.random() > 0.5 ? 'rising' : 'falling',
        confidence: Math.floor(Math.random() * 10 + 90)
      });
    } else {
      alert("Please enter a valid city from the list.");
    }
  };

  // Decide full background color based on trend
  const getBodyBgColor = () => {
    if (!prediction) return 'bg-gray-100';
    return prediction.trend === 'rising' ? 'bg-red-900' : 'bg-green-900';
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${getBodyBgColor()}`}>
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto mt-1"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >

      
        <h2 className="text-2xl font-bold mb-4 text-center">Air Quality Forecast</h2>

        {/* Input Field */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Predict Button */}
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded w-full"
          onClick={handlePredict}
        >
          Predict
        </button>

        {/* Display Prediction */}
        {prediction && (
          <div className="mt-6 p-4 rounded-xl shadow-md bg-white">
            <div className="space-y-3 text-lg">
              <p className="flex items-center gap-2">
                <FaCity className="text-blue-900" /> City: <strong>{prediction.city}</strong>
              </p>
              <p className="flex items-center gap-2">
                <FaCloudSun className="text-yellow-900" /> Predicted AQI: <strong>{prediction.aqi}</strong>
              </p>
              <p className="flex items-center gap-2">
                <FaChartLine className={prediction.trend === 'rising' ? 'text-red-900' : 'text-green-900'} />
                Trend: <strong>{prediction.trend}</strong>
              </p>
              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-green-900" /> Confidence: <strong>{prediction.confidence}%</strong>
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PredictiveAnalysis;
