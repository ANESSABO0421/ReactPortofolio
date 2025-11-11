// src/components/SectionWrapper.jsx
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, children, className = '' }) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto h-full">{children}</div>
    </motion.section>
  );
};

export default SectionWrapper;