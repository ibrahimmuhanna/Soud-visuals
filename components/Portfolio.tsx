
import React, { useState, useMemo, useRef } from 'react';

const projects = [
  { id: 1, title: "Modernist Muse", category: "Editorial", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "Velvet Nights", category: "Fiction", img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=600" },
  { id: 3, title: "The Architect", category: "Non-Fiction", img: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=600" },
  { id: 4, title: "Silent Echoes", category: "Poetry", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600" },
  { id: 5, title: "Data Driven", category: "Academic", img: "https://images.unsplash.com/photo-1532012197367-2836f9547b1c?auto=format&fit=crop&q=80&w=600" },
  { id: 6, title: "Wild Harvest", category: "Cookbook", img: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600" },
];

const categories = ['All', 'Fiction', 'Non-Fiction', 'Academic', 'Poetry', 'Editorial', 'Cookbook'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-24 px-6 scroll-mt-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Header Design */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-8">
              <div className="inline-block px-4 py-1.5 bg-gray-50 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Curated Selection
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-black leading-[1.1]">
                A Gallery of <span className="italic text-gray-400">Curated</span> Pages
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl font-light">
                Every project is an opportunity to explore unique <span className="text-black font-medium">typographic hierarchies</span> and layout configurations, 
                blending classical structures with contemporary digital precision.
              </p>
            </div>
            
            {/* Category Navigation - Better Tablet Handling */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6">
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {categories.map((cat) => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all rounded-full border ${
                      activeCategory === cat 
                        ? 'bg-black text-white border-black' 
                        : 'bg-transparent text-gray-400 border-gray-200 hover:border-gray-400 hover:text-black'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-gray-100 mt-16"></div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] mb-8 bg-gray-50 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[4px]">
                  <span className="bg-white text-black px-10 py-4 rounded-full font-bold shadow-2xl uppercase tracking-widest text-[10px]">
                    View Case Study
                  </span>
                </div>
              </div>
              <div className="space-y-3 px-2">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gray-200 group-hover:w-12 group-hover:bg-black transition-all duration-500"></span>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em]">{project.category}</p>
                </div>
                <h3 className="text-3xl font-serif text-black leading-tight group-hover:italic transition-all duration-300">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-40 text-center">
            <p className="font-serif italic text-3xl text-gray-300">New layouts arriving soon.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
