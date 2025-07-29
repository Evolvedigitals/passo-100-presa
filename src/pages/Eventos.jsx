import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Calendar, Award, Mail, Phone, Heart, Briefcase, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Eventos = () => {
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento!",
      description: "Esta funcionalidade ainda não foi implementada, mas não se preocupe! Pode pedi-la no seu próximo prompt! 🚀",
    });
  };

  const eventTypes = [
    {
      icon: Heart,
      title: "Casamentos de Sonho",
      description: "Celebre o seu dia especial num cenário romântico e intemporal. O Paço oferece um ambiente mágico para uma memória eterna.",
      capacity: "Até 150 convidados",
      features: ["Cerimónia no pátio histórico", "Banquete personalizado", "Alojamento para convidados", "Coordenação dedicada"]
    },
    {
      icon: Briefcase,
      title: "Eventos Corporativos",
      description: "Inspire a sua equipa em espaços que aliam história e modernidade. Ideal para reuniões, conferências e team building.",
      capacity: "Até 100 pessoas",
      features: ["Salas equipadas", "Catering de excelência", "Wi-Fi de alta velocidade", "Estacionamento privativo"]
    },
    {
      icon: PartyPopper,
      title: "Celebrações Privadas",
      description: "Aniversários, batizados ou qualquer momento especial merece um local à altura. Criamos eventos à sua medida.",
      capacity: "Até 80 convidados",
      features: ["Menus personalizáveis", "Decoração temática", "Exclusividade do espaço", "Animação e música"]
    }
  ];

  const spaces = [
    {
      name: "Salão Nobre",
      capacity: "150 pessoas (banquete)",
      area: "200m²",
      description: "O nosso espaço principal, com tetos altos e janelas imponentes com vista para os jardins.",
      imgAlt: "Salão Nobre elegantemente decorado para um banquete de casamento"
    },
    {
      name: "Pátio Histórico",
      capacity: "200 pessoas (cerimónia)",
      area: "300m²",
      description: "Um oásis ao ar livre, perfeito para cerimónias, cocktails e eventos sob as estrelas.",
      imgAlt: "Pátio Histórico com arranjo de cadeiras para uma cerimónia ao ar livre"
    },
    {
      name: "Sala da Biblioteca",
      capacity: "40 pessoas (reunião)",
      area: "80m²",
      description: "Um ambiente mais íntimo e acolhedor, rodeado de história, ideal para reuniões ou jantares privados.",
      imgAlt: "Sala da Biblioteca com uma longa mesa de madeira para uma reunião"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen" /* Removed pt-20 as Navbar is fixed */
    >
      <Helmet>
        <title>Eventos - Paço 100 Pressa</title>
        <meta name="description" content="Organize o seu evento especial no Paço 100 Pressa. Casamentos, eventos corporativos e celebrações privadas em espaços elegantes e únicos." />
      </Helmet>

      <section className="relative h-screen flex items-center justify-center overflow-hidden"> {/* Changed height to screen */}
        <div className="absolute inset-0 z-0">
          <img   
            className="w-full h-full object-cover" 
            alt="Salão de eventos elegantemente decorado para um casamento, com mesas redondas e flores brancas"
           src="https://images.unsplash.com/photo-1505422548980-e486ef4fe816" />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Darker overlay */}
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            Eventos <span className="text-gold">Inesquecíveis</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light"
          >
            Celebre os seus momentos mais importantes num lugar com história.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              O Cenário Perfeito para a sua <span className="text-gold">Celebração</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              No Paço 100 Pressa, cada detalhe é pensado para tornar o seu evento memorável. Aliamos a elegância dos nossos espaços históricos a um serviço de excelência e a uma gastronomia requintada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div 
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg shadow-lg p-8 text-center border-t-4 border-gold" /* Dark card background */
              >
                <event.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{event.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{event.description}</p>
                
                <ul className="space-y-2 text-left">
                  {event.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Os Nossos <span className="text-gold">Espaços</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {spaces.map((space, index) => (
              <motion.div 
                key={space.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden group" /* Dark card background */
              >
                <div className="relative h-64">
                    <img   
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    alt={space.imgAlt}
                     src="https://images.unsplash.com/photo-1532254749169-ca0e30f76aa1" />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Darker overlay */}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{space.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span>{space.capacity}</span>
                    <span>|</span>
                    <span>{space.area}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{space.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-white"> {/* Dark background */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold mb-6"
          >
            Vamos Planear o seu <span className="text-gold">Evento</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-gray-300"
          >
            A nossa equipa dedicada está pronta para o ajudar a criar um evento que exceda todas as expectativas. Entre em contacto para um orçamento personalizado.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={handleContact}
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3 text-lg rounded-full"
            >
              Pedir Orçamento
            </Button>
            <Button 
              onClick={handleContact}
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-black px-8 py-3 text-lg rounded-full"
            >
              Agendar Visita
            </Button>
          </motion.div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-x-8 gap-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gold" />
              <span className="text-gray-300">eventos@paco100pressa.pt</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gold" />
              <span className="text-gray-300">+351 123 456 789</span>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Eventos;