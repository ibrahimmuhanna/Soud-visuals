
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-12">
          <div className="text-2xl font-bold font-serif">SOUD VISUALS</div>
          
          <nav className="flex flex-wrap gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#visualizer" className="hover:text-white transition-colors">AI Visualizer</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          
          <div className="flex gap-6 text-sm text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-600 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Soud Visuals Studio. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-600 tracking-widest uppercase">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
