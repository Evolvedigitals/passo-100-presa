import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Crown, Calendar, Users, Award, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Paço = () => {
  const { toast } = useToast();

  const handleExplore = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada",
      description: "Mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  const historicalPeriods = [
    {
      period: "Século XV",
      title: "Fundação do Paço",
      description: "Construção inicial como residência nobre da família local, com arquitetura gótica característica da época.",
      highlights: ["Arquitetura gótica", "Residência nobre", "Jardins originais"]
    },
    {
      period: "Século XVII",
      title: "Expansão Barroca",
      description: "Grandes obras de renovação e expansão, introduzindo elementos barrocos e criando os salões principais.",
      highlights: ["Elementos barrocos", "Salões principais", "Capela privativa"]
    },
    {
      period: "Século XIX",
      title: "Era Romântica",
      description: "Transformação dos jardins em estilo romântico e criação da biblioteca com valiosa coleção de manuscritos.",
      highlights: ["Jardins românticos", "Biblioteca histórica", "Coleção de arte"]
    },
    {
      period: "Século XXI",
      title: "Restauro e Revitalização",
      description: "Cuidadoso processo de restauro que preservou a autenticidade histórica enquanto adaptou o espaço para uso contemporâneo.",
      highlights: ["Restauro autêntico", "Adaptação moderna", "Preservação patrimonial"]
    }
  ];

  const architecturalFeatures = [
    {
      name: "Fachada Principal",
      description: "Imponente fachada em pedra com elementos góticos e barrocos harmoniosamente integrados",
      period: "Séc. XV-XVII"
    },
    {
      name: "Salão Nobre",
      description: "Amplo salão com teto em caixotões pintados e lareira monumental em mármore",
      period: "Séc. XVII"
    },
    {
      name: "Capela Privativa",
      description: "Pequena capela com retábulo dourado e azulejos do século XVIII",
      period: "Séc. XVIII"
    },
    {
      name: "Jardins Históricos",
      description: "Jardins em socalcos com espécies centenárias e sistema de irrigação original",
      period: "Séc. XIX"
    }
  ];

  const culturalSignificance = [
    {
      icon: Crown,
      title: "Património Nacional",
      description: "Classificado como Imóvel de Interesse Público pelo seu valor histórico e arquitetónico"
    },
    {
      icon: Award,
      title: "Prémio de Restauro",
      description: "Galardoado com o Prémio Nacional de Arquitetura pela excelência do projeto de restauro"
    },
    {
      icon: Users,
      title: "Centro Cultural",
      description: "Espaço dinâmico que acolhe exposições, concertos e eventos culturais durante todo o ano"
    }
  ];

  return (
    <div className="min-h-screen"> {/* Removed pt-20 as Navbar is fixed */}
      <Helmet>
        <title>Paço - 100 Pressa - Paço 100 Pressa</title>
        <meta name="description" content="Descubra a rica história do Paço 100 Pressa. Cinco séculos de património arquitetónico e cultural no coração da cidade histórica." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden"> {/* Changed height to screen */}
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover" 
            alt="Fachada histórica do Paço 100 Pressa"
           src="https://images.unsplash.com/photo-1696067650004-8b244bcced5e" />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Darker overlay */}
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            O <span className="text-gold">Paço</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light"
          >
            Cinco séculos de história e património
          </motion.p>
        </div>
      </section>

      {/* Introdução Histórica */}
      <section className="py-16 bg-gray-950 text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                Uma <span className="text-gold">jornada</span> através dos séculos
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                O Paço 100 Pressa é muito mais do que um edifício histórico - é um testemunho vivo de cinco séculos de história portuguesa. Desde a sua fundação no século XV como residência nobre, este magnífico palácio tem sido palco de momentos marcantes da nossa história local e nacional.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Através de um cuidadoso processo de restauro, conseguimos preservar a autenticidade histórica enquanto adaptámos o espaço às necessidades contemporâneas, criando um ambiente único onde o passado e o presente se encontram harmoniosamente.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">500+</div>
                  <div className="text-gray-400">Anos de História</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">15</div>
                  <div className="text-gray-400">Salas Históricas</div>
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
                alt="Interior histórico do Paço com arquitetura original"
               src="https://images.unsplash.com/photo-1644473968199-150d0a098163" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Linha Temporal */}
      <section className="py-16 bg-black text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              <span className="text-gold">História</span> do Paço
            </h2>
            <p className="text-xl text-gray-300">
              Uma viagem através dos séculos de evolução arquitetónica e cultural
            </p>
          </div>

          <div className="space-y-12">
            {historicalPeriods.map((period, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <img  
                    className="w-full h-64 object-cover rounded-lg shadow-lg" 
                    alt={`${period.title} - ${period.period}`}
                   src="https://images.unsplash.com/photo-1699269993937-48ddf66acc0a" />
                </div>
                
                <div className="lg:w-1/2 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gold text-black px-4 py-2 rounded-full font-bold">
                      {period.period}
                    </div>
                    <Calendar className="w-6 h-6 text-gold" />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-white">{period.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{period.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white mb-3">Destaques:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {period.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gold rounded-full"></div>
                          <span className="text-sm text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Características Arquitetónicas */}
      <section className="py-16 bg-gray-950 text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              <span className="text-gold">Arquitetura</span> e Património
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architecturalFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg p-8" /* Dark card background */
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-bold text-white">{feature.name}</h3>
                  <span className="bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {feature.period}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Significado Cultural */}
      <section className="py-16 bg-black text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Significado <span className="text-gold">Cultural</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalSignificance.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg shadow-lg p-8 text-center" /* Dark card background */
              >
                <item.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria Histórica */}
      <section className="py-16 bg-gray-950 text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              <span className="text-gold">Galeria</span> Histórica
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
                alt="Salão nobre com teto em caixotões"
               src="https://images.unsplash.com/photo-1644473968199-150d0a098163" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img  
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                alt="Capela privativa com retábulo dourado"
               src="https://images.unsplash.com/photo-1695244752938-b77bf05c0a86" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img  
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                alt="Jardins históricos em socalcos"
               src="https://images.unsplash.com/photo-1699269993937-48ddf66acc0a" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img  
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                alt="Biblioteca histórica com manuscritos"
               src="https://images.unsplash.com/photo-1696067650004-8b244bcced5e" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img  
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                alt="Fachada principal com elementos góticos"
               src="https://images.unsplash.com/photo-1660562229022-ddf20f275066" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img  
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                alt="Detalhes arquitetónicos barrocos"
               src="https://images.unsplash.com/photo-1627812963035-0b2c9cc7658e" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white"> {/* Dark background */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif font-bold mb-6"
          >
            Visite o nosso <span className="text-gold">património</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl mb-8 text-gray-300"
          >
            Descubra cinco séculos de história num ambiente único e acolhedor
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
              Visitas Guiadas
            </Button>
            <Button 
              onClick={handleExplore}
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-black px-8 py-3 text-lg" /* Adjusted border and hover */
            >
              História Completa
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Paço;