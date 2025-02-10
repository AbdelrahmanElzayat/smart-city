import React from "react";
import { motion } from "framer-motion";

const LoadingPage = ({ message = "Loading..." }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-background-dark"
    >
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-opacity-75"></div>
        <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
          {message}
        </p>
      </div>
    </motion.div>
  );
};

export default LoadingPage;
