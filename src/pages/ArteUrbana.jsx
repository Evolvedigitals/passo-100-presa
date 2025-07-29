import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Palette, Users, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ArteUrbana = () => {
  const { toast } = useToast();

  const handleExplore = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada",
      description: "Mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  const artists = [
    {
      name: "Miguel Santos",
      specialty: "Graffiti & Murais",
      description: "Artista local especializado em murais de grande escala que contam histórias da comunidade.",
      works: 15
    },
    {
      name: "Ana Costa",
      specialty: "Arte Digital",
      description: "Criadora de instalações digitais interativas que transformam espaços urbanos.",
      works: 8
    },
    {
      name: "João Silva",
      specialty: "Escultura Urbana",
      description: "Escultor que utiliza materiais reciclados para criar obras de arte sustentáveis.",
      works: 12
    }
  ];

  const projects = [
    {
      title: "Mural da Memória",
      location: "Rua Principal",
      description: "Mural colaborativo que retrata a história local através de diferentes épocas",
      year: "2023"
    },
    {
      title: "Instalação Luz & Sombra",
      location: "Praça Central",
      description: "Instalação interativa que responde ao movimento dos transeuntes",
      year: "2023"
    },
    {
      title: "Jardim Vertical Artístico",
      location: "Avenida das Artes",
      description: "Combinação de arte e natureza numa parede verde com elementos artísticos",
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen"> {/* Removed pt-20 as Navbar is fixed */}
      <Helmet>
        <title>Arte Urbana - 100 Pressa - Paço 100 Pressa</title>
        <meta name="description" content="Descubra a vibrante cena de arte urbana local. Murais, instalações e projetos artísticos que transformam a cidade numa galeria a céu aberto." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden"> {/* Changed height to screen */}
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover" 
            alt="Mural de arte urbana colorido numa parede da cidade"
           src="https://images.unsplash.com/photo-1570717100748-39d95598aa1a" />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Darker overlay */}
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            Arte <span className="text-gold">Urbana</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light"
          >
            A cidade como galeria a céu aberto
          </motion.p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-gray-950 text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                Transformando espaços através da <span className="text-gold">arte</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                O projeto 100 Pressa Arte Urbana nasceu da vontade de transformar a nossa cidade numa verdadeira galeria a céu aberto. Através de murais, instalações e intervenções artísticas, damos vida aos espaços urbanos e criamos pontos de encontro cultural.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Colaboramos com artistas locais e internacionais para criar obras que refletem a identidade da comunidade, promovendo o diálogo entre tradição e modernidade, entre o local e o global.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">25+</div>
                  <div className="text-gray-400">Obras de Arte</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">15+</div>
                  <div className="text-gray-400">Artistas Envolvidos</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img  
                className="w-full h-96 object-cover rounded-lg shadow-lg" 
                alt="Artista criando mural urbano"
               src="https://images.unsplash.com/photo-1690221130635-2f665edd0391" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artistas */}
      <section className="py-16 bg-black text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Os nossos <span className="text-gold">Artistas</span>
            </h2>
            <p className="text-xl text-gray-300">
              Conheça os talentos que dão vida à nossa cidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg shadow-lg p-8 text-center" /* Dark card background */
              >
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">{artist.name}</h3>
                <div className="text-gold font-semibold mb-3">{artist.specialty}</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{artist.description}</p>
                <div className="text-2xl font-bold text-white">{artist.works}</div>
                <div className="text-sm text-gray-400">obras criadas</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-16 bg-gray-950 text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              <span className="text-gold">Projetos</span> em Destaque
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <img  
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                  alt={`${project.title} - Projeto de arte urbana`}
                 src="https://images.unsplash.com/photo-1678014864845-b69ed4816e15" />
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div> {/* Darker overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold">{project.title}</h3>
                    <span className="text-gold font-semibold">{project.year}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16 bg-black text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              <span className="text-gold">Galeria</span> de Arte Urbana
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img  
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                alt="Mural colorido com temática local"
               src="https://images.unsplash.com/photo-1580032363388-8467c2d8193f" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img  
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                alt="Instalação artística interativa"
               src="https://images.unsplash.com/photo-1604524599852-1e6df005b891" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img  
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                alt="Escultura urbana com materiais reciclados"
               src="https://images.unsplash.com/photo-1703925154938-7751bdb6e575" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img  
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                alt="Arte digital projetada em edifício"
               src="https://images.unsplash.com/photo-1702825483768-e240897e9a9c" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img  
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                alt="Jardim vertical artístico"
               src="https://images.unsplash.com/photo-1581615377472-934202ceef11" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img  
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                alt="Graffiti artístico em passagem subterrânea"
               src="https://images.unsplash.com/photo-1661272150939-54528208efba" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-950 text-white"> {/* Dark background */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif font-bold mb-6"
          >
            Explore a <span className="text-gold">arte urbana</span> da cidade
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl mb-8 text-gray-300"
          >
            Descubra os murais, instalações e projetos artísticos que transformam a nossa cidade
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={handleExplore}
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3 text-lg"
            >
              Mapa de Arte Urbana
            </Button>
            <Button 
              onClick={handleExplore}
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-black px-8 py-3 text-lg"
            >
              Tours Guiados
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArteUrbana;