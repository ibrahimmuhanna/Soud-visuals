
import React, { useState } from 'react';
import { getDesignSuggestion } from '../services/geminiService';
import { DesignSuggestion } from '../types';

const AIVisualizer: React.FC = () => {
  const [genre, setGenre] = useState('');
  const [audience, setAudience] = useState('');
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<DesignSuggestion | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!genre || !audience || !mood) return;
    
    setLoading(true);
    try {
      const result = await getDesignSuggestion(genre, audience, mood);
      setSuggestion(result);
    } catch (error) {
      console.error("Failed to fetch suggestions", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="visualizer" className="py-24 bg-[#FDFCF8] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-serif mb-4">AI Design Consultant</h2>
              <p className="text-gray-500 mb-8">
                Not sure what style fits your book? Describe your project and our AI powered by Gemini will suggest an ideal layout framework.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">Book Genre</label>
                  <input 
                    type="text" 
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    placeholder="e.g. Historical Fiction, Memoirs"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">Target Audience</label>
                  <input 
                    type="text" 
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    placeholder="e.g. Young Adults, Academic Peers"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">Desired Mood</label>
                  <select 
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all"
                  >
                    <option value="">Select a mood...</option>
                    <option value="Classical & Elegant">Classical & Elegant</option>
                    <option value="Modern & Minimalist">Modern & Minimalist</option>
                    <option value="Gritty & Industrial">Gritty & Industrial</option>
                    <option value="Playful & Vibrant">Playful & Vibrant</option>
                    <option value="Dark & Mysterious">Dark & Mysterious</option>
                  </select>
                </div>
                <button 
                  disabled={loading}
                  className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 disabled:bg-gray-400 transition-all uppercase tracking-widest"
                >
                  {loading ? 'Consulting the Design Spirits...' : 'Generate Design Concept'}
                </button>
              </form>
            </div>

            <div className="flex-1 bg-gray-50 rounded-2xl p-6 md:p-8 min-h-[400px] flex items-center justify-center border-dashed border-2 border-gray-200">
              {!suggestion && !loading && (
                <div className="text-center text-gray-400 italic">
                  Complete the form to see AI-generated design specs.
                </div>
              )}
              {loading && (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
                  <p className="text-gray-500 font-medium">Analyzing typography patterns...</p>
                </div>
              )}
              {suggestion && (
                <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="border-b border-gray-200 pb-4">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Recommended Style</span>
                    <h3 className="text-2xl font-serif text-black">{suggestion.styleName}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Typography</span>
                      <p className="text-sm text-gray-700 mt-1">Heading: <span className="font-semibold">{suggestion.typography.heading}</span></p>
                      <p className="text-sm text-gray-700">Body: <span className="font-semibold">{suggestion.typography.body}</span></p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Layout Specs</span>
                      <p className="text-sm text-gray-700 mt-1">Margins: <span className="font-semibold">{suggestion.layoutSpecs.margins}</span></p>
                      <p className="text-sm text-gray-700">Spacing: <span className="font-semibold">{suggestion.layoutSpecs.lineSpacing}</span></p>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Ornaments</span>
                    <p className="text-sm text-gray-700 mt-1 italic">{suggestion.layoutSpecs.ornamentation}</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-100">
                    <p className="text-xs text-gray-600 leading-relaxed italic">
                      "{suggestion.rationale}"
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVisualizer;
