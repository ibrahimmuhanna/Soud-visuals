
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-6xl font-serif mb-8">Ready to define your visual identity?</h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">
            Whether you're an independent author or a publishing house, we are ready to bring professional precision to your next project.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Email us</p>
                <p className="text-lg">studio@soudvisuals.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Visit Studio</p>
                <p className="text-lg">London, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Project Details</label>
              <textarea className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors min-h-[120px]" placeholder="Tell us about your manuscript..."></textarea>
            </div>
            <button className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-gray-200 transition-all uppercase tracking-widest text-sm">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
