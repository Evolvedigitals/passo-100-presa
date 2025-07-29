
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const RestauranteTradição = () => {
  const { toast } = useToast();

  const handleReservation = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não está implementada",
      description: "Mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  const menuItems = [
    {
      category: "Entradas",
      items: [
        { name: "Chouriço Assado", description: "Chouriço tradicional assado com pão de centeio", price: "7€" },
        { name: "Queijo da Serra", description: "Queijo da Serra DOP com compota de figo", price: "9€" },
        { name: "Pataniscas de Bacalhau", description: "Pataniscas tradicionais com salada", price: "8€" }
      ]
    },
    {
      category: "Pratos Principais",
      items: [
        { name: "Bacalhau à Brás", description: "Bacalhau desfiado com batata palha e ovos", price: "16€" },
        { name: "Francesinha Tradicional", description: "Francesinha com molho especial da casa", price: "14€" },
        { name: "Cozido à Portuguesa", description: "Cozido tradicional com carnes e enchidos", price: "18€" }
      ]
    },
    {
      category: "Sobremesas",
      items: [
        { name: "Pastéis de Nata", description: "Pastéis de nata caseiros com canela", price: "5€" },
        { name: "Pudim Flan", description: "Pudim flan tradicional da casa", price: "4€" },
        { name: "Arroz Doce", description: "Arroz doce com canela e limão", price: "4€" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Restaurante Tradição - Paço 100 Pressa</title>
        <meta name="description" content="Saboreie o melhor da cozinha portuguesa tradicional. Pratos autênticos preparados com receitas familiares e ingredientes locais de qualidade." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover" 
            alt="Restaurante Tradição - Interior rústico com decoração portuguesa tradicional"
           src="https://images.unsplash.com/photo-1673555136466-beb9efeb6066" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            Restaurante <span className="text-gold">Tradição</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light"
          >
            O melhor da cozinha portuguesa
          </motion.p>
        </div>
      </section>

      {/* Informações do Restaurante */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-black mb-6">
                Sabores que contam a nossa <span className="text-gold">história</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                No Restaurante Tradição, celebramos a riqueza da gastronomia portuguesa através de receitas transmitidas de geração em geração. Cada prato é uma homenagem às nossas raízes e tradições culinárias.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Utilizamos apenas ingredientes locais de primeira qualidade, trabalhando em estreita colaboração com produtores da região para garantir a autenticidade e frescura de cada refeição que servimos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-gold" />
                  <div>
                    <div className="font-semibold text-black">Horário</div>
                    <div className="text-gray-600">12:00 - 24:00</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-gold" />
                  <div>
                    <div className="font-semibold text-black">Reservas</div>
                    <div className="text-gray-600">+351 123 456 789</div>
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
              <img  
                className="w-full h-96 object-cover rounded-lg shadow-lg" 
                alt="Chef preparando bacalhau à Brás tradicional"
               src="https://images.unsplash.com/photo-1635431543236-d8813fad2bed" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-black mb-4">
              A nossa <span className="text-gold">Ementa</span>
            </h2>
            <p className="text-xl text-gray-600">
              Pratos tradicionais portugueses preparados com amor e dedicação
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {menuItems.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-black text-lg">{item.name}</h4>
                        <span className="text-gold font-bold text-lg">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-black mb-4">
              As nossas <span className="text-gold">Especialidades</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <img  
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-4" 
                alt="Bacalhau à Brás tradicional português"
               src="https://images.unsplash.com/photo-1697546307745-c05002aa1c1e" />
              <h3 className="text-xl font-serif font-bold text-black mb-2">Bacalhau à Brás</h3>
              <p className="text-gray-600">O nosso prato mais famoso, preparado segundo a receita tradicional</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <img  
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-4" 
                alt="Cozido à portuguesa com carnes e enchidos"
               src="https://images.unsplash.com/photo-1698917467449-08bcd1d9014b" />
              <h3 className="text-xl font-serif font-bold text-black mb-2">Cozido à Portuguesa</h3>
              <p className="text-gray-600">Uma refeição completa com as melhores carnes e enchidos regionais</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <img  
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-4" 
                alt="Pastéis de nata caseiros com canela"
               src="https://images.unsplash.com/photo-1503416083259-07236d6e77ed" />
              <h3 className="text-xl font-serif font-bold text-black mb-2">Pastéis de Nata</h3>
              <p className="text-gray-600">Feitos diariamente na nossa cozinha, seguindo a receita tradicional</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservas */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif font-bold mb-6"
          >
            Venha saborear a <span className="text-gold">tradição</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl mb-8 text-gray-300"
          >
            Reserve a sua mesa e desfrute dos sabores autênticos de Portugal
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

export default RestauranteTradição;
