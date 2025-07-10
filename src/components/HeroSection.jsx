import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-banner text-white d-flex flex-column justify-content-center">
      <div style={{ marginLeft: '160px' }}>
        <h1 className="fw-bold display-6">DEPARTMENT OF PARKS & RECREATION</h1>
        <p className="fst-italic fs-5">Ka ʻOhana Mālama Pāka a me nā Hana Hoʻonanea</p>
      </div>
    </section>
  );
}

export default HeroSection;
