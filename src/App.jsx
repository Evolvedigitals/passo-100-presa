import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import RestauranteItalia from '@/pages/RestauranteItalia';
import RestauranteTradição from '@/pages/RestauranteTradição';
import Eventos from '@/pages/Eventos';
import BoutiqueB_B from '@/pages/BoutiqueB_B';
import ArteUrbana from '@/pages/ArteUrbana';
import Visitar from '@/pages/Visitar';
import Rotas from '@/pages/Rotas';
import Localização from '@/pages/Localização';
import Paço from '@/pages/Paço';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Paço 100 Pressa - Restaurantes, B&B e Experiências Culturais</title>
        <meta name="description" content="Descubra o Paço 100 Pressa: restaurantes de excelência, boutique B&B e experiências culturais únicas. Tradição italiana e portuguesa num ambiente sofisticado." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurante-italia" element={<RestauranteItalia />} />
          <Route path="/restaurante-tradicao" element={<RestauranteTradição />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/boutique-bb" element={<BoutiqueB_B />} />
          <Route path="/arte-urbana" element={<ArteUrbana />} />
          <Route path="/visitar" element={<Visitar />} />
          <Route path="/rotas" element={<Rotas />} />
          <Route path="/localizacao" element={<Localização />} />
          <Route path="/paco" element={<Paço />} />
        </Routes>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;