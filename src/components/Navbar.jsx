import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Historical', path: '/historical' },
    { name: 'Map', path: '/map' },
    { name: 'Live', path: '/live' },
    { name: 'About', path: '/about' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-purple-900 to-purple-700 shadow-xl py-4"
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link 
          to="/" 
          className="text-2xl font-bold text-white hover:text-purple-200 transition-colors"
        >
          AirGuard
        </Link>

        <div className="flex gap-8">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className="text-white hover:text-purple-200 font-medium text-lg"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;