import React from 'react';
import './MainImages.css'; // We'll create this next

function MainImages() {
  return (
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
  );
}

export default MainImages;
