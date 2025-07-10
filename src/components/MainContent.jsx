import React from 'react';
import './MainImages.css';

function MainContent() {
  return (
    <section className="text-center my-5">
      <h2 className="fw-bold text-success">Honolulu Botanical Gardens</h2>

      <div className="main-images">
        {/* Botanical Gardens Logo */}
        <img
          src="https://www.honolulu.gov/dpr/wp-content/uploads/sites/34/2024/03/High-Rez-HBG-Logo-p1corcfmjkr4asiatrn1cn79je-1-768x792.jpg"
          alt="HBG Logo"
          className="main-logo"
        />

        {/* Waterfall */}
        <img
          src="https://www.honolulu.gov/dpr/wp-content/uploads/sites/34/2023/11/hbg_imgs/lbg.jpg"
          alt="Waterfall"
          className="main-waterfall"
        />

        {/* Red Flower */}
        <img
          src="https://www.honolulu.gov/dpr/wp-content/uploads/sites/34/2023/11/hbg_imgs/HooLehua.jpg"
          alt="Red Flower"
          className="main-flower"
        />
      </div>

      <div style={{ maxWidth: '1050px', margin: '50px auto 0 auto', fontSize: '1rem', lineHeight: 1.6, textAlign: 'left' }}>
        Welcome to the Honolulu Botanical Gardens! Our five botanical gardens are located in unique ecological settings and display plants from Hawaiʻi and around the world. Together, they encompass 650 acres and contain a vast documented plant collection used for research, education, conservation, and public enjoyment. In addition to connecting people with nature, we offer a variety of classes, workshops, special events, and recreational opportunities like camping, biking, hiking, and catch-and-release fishing. We have something for everyone, so please explore by clicking on the images below for detailed information about each garden.
      </div>
    </section>
  );
}

export default MainContent;