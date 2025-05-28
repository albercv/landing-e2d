import React from 'react';
import { Header } from '../component/leadmagnet/Header';
import LeadForm from '../component/leadmagnet/LeadForm';
import { Footer } from '../component/leadmagnet/Footer';
import '../css/globals.css';

export const LeadMagnetPage = () => {
  return (
    <div className="container"> 
      <Header />
      <LeadForm />
      <Footer />
    </div>
  );
};