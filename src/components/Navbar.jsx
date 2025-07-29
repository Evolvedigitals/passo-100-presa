import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'INÍCIO', path: '/' },
    { name: 'Restaurante Itália', path: '/restaurante-italia' },
    { name: 'Restaurante Tradição', path: '/restaurante-tradicao' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Boutique B&B', path: '/boutique-bb' },
    {
      name: '100 PRESSA',
      dropdown: [
        { name: 'Arte Urbana', path: '/arte-urbana' },
        { name: 'Visitar', path: '/visitar' },
        { name: 'Rotas', path: '/rotas' },
        { name: 'Localização', path: '/localizacao' },
        { name: 'Paço', path: '/paco' }
      ]
    }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-lg' : 'bg-black/95 backdrop-blur-sm' /* Changed to black backgrounds */
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-serif font-bold text-white"> {/* Changed to white text */}
              Paço <span className="text-gold">100 Pressa</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer py-2"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="text-white hover:text-gold transition-colors font-medium"> {/* Changed to white text */}
                      {item.name}
                    </span>
                    <ChevronDown className="w-4 h-4 text-white group-hover:text-gold transition-colors" /> {/* Changed to white icon */}
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-gray-900 shadow-xl rounded-lg border border-gray-700 py-2" /* Darker dropdown */
                        >
                          {item.dropdown.map((dropItem, dropIndex) => (
                            <Link
                              key={dropIndex}
                              to={dropItem.path}
                              className="block px-4 py-2 text-white hover:text-gold hover:bg-gray-800 transition-colors" /* Darker dropdown text/hover */
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-white hover:text-gold transition-colors font-medium py-2 ${ /* Changed to white text */
                      location.pathname === item.path ? 'text-gold' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold transition-colors" /* Changed to white icon */
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-900 border-t border-gray-700" /* Darker mobile menu */
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <div key={index}>
                    {item.dropdown ? (
                      <div>
                        <div className="px-4 py-2 text-white font-medium border-b border-gray-700"> {/* Darker mobile dropdown text */}
                          {item.name}
                        </div>
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <Link
                            key={dropIndex}
                            to={dropItem.path}
                            className="block px-8 py-2 text-gray-300 hover:text-gold hover:bg-gray-800 transition-colors" /* Darker mobile dropdown text/hover */
                            onClick={() => setIsOpen(false)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-4 py-2 text-white hover:text-gold transition-colors ${ /* Changed to white text */
                          location.pathname === item.path ? 'text-gold' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;