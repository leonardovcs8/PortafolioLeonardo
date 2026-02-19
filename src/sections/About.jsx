import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { FaLightbulb, FaBolt, FaHeart, FaAward, FaCode, FaCoffee, FaDatabase, FaServer } from 'react-icons/fa';

/**
 * Sección About - Información personal y profesional
 * @returns {JSX.Element} Componente About
 */
const About = () => {
  // Memoizar datos estáticos para evitar re-creación
  const stats = useMemo(() => [
    { number: '2025', label: 'Egresado', icon: FaAward },
    { number: 'Intermedio', label: 'Backend C# .NET', icon: FaCode },
    { number: 'Intermedio', label: 'SQL Server', icon: FaDatabase },
    { number: '5', label: 'Certificaciones', icon: FaLightbulb },
  ], []);

  const achievements = useMemo(() => [
    {
      icon: FaDatabase,
      title: 'Base de Datos',
      description: 'Especializado en diseño, normalización y optimización de bases de datos SQL Server.',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: FaServer,
      title: 'Backend',
      description: 'Desarrollo de APIs RESTful con C# .NET y arquitecturas escalables.',
      color: 'from-purple-400 to-indigo-500',
    },
    {
      icon: FaLightbulb,
      title: 'Análisis',
      description: 'Pensamiento analítico aplicado a la resolución de problemas complejos.',
      color: 'from-yellow-400 to-orange-500',
    },
  ], []);

  const hobbies = useMemo(() => [
    { icon: FaCode, name: 'Programación', description: 'Aprendizaje continuo' },
    { icon: FaDatabase, name: 'Bases de Datos', description: 'Optimización y diseño' },
    { icon: FaCoffee, name: 'Café', description: 'El combustible del código' },
  ], []);

  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-4 transition-colors duration-300">
            Sobre{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Mí
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 transition-colors duration-300">
            Conoce más sobre mi trayectoria, experiencia y lo que me motiva como desarrollador
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          {/* Text content */}
          <motion.div 
            className="space-y-6 md:space-y-8 lg:space-y-10 px-4 lg:px-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors duration-300">
                Mi Perfil
              </h3>
              <div className="space-y-4 md:space-y-5 text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed transition-colors duration-300">
                <p>
                  Soy <span className="font-semibold text-blue-600 dark:text-blue-400">Ingeniero de Sistemas Computacionales</span> egresado 
                  de la Universidad Privada del Norte (2021-2025), con enfoque en desarrollo de software, 
                  gestión de bases de datos y análisis de información.
                </p>
                <p>
                  Cuento con experiencia práctica en <span className="font-semibold text-purple-600 dark:text-purple-400">desarrollo backend</span> utilizando 
                  <span className="font-semibold"> C# .NET</span> y <span className="font-semibold">SQL Server</span>. He trabajado en la implementación 
                  de APIs RESTful, normalización de bases de datos, procedimientos almacenados y patrones de diseño como DTOs y DAOs.
                </p>
                <p>
                  Me caracterizo por mi <span className="font-semibold text-green-600 dark:text-green-400">pensamiento analítico</span>, 
                  capacidad de adaptación y enfoque colaborativo. Busco constantemente aprender nuevas tecnologías 
                  y aplicarlas en soluciones innovadoras que generen impacto.
                </p>
              </div>
            </div>

            {/* Skills preview */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300">
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4 transition-colors duration-300">
                Tecnologías Principales
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['C# .NET', 'SQL Server', 'JavaScript', 'React', 'Node.js', 'PHP', 'Git', 'Python'].map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm border border-blue-300/50 dark:border-blue-600/50 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Hobbies - Responsive grid */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300">
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4 transition-colors duration-300">
                Mis Pasatiempos
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                {hobbies.map((hobby, index) => {
                  const Icon = hobby.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2 px-3 md:px-4 py-3 bg-gray-50/80 dark:bg-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-300/50 dark:border-gray-600/50 hover:shadow-md transition-all duration-300"
                      whileHover={{ scale: 1.03 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
                      </div>
                      <div className="flex-1 sm:flex-none">
                        <div className="font-medium text-gray-900 dark:text-white text-sm transition-colors duration-300">{hobby.name}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">{hobby.description}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Image placeholder - Optimizado */}
          <motion.div 
            className="relative px-4 lg:px-0 max-w-md mx-auto lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 rounded-3xl shadow-2xl dark:shadow-blue-900/50 flex items-center justify-center relative overflow-hidden transition-all duration-500">
                <div className="text-white text-6xl sm:text-7xl md:text-8xl font-bold relative z-10">
                  👨‍💻
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent dark:via-white/5"></div>
              </div>
              
              {/* Floating decorative elements - Optimizadas con will-change */}
              <motion.div 
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-yellow-500 dark:to-orange-600 rounded-2xl flex items-center justify-center shadow-lg dark:shadow-orange-900/50 will-change-transform transition-all duration-500"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
              >
                <span className="text-base sm:text-lg md:text-xl">🚀</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-blue-500 dark:from-green-500 dark:to-blue-600 rounded-2xl flex items-center justify-center shadow-lg dark:shadow-blue-900/50 will-change-transform transition-all duration-500"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1, repeatType: "reverse" }}
              >
                <span className="text-base sm:text-lg md:text-xl">💡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats - Responsive */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-16 md:mb-20 px-4 lg:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center p-4 md:p-6 bg-white dark:bg-gray-800 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl dark:shadow-blue-900/20 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-xl shadow-md transition-all duration-300">
                    <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievements - Responsive */}
        <motion.div 
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4 lg:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                className="group text-center p-6 md:p-8 bg-white dark:bg-gray-800 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl dark:shadow-blue-900/20 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-3 md:p-4 rounded-2xl bg-gradient-to-br ${achievement.color} mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform shadow-md`}>
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 transition-colors duration-300">
                  {achievement.title}
                </h4>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

