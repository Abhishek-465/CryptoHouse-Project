import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-3 md:px-0">

 

      <div className="text-center mt-8">
      <p className="text-sm">Cryptocurrencies are inherently exposed to market risk, characterized by unpredictable price fluctuations across both major and smaller assets.</p>
        <p className="text-sm">&copy; 2024 CryptoHouse. All rights reserved.</p>
      </div>

      {/* Box shadow on top */}
      <div className="bg-gray-900 h-4 shadow-md"></div>
    </footer>
  );
};

export default Footer;
