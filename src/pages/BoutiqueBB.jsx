import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Wifi, ParkingSquare, Coffee, Tv, Bath, Users, Bed, Home, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BoutiqueBB = () => {
  const { toast } = useToast();

  const handleReservation = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento!",
      description: "Esta funcionalidade ainda não foi implementada, mas não se preocupe! Pode pedi-la no seu próximo prompt! 🚀",
    });
  };

  const roomTypes = [
    {
      name: "Quarto Deluxe",
      occupancy: "2 Hóspedes",
      area: "28m²",
      price: "120€/noite",
      description: "Um refúgio de conforto e elegância, perfeito para casais. Desfrute de um design sofisticado com todas as comodidades modernas.",
      amenities: ["Wi-Fi de alta velocidade", "Smart TV 4K", "Casa de banho privativa com chuveiro de efeito chuva", "Ar condicionado", "Mini-bar", "Cofre"],
      images: [
        { src: "quarto_deluxe_vista_geral.jpg", alt: "Vista geral elegante do Quarto Deluxe" },
        { src: "quarto_deluxe_cama.jpg", alt: "Cama king-size confortável no Quarto Deluxe" },
        { src: "quarto_deluxe_banho.jpg", alt: "Casa de banho moderna do Quarto Deluxe" }
      ]
    },
    {
      name: "Suite Superior com Varanda",
      occupancy: "2 Hóspedes",
      area: "40m²",
      price: "160€/noite",
      description: "Espaço amplo com uma varanda privada com vista para o pátio histórico. Ideal para uma estadia romântica e relaxante.",
      amenities: ["Todas as do Deluxe", "Varanda privada mobilada", "Máquina de café Nespresso", "Roupões e chinelos", "Área de estar"],
      images: [
        { src: "suite_superior_varanda.jpg", alt: "Varanda soalheira da Suite Superior" },
        { src: "suite_superior_estar.jpg", alt: "Área de estar acolhedora na Suite Superior" },
        { src: "suite_superior_cama.jpg", alt: "Cama luxuosa na Suite Superior" }
      ]
    },
    {
      name: "Suite Familiar",
      occupancy: "Até 4 Hóspedes",
      area: "55m²",
      price: "210€/noite",
      description: "A nossa suite mais espaçosa, com um quarto principal e uma sala de estar com sofá-cama. Perfeita para famílias ou grupos.",
      amenities: ["Todas as da Superior", "Quarto principal separado", "Sofá-cama confortável", "Duas Smart TVs", "Banheira e chuveiro"],
      images: [
        { src: "suite_familiar_sala.jpg", alt: "Sala de estar espaçosa da Suite Familiar" },
        { src: "suite_familiar_quarto.jpg", alt: "Quarto principal da Suite Familiar" },
        { src: "suite_familiar_vista.jpg", alt: "Vista da janela da Suite Familiar" }
      ]
    }
  ];

  const generalAmenities = [
    { icon: Wifi, name: "Wi-Fi Gratuito de Alta Velocidade" },
    { icon: ParkingSquare, name: "Estacionamento Privado" },
    { icon: Coffee, name: "Pequeno-almoço Continental" },
    { icon: Home, name: "Acesso ao Pátio Histórico" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <Helmet>
        <title>Boutique B&B - Paço 100 Pressa</title>
        <meta name="description" content="Alojamento boutique sofisticado e acolhedor. Quartos elegantes com todas as comodidades para uma estadia inesquecível." />
      </Helmet>

      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img   
            className="w-full h-full object-cover" 
            alt="Pátio interior do Boutique B&B com vegetação e assentos confortáveis"
           src="https://images.unsplash.com/photo-1673814990277-ae1cf71b27f3" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
            O seu refúgio de elegância e tranquilidade.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-black mb-6">
                Conforto e História num só <span className="text-gold">Lugar</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                O nosso Boutique B&B oferece uma experiência de alojamento única, onde o charme histórico do Paço se alia ao conforto moderno. Cada quarto foi desenhado para ser um santuário de paz e bom gosto, garantindo uma estadia memorável.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Acorde com um delicioso pequeno-almoço preparado com produtos locais e desfrute da nossa localização central para explorar a cidade sem pressa.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img   
                className="w-full h-auto object-cover rounded-lg shadow-xl" 
                alt="Área de recepção do B&B com decoração elegante e balcão de madeira"
               src="https://images.unsplash.com/photo-1673681142950-a37f8421eb9c" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-black mb-4">
              Os Nossos <span className="text-gold">Quartos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Espaços desenhados para o seu máximo conforto e bem-estar.
            </p>
          </div>

          <div className="space-y-16">
            {roomTypes.map((room, index) => (
              <motion.div 
                key={room.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white rounded-lg shadow-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 h-96">
                      <div className="col-span-2 row-span-2">
                        <img  className="w-full h-full object-cover" alt={room.images[0].alt} src="https://images.unsplash.com/photo-1699598399746-d1473e05cd97" />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-black mb-4">{room.name}</h3>
                      <div className="flex items-center space-x-6 mb-4 text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Users className="w-5 h-5 text-gold" />
                          <span>{room.occupancy}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Maximize className="w-5 h-5 text-gold" />
                          <span>{room.area}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">{room.description}</p>
                      
                      <h4 className="font-semibold text-black mb-3">Comodidades Principais:</h4>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                        {room.amenities.slice(0, 6).map((amenity) => (
                          <li key={amenity} className="flex items-center text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></div>
                            {amenity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="text-right mb-4">
                        <span className="text-3xl font-bold text-gold">{room.price}</span>
                        <span className="text-gray-500"> / noite</span>
                      </div>
                      <Button 
                        onClick={handleReservation}
                        className="w-full bg-gold hover:bg-gold-dark text-black font-semibold py-3 text-lg rounded-lg"
                      >
                        Reservar Agora
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-black mb-4">
              Serviços e <span className="text-gold">Comodidades</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {generalAmenities.map((amenity, index) => (
              <motion.div 
                key={amenity.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <amenity.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black">{amenity.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold mb-6"
          >
            Planeie a sua <span className="text-gold">Estadia</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-gray-300"
          >
            Verifique a disponibilidade e garanta o seu quarto no nosso refúgio de tranquilidade.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              onClick={handleReservation}
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-10 py-3 text-lg rounded-full"
            >
              Verificar Disponibilidade
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BoutiqueBB;