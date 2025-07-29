import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Car, Train, Bus, Plane, Clock, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Localização = () => {
  const { toast } = useToast();

  const handleDirections = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada",
      description: "Mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  const transportOptions = [
    {
      icon: Car,
      title: "De Automóvel",
      description: "Acesso direto pela A1, saída 15. Estacionamento gratuito disponível.",
      details: ["Desde Lisboa: 2h30", "Desde Porto: 1h45", "Estacionamento: 50 lugares"]
    },
    {
      icon: Train,
      title: "De Comboio",
      description: "Estação ferroviária a 800m do centro. Ligações regulares às principais cidades.",
      details: ["Desde Lisboa: 3h", "Desde Porto: 2h15", "Shuttle gratuito disponível"]
    },
    {
      icon: Bus,
      title: "De Autocarro",
      description: "Terminal rodoviário no centro da cidade com ligações regionais e nacionais.",
      details: ["Rede Expressos", "Rodonorte", "Transdev", "Paragem: 200m"]
    },
    {
      icon: Plane,
      title: "De Avião",
      description: "Aeroportos mais próximos com transfer disponível mediante reserva.",
      details: ["Porto: 120km", "Lisboa: 180km", "Transfer: 80€"]
    }
  ];

  const nearbyAttractions = [
    {
      name: "Castelo Medieval",
      distance: "2 km",
      time: "5 min",
      description: "Fortaleza do século XII com vistas panorâmicas"
    },
    {
      name: "Termas Naturais",
      distance: "8 km",
      time: "12 min",
      description: "Águas termais com propriedades terapêuticas"
    },
    {
      name: "Parque Natural",
      distance: "15 km",
      time: "20 min",
      description: "Reserva natural com trilhos e observação de fauna"
    },
    {
      name: "Praia Fluvial",
      distance: "12 km",
      time: "18 min",
      description: "Praia de rio com bandeira azul e área de lazer"
    }
  ];

  const practicalInfo = [
    {
      title: "Coordenadas GPS",
      content: "40.1234° N, 8.5678° W",
      icon: MapPin
    },
    {
      title: "Horário de Funcionamento",
      content: "Seg-Dom: 08:00-24:00",
      icon: Clock
    },
    {
      title: "Contacto Direto",
      content: "+351 123 456 789",
      icon: Phone
    },
    {
      title: "Email",
      content: "info@paco100pressa.pt",
      icon: Mail
    }
  ];

  return (
    <div className="min-h-screen"> {/* Removed pt-20 as Navbar is fixed */}
      <Helmet>
        <title>Localização - 100 Pressa - Paço 100 Pressa</title>
        <meta name="description" content="Encontre-nos facilmente. Informações detalhadas sobre localização, acessos, transportes e atrações próximas do Paço 100 Pressa." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden"> {/* Changed height to screen */}
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover" 
            alt="Vista aérea da localização do Paço 100 Pressa"
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
            <span className="text-gold">Localização</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light"
          >
            Encontre-nos no coração da cidade histórica
          </motion.p>
        </div>
      </section>

      {/* Mapa e Informações Principais */}
      <section className="py-16 bg-gray-950 text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                No <span className="text-gold">coração</span> da cidade
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                O Paço 100 Pressa está estrategicamente localizado no centro histórico da cidade, 
                oferecendo fácil acesso a pé às principais atrações turísticas, monumentos e 
                pontos de interesse cultural.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                A nossa localização privilegiada permite-lhe explorar a rica história local 
                enquanto desfruta do conforto e elegância dos nossos serviços de restauração e alojamento.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-gold" />
                  <div>
                    <div className="font-semibold text-white">Morada</div>
                    <div className="text-gray-300">Rua Principal, 123, 1234-567 Cidade</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-gold" />
                  <div>
                    <div className="font-semibold text-white">Horário</div>
                    <div className="text-gray-300">Segunda a Domingo: 08:00 - 24:00</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Placeholder para mapa interativo */}
              <div className="w-full h-96 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center"> {/* Darker placeholder */}
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                  <p className="text-gray-300 text-lg font-semibold">Mapa Interativo</p>
                  <p className="text-gray-400 text-sm">Clique para ver direções</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Chegar */}
      <section className="py-16 bg-black text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Como <span className="text-gold">Chegar</span>
            </h2>
            <p className="text-xl text-gray-300">
              Múltiplas opções de transporte para sua conveniência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportOptions.map((option, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg shadow-lg p-8 text-center" /* Dark card background */
              >
                <option.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{option.description}</p>
                
                <div className="space-y-2">
                  {option.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded"> {/* Darker detail background */}
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atrações Próximas */}
      <section className="py-16 bg-gray-950 text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              <span className="text-gold">Atrações</span> Próximas
            </h2>
            <p className="text-xl text-gray-300">
              Descubra o que pode visitar nos arredores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nearbyAttractions.map((attraction, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg p-8" /* Dark card background */
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-bold text-white">{attraction.name}</h3>
                  <div className="text-right">
                    <div className="text-gold font-bold">{attraction.distance}</div>
                    <div className="text-sm text-gray-400">{attraction.time} de carro</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informações Práticas */}
      <section className="py-16 bg-black text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Informações <span className="text-gold">Práticas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practicalInfo.map((info, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg shadow-lg p-8 text-center" /* Dark card background */
              >
                <info.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">{info.title}</h3>
                <p className="text-gray-300">{info.content}</p>
              </motion.div>
            ))}
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
            Venha <span className="text-gold">visitar-nos</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl mb-8 text-gray-300"
          >
            Estamos à sua espera no coração da cidade histórica
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={handleDirections}
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3 text-lg"
            >
              Ver Direções
            </Button>
            <Button 
              onClick={handleDirections}
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-black px-8 py-3 text-lg" /* Adjusted border and hover */
            >
              Contactar-nos
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Localização;