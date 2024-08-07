// components/FloatingCursor.js
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import cursor from '../../../public/assets/cursor.png';
import Image from "next/image";

const getRandomPosition = () => {
  if (typeof window !== 'undefined') {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return { x, y };
  }
  return { x: 0, y: 0 };
};

const FloatingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPosition(getRandomPosition());
      const interval = setInterval(() => {
        setPosition(getRandomPosition());
      }, 2000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99,
      }}
    >
      <Image
        src={cursor}
        alt="cursor"
      />
    </motion.div>
  );
};

export default FloatingCursor;
