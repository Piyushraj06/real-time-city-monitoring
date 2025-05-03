import { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from "recharts";

// Mock API function for demo
const fetchCityAQI = async (city) => {
  return {
    city,
    pm25: Math.floor(Math.random() * 200) + 50,
    pm10: Math.floor(Math.random() * 200) + 50,
    no2: Math.floor(Math.random() * 50) + 5,
  };
};

// Cities array (shortened for demo)
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

export default function AnalyticsDashboard() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const citiesPerPage = 12;
  const totalPages = Math.ceil(cities.length / citiesPerPage);

  const getCurrentCities = () => {
    const start = currentPage * citiesPerPage;
    const end = start + citiesPerPage;
    return cities.slice(start, end);
  };

  useEffect(() => {
    const loadCurrentPageData = async () => {
      const currentCities = getCurrentCities();
      const results = await Promise.all(currentCities.map(fetchCityAQI));
      setData(results.filter(Boolean));
    };
    loadCurrentPageData();
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6a11cb] via-[#e9b4d6] to-[#ff758c] p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl text-center py-8">
        <h1 className="text-5xl font-bold text-white mb-6">Analytics Dashboard</h1>

        {/* PM2.5 Chart */}
        <div className="bg-white rounded-xl p-6 mb-6 w-full shadow">
          <h2 className="text-2xl font-bold text-left text-gray-800 mb-4">PM2.5 Levels</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="pm25" fill="#6b46c1" name="PM2.5" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PM10 Chart */}
        <div className="bg-white rounded-xl p-6 mb-6 w-full shadow">
          <h2 className="text-2xl font-bold text-left text-gray-800 mb-4">PM10 Levels</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="pm10" fill="#f59e0b" name="PM10" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* NO₂ Chart */}
        <div className="bg-white rounded-xl p-6 mb-6 w-full shadow">
          <h2 className="text-2xl font-bold text-left text-gray-800 mb-4">NO₂ Levels</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" />
              <YAxis domain={[0, 60]} />
              <Tooltip />
              <Bar dataKey="no2" fill="#f56565" name="NO₂" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={goToPrevPage}
            className="bg-white text-purple-800 px-4 py-2 rounded-lg font-medium shadow-md hover:bg-purple-100 transition-colors"
          >
            Previous
          </button>

          <span className="text-white font-medium">
            Page {currentPage + 1} of {totalPages}
          </span>

          <button
            onClick={goToNextPage}
            className="bg-white text-purple-800 px-4 py-2 rounded-lg font-medium shadow-md hover:bg-purple-100 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
