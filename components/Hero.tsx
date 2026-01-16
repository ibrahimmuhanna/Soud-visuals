
import React, { useCallback, useState, useEffect } from 'react';

const banners = [
  {
    id: 1,
    tag: "Excellence in Typesetting",
    title: "The Art of the <span class='italic'>Perfect</span> Page.",
    description: "Soud Visuals blends classical typography principles with modern digital precision to create book layouts that don't just hold text—they breathe life into stories.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1200",
    caption: "The Minimalist Poet's Companion"
  },
  {
    id: 2,
    tag: "Modern Non-Fiction",
    title: "Clarity Through <span class='italic'>Structural</span> Design.",
    description: "Complex information rendered with surgical precision. We specialize in hierarchy that guides the reader through every data point and argument.",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=1200",
    caption: "The Architect's Journal"
  },
  {
    id: 3,
    tag: "Classical Fiction",
    title: "Timeless <span class='italic'>Elegance</span> in Every Glyph.",
    description: "Honoring the tradition of bookmaking with golden ratio margins and meticulously kerned headers for a luxury reading experience.",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=1200",
    caption: "Velvet Nights: Deluxe Edition"
  },
  {
    id: 4,
    tag: "Visual Storytelling",
    title: "Hierarchy That <span class='italic'>Commands</span> Attention.",
    description: "From coffee table books to artisan cookbooks, we create visual rhythms that balance high-resolution imagery with legible, beautiful type.",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1200",
    caption: "Wild Harvest Cookbook"
  },
  {
    id: 5,
    tag: "Academic Precision",
    title: "The Science of <span class='italic'>Typesetting</span> Excellence.",
    description: "Specialized formatting for journals, textbooks, and complex manuscripts. Where technical accuracy meets aesthetic sophistication.",
    image: "https://images.unsplash.com/photo-1532012197367-2836f9547b1c?auto=format&fit=crop&q=80&w=1200",
    caption: "Quantum Mechanics: Theory & Practice"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-6 scroll-mt-20 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          
          {/* Image Slider Area - Priority on Mobile (Order 1) */}
          <div className="flex-1 w-full order-1 lg:order-2">
            <div className="relative aspect-square sm:aspect-video lg:aspect-[4/5] bg-gray-50 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/50">
              {banners.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.caption} 
                    className={`w-full h-full object-cover grayscale-[15%] transition-transform duration-[8000ms] ease-out ${
                      index === currentSlide ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className={`absolute bottom-6 left-6 md:bottom-14 md:left-14 text-white transition-all duration-700 delay-300 ${
                    index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <p className="text-[7px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-1 opacity-60">Featured Project</p>
                    <h3 className="text-lg md:text-4xl font-serif italic leading-tight">{slide.caption}</h3>
                  </div>
                </div>
              ))}
              
              {/* Refined Navigation Dots */}
              <div className="absolute bottom-6 right-6 md:bottom-14 md:right-14 flex gap-2 md:gap-4 z-20">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 transition-all duration-500 rounded-full ${
                      index === currentSlide ? 'w-6 md:w-12 bg-white' : 'w-1 md:w-2 bg-white/30'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text Content Area - Compact on Mobile (Order 2) */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex flex-col justify-center">
              <div className="grid grid-cols-1">
                {banners.map((slide, index) => (
                  <div 
                    key={slide.id}
                    className={`col-start-1 row-start-1 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col justify-center ${
                      index === currentSlide 
                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
                        : 'opacity-0 translate-y-8 pointer-events-none'
                    }`}
                  >
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-5 md:mb-6 self-start">
                      {slide.tag}
                    </div>
                    <h1 
                      className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl leading-[1.1] font-serif text-black mb-5 md:mb-6"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <p className="text-sm md:text-xl text-gray-500 leading-relaxed max-w-xl font-light">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 pt-8 md:pt-12">
                      <a 
                        href="#portfolio" 
                        onClick={(e) => scrollToSection(e, 'portfolio')}
                        className="bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-center font-bold hover:bg-gray-800 transition-all shadow-xl hover:shadow-black/20 text-[9px] md:text-[10px] uppercase tracking-[0.2em]"
                      >
                        View Portfolio
                      </a>
                      <a 
                        href="#visualizer" 
                        onClick={(e) => scrollToSection(e, 'visualizer')}
                        className="border border-gray-200 text-black px-8 md:px-10 py-4 md:py-5 rounded-full text-center font-bold hover:bg-gray-50 transition-all text-[9px] md:text-[10px] uppercase tracking-[0.2em]"
                      >
                        AI Visualizer
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#F9F8F4] -z-10 rounded-bl-[100px] opacity-50"></div>
    </section>
  );
};

export default Hero;
