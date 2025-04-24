import { motion } from "framer-motion";
import { BeakerIcon, ShieldExclamationIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const About = () => {
  const features = [
    {
      title: "Real-time Monitoring",
      description: "Track air quality parameters with 15-minute updates.",
      icon: BeakerIcon,
      color: "text-purple-500",
    },
    {
      title: "Health Alerts",
      description: "Instant notifications when air quality reaches dangerous levels.",
      icon: ShieldExclamationIcon,
      color: "text-orange-500",
    },
    {
      title: "Community Focus",
      description: "Collaborative platform for environmental awareness.",
      icon: UserGroupIcon,
      color: "text-yellow-500",
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black-900 text-center mb-8">About AirGuard</h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white p-8 rounded-lg shadow-lg border border-purple-300 mb-12"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            AirGuard is a comprehensive air quality monitoring platform designed to empower
            communities with real-time environmental data. Our system combines cutting-edge
            sensor technology with advanced analytics to provide actionable insights about
            your local air quality.
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-purple-300 text-center"
            >
              <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color}`} />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-purple-100 p-8 rounded-lg border border-purple-300 shadow-md"
        >
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To create a world where clean air is accessible to everyone through
            transparent data collection, community engagement, and actionable
            environmental insights.
          </p>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-red-600">Made with ❤️ by Environmental Warriors Piyush, Roshini and Ankit• © 2025 AirGuard</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
