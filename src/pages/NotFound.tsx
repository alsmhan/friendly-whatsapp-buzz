
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 chat-bg">
      <div className="glass-panel p-8 rounded-2xl max-w-md w-full text-center animate-fade-in shadow-lg">
        <h1 className="text-6xl font-bold mb-4 text-gray-800 dark:text-gray-200">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">Oops! Page not found</p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-full transition-colors duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
