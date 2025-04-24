import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Historical = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(
    new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  );
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    // Simulated API data
    const mockData = [
      { date: "2024-03-01", aqi: 150, pm25: 65 },
      { date: "2024-03-02", aqi: 180, pm25: 82 },
      { date: "2024-03-03", aqi: 210, pm25: 95 },
      { date: "2024-03-04", aqi: 195, pm25: 88 },
      { date: "2024-03-05", aqi: 170, pm25: 78 },
    ];
    setData(mockData);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-6 py-8"
    >
      <h1 className="text-4xl font-bold text-black-900 text-center mb-8">
        Historical Air Quality Data
      </h1>

      {/* Date Picker Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-purple-300 mb-8">
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {/* From Date */}
          <div className="flex flex-col items-center">
            <label className="text-purple-700 font-semibold mb-1">From:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              maxDate={endDate} // Prevent selecting after end date
              className="bg-purple-100 text-purple-900 px-3 py-2 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* To Date */}
          <div className="flex flex-col items-center">
            <label className="text-purple-700 font-semibold mb-1">To:</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              minDate={startDate} // Prevent selecting before start date
              maxDate={new Date()} // Prevent selecting future dates
              className="bg-purple-100 text-purple-900 px-3 py-2 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="flex justify-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg border border-purple-300 w-full max-w-5xl"
        >
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#a78bfa" />
              <XAxis dataKey="date" stroke="#6b46c1" />
              <YAxis stroke="#6b46c1" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f3e8ff",
                  border: "1px solid #6b46c1",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="aqi"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={{ fill: "#6b46c1" }}
              />
              <Line
                type="monotone"
                dataKey="pm25"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={{ fill: "#6b46c1" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Historical;
