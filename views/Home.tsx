
import React from 'react';
import AIImage from '../components/AIImage';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface HomeProps {
  onSelectProduct: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectProduct }) => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase">
              The Future of Hydration
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              Calmness in <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Every Sip.
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              The world's first smart bottle that visualizes your physiological load using integrated HR & GSR sensors. Know your state. Find your flow.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onSelectProduct(PRODUCTS[0])}
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all transform hover:scale-105"
              >
                Shop CALMARE One
              </button>
              <button className="px-8 py-4 border border-slate-300 rounded-full font-semibold hover:bg-slate-50 transition-all">
                Learn the Tech
              </button>
            </div>
          </div>
          <div className="hidden lg:block relative h-[600px]">
             <AIImage 
               prompt="Front view of CALMARE smart water bottle, pearl white, glowing soft blue light in the double wall layer, minimalist spa background" 
               className="h-full w-full object-cover"
             />
             <div className="absolute -bottom-6 -left-6 glass-morphism p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
                  <span className="text-xs font-bold uppercase text-slate-500">Live Bio-Feedback</span>
                </div>
                <p className="text-sm font-medium text-slate-800 italic">"Blue indicates optimal parasympathetic balance."</p>
             </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">Bio-Awareness, Simplified.</h2>
          <p className="text-lg text-slate-600">
            Most trackers live on your wrist. We put awareness in the one thing you reach for all day: water. No screens, no distractions—just intuitive color feedback.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'HR Sensing', desc: 'Medical-grade optical sensors track heart rate variability through your grip.', icon: '❤️' },
            { title: 'GSR Tech', desc: 'Galvanic Skin Response monitors micro-sweat changes linked to nervous system load.', icon: '⚡' },
            { title: 'Double Wall', desc: 'Premium insulation keeps water cold for 24h while enabling 360° light diffusion.', icon: '❄️' },
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collection Section */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Collection</h2>
              <p className="text-slate-500">Engineered for every lifestyle.</p>
            </div>
            <button className="text-blue-600 font-semibold hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PRODUCTS.map((product) => (
              <div 
                key={product.id} 
                className="group cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                <div className="aspect-[4/5] bg-white rounded-3xl overflow-hidden mb-6 relative">
                  <AIImage 
                    prompt={`${product.name} smart water bottle, premium lifestyle setting, sleek ${product.colors[0]} color`}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold rounded-full">
                      Starting at ${product.price}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{product.name}</h3>
                <p className="text-slate-500 mt-2">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Disclaimer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white space-y-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-20 blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-20 blur-[100px] -ml-32 -mb-32"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold relative z-10">Data Driven. Wellness Minded.</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg relative z-10 leading-relaxed">
            CALMARE uses non-invasive physiological sensors to estimate autonomic state. It is not a medical device and should not be used for diagnosis. Always consult with a healthcare professional for clinical concerns.
          </p>
          <div className="flex justify-center space-x-8 pt-8 relative z-10 opacity-70">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">0%</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">Latex</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">Recyclable</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">IPX7</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">Waterproof</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
