import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Calendar, Bed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Home = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada",
      description: "Mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Paço 100 Pressa - Restaurantes, B&B e Experiências Culturais</title>
        <meta name="description" content="Descubra o Paço 100 Pressa: restaurantes de excelência, boutique B&B e experiências culturais únicas. Tradição italiana e portuguesa num ambiente sofisticado." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover" 
            alt="Paço 100 Pressa - Vista exterior elegante do restaurante e B&B"
           src="https://images.unsplash.com/photo-1696067650004-8b244bcced5e" />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 hero-text"
          >
            Paço <span className="text-gold">100 Pressa</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Experiência gastronómica única, alojamento boutique e cultura local
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              asChild 
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3 text-lg"
            >
              <Link to="/boutique-bb">
                Reservar Estadia
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
            >
              <Link to="/restaurante-italia">Ver Restaurantes</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Destaques Section */}
      <section className="py-20 bg-gray-950"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Experiências <span className="text-gold">Únicas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubra a perfeita combinação entre gastronomia de excelência, 
              alojamento sofisticado e cultura local autêntica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Restaurante Itália */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
              <Link to="/restaurante-italia">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img  
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                    alt="Restaurante Itália - Pratos italianos autênticos"
                   src="https://images.unsplash.com/photo-1678906735051-e9df89883e48" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div> {/* Darker overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">Restaurante Itália</h3>
                    <p className="text-sm opacity-90">Sabores autênticos da tradição italiana</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Restaurante Tradição */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <Link to="/restaurante-tradicao">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img  
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                    alt="Restaurante Tradição - Cozinha portuguesa tradicional"
                   src="https://images.unsplash.com/photo-1670319459857-3dd639b4ec9d" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div> {/* Darker overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">Restaurante Tradição</h3>
                    <p className="text-sm opacity-90">O melhor da cozinha portuguesa</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Boutique B&B */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <Link to="/boutique-bb">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img  
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                    alt="Boutique B&B - Quartos elegantes e confortáveis"
                   src="https://images.unsplash.com/photo-1660562229022-ddf20f275066" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div> {/* Darker overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">Boutique B&B</h3>
                    <p className="text-sm opacity-90">Alojamento sofisticado e acolhedor</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* 100 Pressa */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group cursor-pointer"
            >
              <Link to="/arte-urbana">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img  
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                    alt="100 Pressa - Arte urbana e cultura local"
                   src="https://images.unsplash.com/photo-1677696936318-7a2487b1fe8f" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div> {/* Darker overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">100 Pressa</h3>
                    <p className="text-sm opacity-90">Arte urbana e cultura local</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 bg-black text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-gold">15+</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-gold">2</div>
              <div className="text-gray-300">Restaurantes</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-gold">12</div>
              <div className="text-gray-300">Quartos Boutique</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-gold">500+</div>
              <div className="text-gray-300">Eventos Realizados</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gray-950 text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              O que dizem os nossos <span className="text-gold">Clientes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 p-8 rounded-lg" /* Dark card background */
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Uma experiência gastronómica inesquecível. A qualidade dos pratos italianos é excecional e o ambiente é perfeito para uma noite especial."
              </p>
              <div className="font-semibold text-white">Maria Silva</div>
              <div className="text-sm text-gray-400">Cliente Restaurante Itália</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-900 p-8 rounded-lg" /* Dark card background */
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "O B&B é simplesmente perfeito. Quartos elegantes, pequeno-almoço delicioso e um atendimento impecável. Voltaremos certamente!"
              </p>
              <div className="font-semibold text-white">João Santos</div>
              <div className="text-sm text-gray-400">Hóspede Boutique B&B</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900 p-8 rounded-lg" /* Dark card background */
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "A combinação perfeita entre tradição e modernidade. O evento que organizámos aqui foi um sucesso absoluto. Recomendo vivamente!"
              </p>
              <div className="font-semibold text-white">Ana Costa</div>
              <div className="text-sm text-gray-400">Evento Corporativo</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white"> {/* Dark background */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Pronto para uma experiência <span className="text-gold">inesquecível</span>?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl mb-8 text-gray-300"
          >
            Reserve já a sua mesa ou estadia e descubra o que torna o Paço 100 Pressa único.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={() => handleFeatureClick('reserva-mesa')}
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3 text-lg"
            >
              Reservar Mesa
            </Button>
            <Button 
              onClick={() => handleFeatureClick('reserva-quarto')}
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-black px-8 py-3 text-lg" /* Adjusted border and hover */
            >
              Reservar Quarto
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;