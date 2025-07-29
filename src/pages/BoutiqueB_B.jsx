import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Wifi, Car, Coffee, Tv, Bath, Users, Bed, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BoutiqueB_B = () => {
  const { toast } = useToast();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleReservation = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada",
      description: "Mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  const roomTypes = [
    {
      id: 1,
      name: "Quarto Standard",
      occupancy: "2 pessoas",
      area: "25m²",
      price: "80€/noite",
      description: "Quarto elegante e confortável com todas as comodidades essenciais para uma estadia perfeita.",
      amenities: ["Wi-Fi gratuito", "TV LCD", "Casa de banho privativa", "Ar condicionado", "Cofre", "Minibar"],
      images: 3
    },
    {
      id: 2,
      name: "Quarto Superior",
      occupancy: "2 pessoas",
      area: "35m²",
      price: "120€/noite",
      description: "Quarto espaçoso com vista panorâmica e decoração sofisticada, ideal para uma experiência premium.",
      amenities: ["Wi-Fi gratuito", "TV LCD", "Casa de banho privativa", "Ar condicionado", "Cofre", "Minibar", "Varanda", "Vista panorâmica"],
      images: 3
    },
    {
      id: 3,
      name: "Suite Deluxe",
      occupancy: "4 pessoas",
      area: "50m²",
      price: "180€/noite",
      description: "Suite luxuosa com sala de estar separada, perfeita para famílias ou estadias prolongadas.",
      amenities: ["Wi-Fi gratuito", "TV LCD", "Casa de banho privativa", "Ar condicionado", "Cofre", "Minibar", "Sala de estar", "Varanda", "Vista panorâmica", "Roupões"],
      images: 4
    }
  ];

  const generalAmenities = [
    { icon: Wifi, name: "Wi-Fi Gratuito" },
    { icon: Car, name: "Estacionamento" },
    { icon: Coffee, name: "Pequeno-almoço" },
    { icon: Tv, name: "TV por Cabo" },
    { icon: Bath, name: "Casa de Banho Privativa" },
  ];

  return (
    <div className="min-h-screen"> {/* Removed pt-20 as Navbar is fixed */}
      <Helmet>
        <title>Boutique B&B - Paço 100 Pressa</title>
        <meta name="description" content="Alojamento boutique sofisticado e acolhedor. Quartos elegantes com todas as comodidades para uma estadia inesquecível no coração da cidade." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden"> {/* Changed height to screen */}
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover" 
            alt="Boutique B&B - Exterior elegante do hotel boutique"
           src="https://images.unsplash.com/photo-1695244752938-b77bf05c0a86" />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Darker overlay */}
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            Boutique <span className="text-gold">B&B</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light"
          >
            Alojamento sofisticado e acolhedor
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
                Uma experiência de <span className="text-gold">alojamento única</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                O nosso Boutique B&B oferece uma experiência de alojamento verdadeiramente especial, combinando o conforto moderno com a elegância clássica. Cada quarto foi cuidadosamente decorado para proporcionar uma atmosfera acolhedora e sofisticada.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Localizado no coração da cidade, o nosso B&B é o ponto de partida perfeito para explorar as atrações locais, enquanto desfruta de um refúgio tranquilo e luxuoso.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {generalAmenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <amenity.icon className="w-5 h-5 text-gold" />
                    <span className="text-sm text-gray-300">{amenity.name}</span>
                  </div>
                ))}
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
                alt="Lobby elegante do boutique B&B"
               src="https://images.unsplash.com/photo-1644473968199-150d0a098163" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tipos de Quartos */}
      <section className="py-16 bg-black text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Os nossos <span className="text-gold">Quartos</span>
            </h2>
            <p className="text-xl text-gray-300">
              Escolha o quarto perfeito para a sua estadia
            </p>
          </div>

          <div className="space-y-12">
            {roomTypes.map((room, index) => (
              <motion.div 
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden" /* Dark card background */
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Galeria de Imagens */}
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-1 h-80">
                      <img  
                        className="w-full h-full object-cover" 
                        alt={`${room.name} - Vista principal do quarto`}
                       src="https://images.unsplash.com/photo-1540104499097-27539e29a4d2" />
                      <div className="grid grid-rows-2 gap-1">
                        <img  
                          className="w-full h-full object-cover" 
                          alt={`${room.name} - Casa de banho`}
                         src="https://images.unsplash.com/photo-1699269993937-48ddf66acc0a" />
                        <img  
                          className="w-full h-full object-cover" 
                          alt={`${room.name} - Detalhes do quarto`}
                         src="https://images.unsplash.com/photo-1627812963035-0b2c9cc7658e" />
                      </div>
                    </div>
                  </div>

                  {/* Informações do Quarto */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif font-bold text-white">{room.name}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gold">{room.price}</div>
                        <div className="text-sm text-gray-400">por noite</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 mb-4 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{room.occupancy}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Square className="w-4 h-4" />
                        <span className="text-sm">{room.area}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{room.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Comodidades:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.map((amenity, amenityIndex) => (
                          <div key={amenityIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                            <span className="text-sm text-gray-300">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      onClick={handleReservation}
                      className="w-full bg-gold hover:bg-gold-dark text-black font-semibold py-3"
                    >
                      Reservar Quarto
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comodidades Gerais */}
      <section className="py-16 bg-gray-950 text-white"> {/* Dark background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              <span className="text-gold">Comodidades</span> do B&B
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 bg-gray-900 rounded-lg" /* Dark card background */
            >
              <Coffee className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Pequeno-almoço</h3>
              <p className="text-gray-300">Pequeno-almoço continental servido diariamente com produtos locais frescos</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-gray-900 rounded-lg" /* Dark card background */
            >
              <Car className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Estacionamento</h3>
              <p className="text-gray-300">Estacionamento privativo gratuito para todos os hóspedes</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-gray-900 rounded-lg" /* Dark card background */
            >
              <Wifi className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Wi-Fi Gratuito</h3>
              <p className="text-gray-300">Internet de alta velocidade gratuita em todo o estabelecimento</p>
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
            Reserve a sua <span className="text-gold">estadia</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl mb-8 text-gray-300"
          >
            Desfrute de uma experiência de alojamento única no nosso Boutique B&B
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              onClick={handleReservation}
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3 text-lg"
            >
              Fazer Reserva
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BoutiqueB_B;