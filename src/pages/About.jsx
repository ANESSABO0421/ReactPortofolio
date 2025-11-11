// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiGlobe, FiCode, FiCpu } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const stats = [
    { icon: <FiAward size={32} />, value: '50+', label: 'Projects Completed' },
    { icon: <FiGlobe size={32} />, label: '7+ Countries Served' },
    { icon: <FiCode size={32} />, value: '5+', label: 'Years Experience' },
    { icon: <FiCpu size={32} />, label: 'Full-Stack Expertise' },
  ];

  return (
    <div className="space-y-16">
      <div className="text-center">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          I'm a passionate Full-Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-800">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="Profile"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold text-white">Your Name</h3>
                <p className="text-gray-300">Full-Stack Developer</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full -z-10 opacity-20 blur-3xl"></div>
        </motion.div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            Full-Stack Developer based in <span className="text-cyan-400">[Your Location]</span>
          </h2>
          
          <p className="text-gray-400">
            I specialize in building responsive, performant, and accessible web applications
            using modern technologies like React, Node.js, and various databases. My focus is
            on creating intuitive user interfaces and scalable backend architectures.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:border-cyan-500/30 transition-colors"
              >
                <div className="text-cyan-400 mb-2">{stat.icon}</div>
                {stat.value && <div className="text-2xl font-bold mb-1">{stat.value}</div>}
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;