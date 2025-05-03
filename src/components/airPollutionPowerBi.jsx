import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const AirPollutionDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard"); // default to show dashboard

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Tab Buttons */}
      {/* Animate Presence */}
      <AnimatePresence mode="wait">
        {activeTab === "info" ? (
          <motion.div
            key="info"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white max-w-3xl mx-auto p-6 rounded-xl shadow-xl"
          >
            
          </motion.div>
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
              src="https://app.powerbi.com/view?r=eyJrIjoiNDUxNzQyNDMtZjEyMS00YTJjLWFkYTctNDYxNTA3ZDJkNzFjIiwidCI6ImY2Yzk1ZmFiLWNhZjYtNDYwNy1hNTkzLWQyMDA0YTUwZTllOCIsImMiOjEwfQ%3D%3D"
              allowFullScreen
              title="Air Pollution Dashboard"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AirPollutionDashboard;
