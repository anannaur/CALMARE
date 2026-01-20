
import React, { useState } from 'react';
import { Product, BottleSize, BottleColor } from '../types';
import AIImage from '../components/AIImage';
import { REVIEWS, FAQS } from '../constants';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (item: any) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<BottleSize>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<BottleColor>(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'tech'>('details');

  const handleAddToCart = () => {
    onAddToCart({
      productId: product.id,
      name: product.name,
      size: selectedSize,
      color: selectedColor,
      quantity,
      price: product.price
    });
  };

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Gallery */}
          <div className="space-y-6 sticky top-28">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 shadow-lg">
              <AIImage 
                prompt={`${product.name} water bottle in ${selectedColor} finish, studio lighting, detailed sensor grip, glowing wall`}
                className="w-full h-full"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-2xl bg-slate-100 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                   <AIImage 
                    prompt={`${product.name} detail view ${i}, close up on sensors, sleek packaging, ${selectedColor}`} 
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Configuration */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">{product.name}</h1>
              <p className="text-2xl font-light text-slate-600">${product.price.toFixed(2)}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Color</h3>
                <div className="flex flex-wrap gap-4">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 rounded-xl border-2 transition-all ${
                        selectedColor === color 
                        ? 'border-blue-600 bg-blue-50 text-blue-900' 
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Size</h3>
                <div className="flex gap-4">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-8 py-3 rounded-xl border-2 transition-all ${
                        selectedSize === size 
                        ? 'border-blue-600 bg-blue-50 text-blue-900' 
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center border border-slate-300 rounded-xl">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-slate-50"
                >-</button>
                <span className="px-6 font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-slate-50"
                >+</button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-grow py-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all transform active:scale-95"
              >
                Add to Bag
              </button>
            </div>

            {/* Product Tabs */}
            <div className="border-t border-slate-200 pt-10">
              <div className="flex space-x-8 border-b border-slate-200 mb-8">
                {(['details', 'specs', 'tech'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
                      activeTab === tab ? 'text-blue-600' : 'text-slate-400'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>}
                  </button>
                ))}
              </div>

              <div className="min-h-[200px] animate-in fade-in duration-500">
                {activeTab === 'details' && (
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">{product.description}</p>
                    <ul className="grid grid-cols-2 gap-4 pt-4">
                      {product.features.map((f, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-500">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <dl className="space-y-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-slate-100 pb-2">
                        <dt className="text-sm font-medium text-slate-500">{key}</dt>
                        <dd className="text-sm font-bold text-slate-900">{value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {activeTab === 'tech' && (
                  <div className="space-y-6">
                    <div className="p-6 bg-blue-50 rounded-2xl">
                      <h4 className="font-bold text-blue-900 mb-2">Physiological Indicator Engine</h4>
                      <p className="text-sm text-blue-800 leading-relaxed">
                        Our proprietary algorithm combines HR and GSR data to calculate your autonomic balance. The LED wall changes hue to guide you:
                      </p>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="text-center">
                          <div className="w-full h-2 rounded-full bg-blue-400 mb-1"></div>
                          <span className="text-[10px] font-bold text-blue-600 uppercase">Recovery</span>
                        </div>
                        <div className="text-center">
                          <div className="w-full h-2 rounded-full bg-purple-400 mb-1"></div>
                          <span className="text-[10px] font-bold text-purple-600 uppercase">Focus</span>
                        </div>
                        <div className="text-center">
                          <div className="w-full h-2 rounded-full bg-red-400 mb-1"></div>
                          <span className="text-[10px] font-bold text-red-600 uppercase">Load</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-32 pt-16 border-t border-slate-200">
          <h2 className="text-3xl font-bold mb-12">Collective Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-400">
                  <span>{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold mb-12">Frequent Queries</h2>
          <div className="max-w-3xl space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group p-6 bg-slate-50 rounded-2xl cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-slate-900 list-none">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed animate-in fade-in duration-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
