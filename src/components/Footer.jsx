import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="text-2xl font-serif font-bold text-white"> {/* Ensure text is white on black footer */}
              Paço <span className="text-gold">100 Pressa</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experiência gastronómica única, alojamento boutique e cultura local num ambiente sofisticado e acolhedor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <span className="text-gold font-semibold text-lg">Links Rápidos</span>
            <div className="space-y-2">
              <Link to="/restaurante-italia" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                Restaurante Itália
              </Link>
              <Link to="/restaurante-tradicao" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                Restaurante Tradição
              </Link>
              <Link to="/boutique-bb" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                Boutique B&B
              </Link>
              <Link to="/eventos" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                Eventos
              </Link>
            </div>
          </div>

          {/* Cultura Local */}
          <div className="space-y-4">
            <span className="text-gold font-semibold text-lg">100 Pressa</span>
            <div className="space-y-2">
              <Link to="/arte-urbana" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                Arte Urbana
              </Link>
              <Link to="/visitar" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                Visitar
              </Link>
              <Link to="/rotas" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                Rotas
              </Link>
              <Link to="/paco" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                Paço
              </Link>
            </div>
          </div>

          {/* Contactos */}
          <div className="space-y-4">
            <span className="text-gold font-semibold text-lg">Contactos</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Rua Principal, 123<br />
                  1234-567 Cidade
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">+351 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@paco100pressa.pt</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>Seg-Dom: 12:00-24:00</div>
                  <div>Cozinha: 12:00-22:30</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Paço 100 Pressa. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;