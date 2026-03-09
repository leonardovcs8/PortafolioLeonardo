/**
 * Componente Footer - Pie de página del portafolio
 * @returns {JSX.Element} Componente Footer
 */
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/leonardovcs8',
      icon: (<FaGithub className="w-5 h-5" />),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/leonardo-gabriel-valenzuela-castillo-a2b469375/',
      icon: (<FaLinkedin className="w-5 h-5" />),
    },
    {
      name: 'Email',
      url: 'mailto:leovc143@gmail.com',
      icon: (<FaEnvelope className="w-5 h-5" />),
    },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white transition-colors duration-500">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="text-2xl font-bold text-primary-400 dark:text-primary-300">
                  Leonardo Valenzuela
                </span>
              </div>
              <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
                Ingeniero de Sistemas Computacionales especializado en desarrollo backend con C# .NET 
                y SQL Server. Enfocado en crear soluciones eficientes y escalables.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Contacto
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <FaEnvelope className="w-4 h-4 mr-3 text-blue-400" />
                  <a href="mailto:leovc143@gmail.com" className="hover:text-blue-400 transition-colors duration-200">
                    leovc143@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <FaWhatsapp className="w-4 h-4 mr-3 text-blue-400" />
                  <a href="https://wa.me/51977849402" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                    +51 977 849 402
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <FaMapMarkerAlt className="w-4 h-4 mr-3 text-blue-400" />
                  <span>Comas, Lima - Perú</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Leonardo Valenzuela. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

