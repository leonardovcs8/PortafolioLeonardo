import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDesktop, FaServer, FaCog, FaAward, FaStar, FaChartBar, FaNetworkWired } from 'react-icons/fa';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGitAlt, FaJava, FaPhp, FaDatabase
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiVuedotjs, SiExpress, 
  SiMysql, SiFigma, SiDotnet
} from 'react-icons/si';

/**
 * Sección Skills - Habilidades técnicas y herramientas
 * @returns {JSX.Element} Componente Skills
 */
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: FaDesktop,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 70, levelText: 'Intermedio', color: 'from-blue-500 to-blue-600', icon: FaReact },
        { name: 'JavaScript', level: 70, levelText: 'Intermedio', color: 'from-yellow-400 to-yellow-600', icon: FaJs },
        { name: 'HTML5', level: 70, levelText: 'Intermedio', color: 'from-orange-500 to-orange-600', icon: FaHtml5 },
        { name: 'CSS3', level: 70, levelText: 'Intermedio', color: 'from-blue-400 to-blue-500', icon: FaCss3Alt },
        { name: 'Vue.js', level: 40, levelText: 'Básico', color: 'from-green-500 to-green-600', icon: SiVuedotjs },
        { name: 'Tailwind CSS', level: 60, levelText: 'Intermedio', color: 'from-cyan-400 to-cyan-600', icon: SiTailwindcss },
      ],
    },
    backend: {
      title: 'Backend',
      icon: FaServer,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'C# .NET', level: 70, levelText: 'Intermedio', color: 'from-purple-600 to-purple-700', icon: SiDotnet },
        { name: 'SQL Server', level: 70, levelText: 'Intermedio', color: 'from-red-600 to-red-700', icon: FaDatabase },
        { name: 'Node.js', level: 70, levelText: 'Intermedio', color: 'from-green-600 to-green-700', icon: FaNodeJs },
        { name: 'Express.js', level: 70, levelText: 'Intermedio', color: 'from-gray-600 to-gray-800', icon: SiExpress },
        { name: 'PHP', level: 70, levelText: 'Intermedio', color: 'from-indigo-600 to-indigo-700', icon: FaPhp },
        { name: 'MySQL', level: 70, levelText: 'Intermedio', color: 'from-blue-500 to-blue-600', icon: SiMysql },
        { name: 'Python', level: 40, levelText: 'Básico', color: 'from-yellow-500 to-yellow-700', icon: FaPython },
        { name: 'Java', level: 70, levelText: 'Intermedio', color: 'from-orange-600 to-red-600', icon: FaJava },
      ],
    },
    tools: {
      title: 'Herramientas',
      icon: FaCog,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git', level: 70, levelText: 'Intermedio', color: 'from-orange-500 to-orange-700', icon: FaGitAlt },
        { name: 'Power BI', level: 40, levelText: 'Básico', color: 'from-yellow-400 to-yellow-600', icon: FaChartBar },
        { name: 'Excel', level: 70, levelText: 'Intermedio', color: 'from-green-500 to-green-600', icon: FaDesktop },
        { name: 'Cisco Packet Tracer', level: 60, levelText: 'Intermedio', color: 'from-blue-500 to-blue-600', icon: FaNetworkWired },
        { name: 'VS Code', level: 80, levelText: 'Avanzado', color: 'from-blue-500 to-blue-700', icon: FaDesktop },
        { name: 'Figma', level: 50, levelText: 'Básico', color: 'from-purple-500 to-purple-600', icon: SiFigma },
      ],
    },
  };

  const SkillCard = ({ skill, index }) => (
    <motion.div
      className="group relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-600/50 shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <skill.icon className="w-7 h-7 text-gray-700 dark:text-gray-300 flex-shrink-0" />
          <span className="font-semibold text-base text-gray-900 dark:text-white">{skill.name}</span>
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
          skill.level >= 70
            ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
            : skill.level >= 50
            ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
        }`}>
          {skill.levelText}
        </span>
      </div>
    </motion.div>
  );

  const certifications = [
    {
      title: 'PCAP - Python Programming',
      provider: 'Cisco Networking Academy',
      icon: FaAward,
      color: 'from-blue-500 to-blue-600',
      description: 'Certificación en fundamentos de programación con Python'
    },
    {
      title: 'CLA - C Programming',
      provider: 'Cisco Networking Academy',
      icon: FaStar,
      color: 'from-gray-600 to-gray-800',
      description: 'Fundamentos esenciales de programación en C'
    },
    {
      title: 'CLP - Advanced C Programming',
      provider: 'Cisco Networking Academy',
      icon: FaAward,
      color: 'from-gray-700 to-gray-900',
      description: 'Programación avanzada en lenguaje C'
    },
    {
      title: 'AI Fundamentals',
      provider: 'IBM',
      icon: FaStar,
      color: 'from-blue-600 to-purple-600',
      description: 'Fundamentos de Inteligencia Artificial'
    },
    {
      title: 'Office Intermedio',
      provider: 'Telefónica',
      icon: FaAward,
      color: 'from-green-500 to-green-600',
      description: 'Certificación en Microsoft Office nivel intermedio'
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Mis{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tecnologías y herramientas que domino para crear soluciones digitales excepcionales
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            const isActive = activeCategory === key;
            
            return (
              <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
                className={`group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-xl border-2 border-blue-200 dark:border-blue-700'
                    : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg border-2 border-transparent'
                }`}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-6 h-6" />
              {category.title}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"
                    layoutId="activeCategory"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <motion.div 
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-200/50 dark:border-gray-600/50"
            >
              <div className="text-center mb-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${skillCategories[activeCategory].color} mb-4`}>
                  {(() => {
                    const Icon = skillCategories[activeCategory].icon;
                    return <Icon className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              {skillCategories[activeCategory].title}
            </h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Certificaciones y{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Logros
            </span>
            </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  className="group p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-600/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${cert.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{cert.provider}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                </motion.div>
              );
            })}
              </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

