import React from 'react';
import './style.css';

import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import AccessibilityButton from './components/AccessibilityButton';
import Breadcrumb from './components/Breadcrumb';

import MainContent from './components/MainContent';
import GardenGrid from './components/GardenGrid';
import QRSection from './components/QRSection';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div>
      <NavigationBar />
      <AccessibilityButton />
      <HeroSection />
      <Breadcrumb />

      <MainContent />
      <GardenGrid />
      <QRSection />
      <ContactFooter />
    </div>
  );
}
