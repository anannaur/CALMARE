
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')} 
              className="text-2xl font-bold tracking-widest text-slate-800 hover:text-blue-600 transition-colors"
            >
              CALMARE
            </button>
            <div className="hidden md:flex space-x-6 text-sm font-medium tracking-wide">
              <button onClick={() => onNavigate('home')} className="text-slate-600 hover:text-slate-900">COLLECTION</button>
              <button onClick={() => onNavigate('about')} className="text-slate-600 hover:text-slate-900">TECHNOLOGY</button>
              <button onClick={() => onNavigate('about')} className="text-slate-600 hover:text-slate-900">OUR STORY</button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button 
              onClick={() => onNavigate('checkout')}
              className="relative p-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-4">
          <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="block w-full text-left text-lg font-medium">Collection</button>
          <button onClick={() => { onNavigate('about'); setIsOpen(false); }} className="block w-full text-left text-lg font-medium">Technology</button>
          <button onClick={() => { onNavigate('about'); setIsOpen(false); }} className="block w-full text-left text-lg font-medium">Our Story</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
