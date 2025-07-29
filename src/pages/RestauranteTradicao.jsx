import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const RestauranteTradicao = () => {
  const { toast } = useToast();

  const handleReservation = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento!",
      description: "Esta funcionalidade ainda não foi implementada, mas não se preocupe! Pode pedi-la no seu próximo prompt! 🚀",
    });
  };

  const menuItems = [
    {
      category: "Petiscos",
      items: [
        { name: "Pica-Pau à Portuguesa", description: "Cubos de novilho fritos em azeite e alho, com picles e azeitonas.", price: "9.50€" },
        { name: "Amêijoas à Bulhão Pato", description: "Amêijoas frescas cozinhadas com alho, coentros e azeite.", price: "13.00€" },
        { name: "Pataniscas de Bacalhau", description: "As autênticas pataniscas com arroz de feijão malandrinho.", price: "11.50€" },
      ]
    },
    {
      category: "Pratos de Peixe",
      items: [
        { name: "Bacalhau com Broa", description: "Lombo de bacalhau assado em cama de grelos com crosta de broa de milho.", price: "18.50€" },
        { name: "Polvo à Lagareiro", description: "Polvo tenro assado no forno com batatas a murro e muito azeite.", price: "21.00€" },
        { name: "Arroz de Marisco", description: "Rico e malandrinho, com uma seleção de mariscos frescos.", price: "22.00€" },
      ]
    },
    {
      category: "Pratos de Carne",
      items: [
        { name: "Posta à Mirandesa", description: "Generosa posta de carne de novilho DOP, grelhada na perfeição.", price: "23.50€" },
        { name: "Cozido à Portuguesa", description: "Uma seleção de carnes, enchidos e legumes cozidos lentamente. (Aos Domingos)", price: "19.00€" },
        { name: "Arroz de Pato à Antiga", description: "Pato desfiado no forno, coberto com rodelas de chouriço crocante.", price: "16.50€" },
      ]
    }
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
        <title>Restaurante Tradição - Paço 100 Pressa</title>
        <meta name="description" content="Saboreie o melhor da cozinha portuguesa tradicional. Pratos autênticos preparados com receitas familiares e ingredientes locais de qualidade." />
      </Helmet>

      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img   
            className="w-full h-full object-cover" 
            alt="Interior rústico e acolhedor do Restaurante Tradição, com paredes de pedra"
           src="https://images.unsplash.com/photo-1654617728559-790884959fb4" />
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
            Os sabores autênticos de Portugal à sua mesa
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
                Um Legado de <span className="text-gold">Sabor</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                O Restaurante Tradição é uma homenagem à riqueza da gastronomia portuguesa. Resgatamos receitas de família e damos-lhes um toque contemporâneo, sem nunca perder a alma e a autenticidade dos sabores que nos definem.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                A nossa dedicação aos produtos locais e sazonais é o segredo da nossa cozinha. Trabalhamos com pequenos produtores para garantir a máxima qualidade e frescura, trazendo o melhor de Portugal para o seu prato.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-gold" />
                  <div>
                    <div className="font-semibold text-black">Horário</div>
                    <div className="text-gray-600">12:00 - 15:00 | 19:00 - 23:00</div>
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img   
                className="w-full h-auto object-cover rounded-lg shadow-xl" 
                alt="Prato de bacalhau com broa, um clássico da cozinha portuguesa"
               src="https://images.unsplash.com/photo-1594746982132-b604d0679602" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-black mb-4">
              A Nossa <span className="text-gold">Ementa</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma viagem pelos sabores mais autênticos de Portugal, de norte a sul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-gold"
              >
                <h3 className="text-3xl font-serif font-bold text-black mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-black text-lg">{item.name}</h4>
                        <span className="text-gold font-bold text-lg whitespace-nowrap ml-4">{item.price}</span>
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-black mb-4">
              Galeria de <span className="text-gold">Tradições</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-lg group h-80"
            >
              <img   
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                alt="Polvo à lagareiro tenro com batatas a murro"
               src="https://images.unsplash.com/photo-1580484122011-f17b97cd7f07" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-lg group h-80"
            >
              <img   
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                alt="Posta à Mirandesa mal passada e suculenta"
               src="https://images.unsplash.com/photo-1662842752132-503d60092b61" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-lg group h-80"
            >
              <img   
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                alt="Mesa posta com vários pratos tradicionais portugueses"
               src="https://images.unsplash.com/photo-1696572777898-765c7f33a4d5" />
            </motion.div>
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
            Reserve a sua <span className="text-gold">Mesa</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-gray-300"
          >
            Venha saborear a autêntica cozinha portuguesa num ambiente que celebra a nossa história.
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
              Fazer Reserva
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default RestauranteTradicao;