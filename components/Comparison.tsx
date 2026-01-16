
import React, { useState, useRef, useEffect } from 'react';

const Comparison: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setSliderPos((x / rect.width) * 100);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section id="comparison" className="py-24 bg-[#F9F8F4] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif">The Sound of Precision</h2>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            Witness the transformation from a raw manuscript to a meticulously engineered reading experience.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none border border-gray-200"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Before Image (Bottom Layer) */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1517842644466-41b7c47f527b?auto=format&fit=crop&q=80&w=2000" 
              alt="Unformatted manuscript" 
              className="w-full h-full object-cover grayscale brightness-90"
            />
            <div className="absolute top-8 left-8 bg-black/80 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              Standard Manuscript
            </div>
          </div>

          {/* After Image (Top Layer) */}
          <div 
            className="absolute inset-0 z-10"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=2000" 
              alt="Soud Visuals Layout" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-8 right-8 bg-white/90 text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm border border-gray-200">
              Soud Signature Layout
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-gray-100">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l-4 4m0 0l4 4m-4-4h16m0 0l-4-4m4 4l-4 4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-lg font-serif mb-2">Optical Balance</h4>
            <p className="text-sm text-gray-500">We adjust kerning and tracking for every header, ensuring a visual weight that feels natural to the human eye.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-lg font-serif mb-2">Golden Ratio Margins</h4>
            <p className="text-sm text-gray-500">Calculated whitespace that gives the reader room to breathe, preventing eye fatigue during long sessions.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-lg font-serif mb-2">Contextual Flow</h4>
            <p className="text-sm text-gray-500">Meticulous handling of widows and orphans, maintaining a consistent block of text across every spread.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
