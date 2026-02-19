import { useState } from 'react';
import { motion } from 'framer-motion';
import codecorImg from '../assets/projects/codecor.png';
import albergueImg from '../assets/projects/albergue.png';
import luisbrailleImg from '../assets/projects/luisbraille.png';

/**
 * Sección Projects - Portafolio de proyectos realizados
 * @returns {JSX.Element} Componente Projects
 */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'eCommerce Textiles Codecor',
      description: 'Tienda web de cortinas con arquitectura moderna frontend-backend. Catálogo de productos, personalización de cortinas, selección de telas y diseño responsive.',
      image: codecorImg,
      technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'API REST'],
      category: 'fullstack',
      liveUrl: 'https://textilescodecor.netlify.app/',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Sistema de Reservas - Albergue San Francisco',
      description: 'Sistema web para visualización de habitaciones y gestión de reservas. Interfaz clara, diseño responsive y estructura para reservas online.',
      image: albergueImg,
      technologies: ['React', 'JavaScript', 'CSS', 'Web App'],
      category: 'fullstack',
      liveUrl: 'https://alberguesanfrancisco.vercel.app/',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Plataforma Educativa - Luis Braille',
      description: 'Sitio web institucional para centro educativo público en Lima. Información académica, programas educativos, contacto y navegación estructurada.',
      image: luisbrailleImg,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
      category: 'frontend',
      liveUrl: 'https://www.luisbraille.edu.pe/',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Sistema Web Corporativo Backend',
      description: 'Desarrollo backend con C# .NET, implementación de API RESTful, procedimientos almacenados en SQL Server y normalización de base de datos.',
      image: '🏢',
      technologies: ['C# .NET', 'SQL Server', 'REST API', 'DTOs', 'AutoMapper'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const filters = [
    { key: 'all', label: 'Todos' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  const ProjectCard = ({ project, isFeatured = false }) => (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
      isFeatured ? 'ring-2 ring-primary-200 dark:ring-primary-700' : ''
    }`}>
      {/* Project Image */}
      <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center overflow-hidden p-4">
        {typeof project.image === 'string' && project.image.length === 2 ? (
          <span className="text-6xl">{project.image}</span>
        ) : (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-contain rounded-lg"
          />
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
          {isFeatured && (
            <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
              Destacado
            </span>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Button */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-primary-600 dark:bg-primary-500 text-white text-center text-sm py-3 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
        >
          Ver Demo
        </a>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mis <span className="text-primary-600 dark:text-primary-400">Proyectos</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo web
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Proyectos Destacados
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isFeatured={true} />
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Todos los Proyectos
          </h3>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              ¿Te interesa trabajar juntos?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Estoy siempre abierto a nuevos proyectos y oportunidades. 
              Si tienes una idea en mente, ¡hablemos!
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary-600 dark:bg-primary-500 text-white text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Iniciar Proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

