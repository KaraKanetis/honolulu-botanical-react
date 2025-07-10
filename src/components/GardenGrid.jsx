function GardenGrid() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', marginTop: '50px', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <img src="https://www.honolulu.gov/dpr/wp-content/uploads/sites/34/2023/11/hbg_imgs/FosterMainTerrace.JPG" alt="Foster Botanical Garden" style={{ width: '250px', borderRadius: '20px' }} />
        <h3 style={{ marginTop: '15px', fontSize: '1.1rem' }}>Foster Botanical Garden</h3>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.4 }}>180 N. Vineyard Blvd. Honolulu, HI 96817<br />(808) 768-7135</p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <img src="https://www.honolulu.gov/dpr/wp-content/uploads/sites/34/2023/11/hbg_imgs/HooLandscape.jpg" alt="Ho‘omaluhia Botanical Garden" style={{ width: '250px', borderRadius: '20px' }} />
        <h3 style={{ marginTop: '15px', fontSize: '1.1rem' }}>Ho‘omaluhia Botanical Garden</h3>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.4 }}>45-680 Luluku Rd. Kāneʻohe, HI 96744<br />(808) 233-7323</p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <img src="https://www.honolulu.gov/dpr/wp-content/uploads/sites/34/2023/11/hbg_imgs/MainLiliuo.JPG" alt="Liliʻuokalani Botanical Garden" style={{ width: '250px', borderRadius: '20px' }} />
        <h3 style={{ marginTop: '15px', fontSize: '1.1rem' }}>Liliʻuokalani Botanical Garden</h3>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.4 }}>123 N. Kuakini St. Honolulu, HI 96817<br />(808) 768-7135</p>
      </div>
    </div>
  );
}

export default GardenGrid;