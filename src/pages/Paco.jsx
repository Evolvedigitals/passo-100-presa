
import React from 'react';
import { Helmet } from 'react-helmet';
import PagePlaceholder from '@/components/PagePlaceholder';

const Paco = () => {
  return (
    <>
      <Helmet>
        <title>O Paço | Paço 100 Pressa</title>
        <meta name="description" content="Conheça a história e o conceito do Paço 100 Pressa." />
      </Helmet>
      <PagePlaceholder title="O Paço" description="Página em construção. Em breve, partilharemos a nossa história e a nossa missão." />
    </>
  );
};

export default Paco;
  