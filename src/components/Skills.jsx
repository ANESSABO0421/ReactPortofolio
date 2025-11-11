import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  // Programming Languages
  { name: 'JavaScript', level: 90, category: 'languages' },
  { name: 'TypeScript', level: 80, category: 'languages' },
  { name: 'Python', level: 75, category: 'languages' },
  { name: 'Java', level: 70, category: 'languages' },
  
  // Frontend
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'HTML5', level: 95, category: 'frontend' },
  { name: 'CSS3/Tailwind', level: 90, category: 'frontend' },
  { name: 'Redux', level: 80, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 75, category: 'backend' },
  { name: 'Firebase', level: 80, category: 'backend' },
  
  // Tools & Others
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'AWS', level: 65, category: 'tools' },
  { name: 'Figma', level: 75, category: 'tools' },
];

const categories = [
  { id: 'languages', name: 'Languages' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'tools', name: 'Tools & Others' },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = React.useState('languages');
  
  const filteredSkills = skills.filter(skill => skill.category === activeCategory);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    },
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 text-sm font-mono text-blue-400 bg-blue-900/30 rounded-full border border-blue-800/50 mb-6">
              MY SKILLS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expertise</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A collection of technologies and tools I've worked with to deliver high-quality solutions.
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Skills Grid */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div 
                key={`${skill.name}-${index}`}
                variants={item}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2.5">
                  <motion.div 
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold text-center text-white mb-8">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'React', icon: 'react' },
                { name: 'Next.js', icon: 'nextdotjs' },
                { name: 'Node.js', icon: 'nodedotjs' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'MongoDB', icon: 'mongodb' },
                { name: 'PostgreSQL', icon: 'postgresql' },
                { name: 'Git', icon: 'git' },
                { name: 'Docker', icon: 'docker' },
                { name: 'AWS', icon: 'amazonaws' },
              ].map((tech, index) => (
                <div 
                  key={tech.name}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gray-900/50 border border-gray-800 flex items-center justify-center mb-2 group-hover:border-blue-500/50 transition-colors">
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon.toLowerCase()}/${tech.icon.toLowerCase()}-original.svg`} 
                      alt={tech.name}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon.toLowerCase()}/${tech.icon.toLowerCase()}-plain.svg`;
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Skills;
