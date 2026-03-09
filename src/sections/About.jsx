import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { FaLightbulb, FaBolt, FaHeart, FaAward, FaCode, FaCoffee, FaDatabase, FaServer, FaMapMarkerAlt, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import profileImage from '../assets/profile/leonardo.jpg';

/**
 * Sección About - Información personal y profesional
 * @returns {JSX.Element} Componente About
 */
const About = () => {
  // Memoizar datos estáticos para evitar re-creación
  const stats = useMemo(() => [
    { number: '2025', label: 'Egresado UPN', icon: FaAward },
    { number: 'C# .NET', label: 'Backend Developer', icon: FaCode },
    { number: 'SQL Server', label: 'Base de Datos', icon: FaDatabase },
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

          {/* Profile Card */}
          <motion.div
            className="relative px-4 lg:px-0 max-w-md mx-auto lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-600/50 shadow-2xl p-8">
              {/* Foto circular + badge disponible */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-4">
                  <img
                    src={profileImage}
                    alt="Leonardo Valenzuela"
                    className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl"
                  />
                  <span className="absolute bottom-1 right-1 flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white dark:border-gray-800"></span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Leonardo Valenzuela</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-1">Desarrollador Backend · C# .NET</p>
                <span className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-300 dark:border-green-600 text-green-700 dark:text-green-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Disponible para trabajar
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200/70 dark:border-gray-700/70 mb-6" />

              {/* Info rows */}
              <div className="space-y-3 mb-6">
                {[
                  { icon: FaMapMarkerAlt, text: 'Comas, Lima — Perú 🇵🇪', color: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
                  { icon: FaGraduationCap, text: 'UPN · Ing. Sistemas · 2025', color: 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
                  { icon: FaEnvelope, text: 'leovc143@gmail.com', color: 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
                ].map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '3+', label: 'Proyectos', color: 'text-blue-600 dark:text-blue-400' },
                  { value: '10+', label: 'Tecnologías', color: 'text-purple-600 dark:text-purple-400' },
                  { value: '5', label: 'Certs', color: 'text-green-600 dark:text-green-400' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 bg-gray-50/80 dark:bg-gray-700/50 rounded-2xl">
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
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

