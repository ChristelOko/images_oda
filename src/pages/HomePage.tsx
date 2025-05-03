import React from 'react';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Promise from '../components/Promise';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';

const Divider = () => (
  <div className="w-full h-1 bg-red-600" />
);

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Divider />
      <Vision />
      <Divider />
      <Promise />
      <Divider />
      <Products />
      <Divider />
      <Newsletter />
    </>
  );
};

export default HomePage;