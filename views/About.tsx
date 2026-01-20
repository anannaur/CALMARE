
import React from 'react';
import AIImage from '../components/AIImage';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-32">
      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold leading-tight">The Intersection of <br /> Biology & Design.</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            CALMARE was born from a simple observation: we are most out of touch with our internal state when we are most busy. 
          </p>
          <p className="text-slate-600">
            Our founders, a neuroscientist and a product designer, wanted to create a passive feedback loop. Instead of another notification on your wrist, we wanted a gentle, ambient signal. Something that reminded you to slow down, hydrate, and breathe, just by glancing at your water bottle.
          </p>
          <div className="pt-8 flex space-x-12">
            <div>
              <div className="text-3xl font-bold text-blue-600">2022</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Founded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">12+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Patents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">150k</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Lives Balanced</div>
            </div>
          </div>
        </div>
        <div className="aspect-square bg-slate-200 rounded-[4rem] overflow-hidden rotate-3 shadow-2xl">
          <AIImage 
            prompt="Minimalist bright laboratory, researchers looking at a glowing blue smart water bottle, premium wellness tech vibes" 
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Tech Explained */}
      <section className="bg-slate-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-4xl font-bold">The Science of CALMARE</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Understanding the physiological markers that drive our ambient bio-feedback engine.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-xl">01</div>
                <h3 className="text-2xl font-bold">Galvanic Skin Response (GSR)</h3>
                <p className="text-slate-400 leading-relaxed">
                  Our palm contains thousands of sweat glands controlled by the sympathetic nervous system. Even invisible micro-changes in skin conductivity reveal your body's stress response. CALMARE's conductive steel grip reads these signals in milliseconds.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center font-bold text-xl">02</div>
                <h3 className="text-2xl font-bold">Optical Heart Rate (HR)</h3>
                <p className="text-slate-400 leading-relaxed">
                  Using high-precision photoplethysmography (PPG), we measure the rhythm of your blood flow through your fingers. This allows us to calculate Heart Rate Variability (HRV)—the ultimate window into your parasympathetic recovery.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative glass-morphism border border-white/10 p-8 rounded-3xl space-y-8">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800">
                   <AIImage 
                    prompt="Exploded view diagram of a smart water bottle showing sensors, battery, and double wall LED layer, sci-fi aesthetic" 
                    className="w-full h-full opacity-80"
                  />
                </div>
                <p className="text-sm italic text-slate-400 text-center">Engineered in Zurich. Assembled with 100% sustainable materials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        <h2 className="text-3xl font-bold">Better for You, Better for the Planet.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Ethical Steel', desc: 'Sourced from 90% recycled post-consumer medical grade steel.', icon: '♻️' },
            { title: 'Zero Waste', desc: 'Our packaging is 100% compostable and plastic-free.', icon: '📦' },
            { title: 'Lifetime Repair', desc: 'We offer a core-swapping program for batteries and sensors.', icon: '🛠️' },
          ].map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
