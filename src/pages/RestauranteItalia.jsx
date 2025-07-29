import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const RestauranteItalia = () => {
  const { toast } = useToast();

  const handleReservation = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento!",
      description: "Esta funcionalidade ainda não foi implementada, mas não se preocupe! Pode pedi-la no seu próximo prompt! 🚀",
    });
  };

  const menuItems = [
    {
      category: "Antipasti",
      items: [
        { name: "Bruschetta al Pomodoro", description: "Pão rústico tostado com tomate fresco, alho, manjericão e azeite extra virgem.", price: "8.50€" },
        { name: "Carpaccio di Manzo", description: "Finas fatias de novilho com rúcula, lascas de parmesão e molho de limão.", price: "12.00€" },
        { name: "Burrata con Prosciutto", description: "Burrata cremosa servida com presunto de Parma e tomate cereja.", price: "14.50€" },
      ]
    },
    {
      category: "Primi Piatti",
      items: [
        { name: "Spaghetti alla Carbonara", description: "A receita autêntica com guanciale, gema de ovo, queijo Pecorino e pimenta preta.", price: "15.00€" },
        { name: "Risotto ai Funghi Porcini", description: "Risotto cremoso com cogumelos Porcini frescos e um toque de trufa.", price: "17.50€" },
        { name: "Lasagna della Nonna", description: "Lasanha tradicional com ragu à bolonhesa, bechamel e queijo Parmigiano Reggiano.", price: "16.00€" },
      ]
    },
    {
      category: "Secondi Piatti",
      items: [
        { name: "Ossobuco alla Milanese", description: "Chambão de vitela cozido lentamente, servido com risotto de açafrão.", price: "24.00€" },
        { name: "Saltimbocca alla Romana", description: "Escalopes de vitela com presunto e sálvia, salteados em vinho branco.", price: "22.50€" },
        { name: "Branzino al Sale", description: "Robalo inteiro cozido em crosta de sal, servido com legumes da estação.", price: "25.00€" },
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
        <title>Restaurante Itália - Paço 100 Pressa</title>
        <meta name="description" content="Descubra os sabores autênticos da Itália no nosso restaurante. Pratos tradicionais preparados com ingredientes frescos e receitas originais." />
      </Helmet>

      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img   
            className="w-full h-full object-cover" 
            alt="Interior elegante do Restaurante Itália com mesas postas e iluminação suave"
           src="https://images.unsplash.com/photo-1508783296529-be0effe57fd2" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            Restaurante <span className="text-gold">Itália</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light"
          >
            Uma viagem apaixonante pelos sabores de Itália
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
                A Essência da Cozinha <span className="text-gold">Italiana</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                No nosso Restaurante Itália, cada prato é uma celebração da rica herança gastronómica italiana. Usamos apenas os melhores ingredientes, muitos importados diretamente de Itália, combinados com produtos locais frescos para criar uma experiência culinária autêntica e memorável.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Do norte ao sul, a nossa carta é uma viagem pelos sabores e tradições que tornam a cozinha italiana amada em todo o mundo. Deixe-se levar por esta experiência sem pressa.
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
                alt="Chef a preparar massa fresca numa cozinha profissional"
               src="https://images.unsplash.com/photo-1691089853086-c59a93de174f" />
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
              Uma seleção cuidada dos clássicos italianos, preparados com um toque de modernidade.
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
              Galeria de <span className="text-gold">Sabores</span>
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
                alt="Prato de spaghetti carbonara autêntico com guanciale crocante"
               src="https://images.unsplash.com/photo-1627207644206-a2040d60ecad" />
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
                alt="Risotto de cogumelos cremoso, decorado com salsa fresca"
               src="https://images.unsplash.com/photo-1572424075298-e17403e6f3bf" />
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
                alt="Ambiente acolhedor do restaurante com iluminação quente"
               src="https://images.unsplash.com/photo-1652162399848-5cc942af3602" />
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
            Garanta o seu lugar numa experiência gastronómica que o transportará diretamente para Itália.
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

export default RestauranteItalia;