// src/components/PetalAnimation.jsx
import { motion } from "framer-motion";

const generatePetals = (count = 30) => {
  return Array.from({ length: count }).map((_, index) => {
    const delay = Math.random() * 5;
    const duration = 10 + Math.random() * 5;
    const size = 40 + Math.random() * 200; // Increased size
    const left = Math.random() * 100;

    return (
      <motion.img
        key={index}
        src="/petals.png"
        alt="petal"
        className="absolute"
        style={{
          width: `${size}px`,
          left: `${left}%`,
          top: "-10%",
          opacity: 0.4,
          pointerEvents: "none",
        }}
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: "110vh", rotate: 360 }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    );
  });
};

const PetalAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {generatePetals(20)}
    </div>
  );
};

export default PetalAnimation;
