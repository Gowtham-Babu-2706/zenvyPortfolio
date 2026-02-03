import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-primary py-12  border-t border-borderPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-textPrimary">ZENVY.</span>
          </div>
          
          <div className="flex space-x-12">
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Youtube</a>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Instagram</a>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">LinkedIn</a>
          </div>

          <div className="text-sm text-gray-400">
            © 2026 Zenvy Media Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
