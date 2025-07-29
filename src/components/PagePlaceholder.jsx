
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const PagePlaceholder = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center p-8 bg-gray-50"
    >
      <Wrench className="h-16 w-16 text-yellow-500 mb-6" />
      <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">{title}</h1>
      <p className="max-w-md text-lg text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

export default PagePlaceholder;
  