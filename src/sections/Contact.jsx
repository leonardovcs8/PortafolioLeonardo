import { useState } from 'react';
import { FaClock, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaSpinner, FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

/**
 * Sección Contact - Formulario de contacto e información
 * @returns {JSX.Element} Componente Contact
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' });

  const validateField = (field, value) => {
    if (field === 'name') {
      if (!value.trim()) return 'El nombre es requerido';
      if (value.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres';
    }
    if (field === 'email') {
      if (!value.trim()) return 'El email es requerido';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) return 'Ingresa un email válido';
    }
    if (field === 'subject') {
      if (!value.trim()) return 'El asunto es requerido';
      if (value.trim().length < 5) return 'El asunto debe tener al menos 5 caracteres';
    }
    if (field === 'message') {
      if (!value.trim()) return 'El mensaje es requerido';
      if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Validación en tiempo real ligera
    setErrors(prev => ({ ...prev, [name]: prev[name] ? validateField(name, value) : '' }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar todo antes de enviar
    const nextErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    };
    setErrors(nextErrors);
    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) return;

    setIsSubmitting(true);
    
    // Crear enlace mailto con todos los datos del formulario
    const mailtoLink = `mailto:leovc143@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`;
    
    // Abrir cliente de correo
    window.location.href = mailtoLink;
    
    // Simular envío exitoso
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      value: 'leovc143@gmail.com',
      link: 'mailto:leovc143@gmail.com',
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Teléfono',
      value: '+51 977 849 402',
      link: 'tel:+51977849402',
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Ubicación',
      value: 'Comas, Lima - Perú',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/leonardovcs8',
      icon: <FaGithub className="w-6 h-6" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/leonardo-gabriel-valenzuela-castillo-a2b469375/',
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      name: 'Email',
      url: 'mailto:leovc143@gmail.com',
      icon: <FaEnvelope className="w-6 h-6" />,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-primary-600 dark:text-primary-400">Contacto</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. 
            Envíame un mensaje y trabajemos juntos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Sígueme en Redes Sociales
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Tiempo de Respuesta
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Normalmente respondo a todos los mensajes en un plazo de 24 horas. 
                Para proyectos urgentes, no dudes en contactarme por teléfono.
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <FaClock className="w-4 h-4 mr-2" />
                Disponible de Lunes a Viernes, 9:00 AM - 6:00 PM
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Envíame un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    autoComplete="name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    autoComplete="email"
                    inputMode="email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  autoComplete="off"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 ${errors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  placeholder="¿En qué puedo ayudarte?"
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-2 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  rows={6}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  placeholder="Cuéntame más detalles sobre tu proyecto..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 dark:bg-primary-500 text-white text-lg py-4 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <FaCheck className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">
                      ¡Mensaje enviado correctamente! Te responderé pronto.
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

