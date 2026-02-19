import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

/**
 * Hook personalizado para usar el contexto del tema
 * @returns {Object} Objeto con isDark, toggleTheme y theme
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de ThemeProvider');
  }
  return context;
};

/**
 * Proveedor del contexto del tema
 * @param {Object} props - Props del componente
 * @param {React.ReactNode} props.children - Componentes hijos
 * @returns {JSX.Element} ThemeProvider
 */
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Verificar si hay una preferencia guardada en localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Si no hay preferencia guardada, usar la preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    // Guardar la preferencia en localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Aplicar la clase al documento
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const theme = isDark ? 'dark' : 'light';

  const value = {
    isDark,
    toggleTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
