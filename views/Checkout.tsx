
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutProps {
  items: (CartItem & { name: string })[];
  onRemoveItem: (index: number) => void;
  onClear: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onRemoveItem, onClear }) => {
  const [step, setStep] = useState<'bag' | 'shipping' | 'payment' | 'success'>('bag');
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = total > 100 ? 0 : 15;

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="pt-32 pb-64 text-center space-y-6">
        <h2 className="text-3xl font-bold">Your bag is empty</h2>
        <p className="text-slate-500">Looks like you haven't added anything to your wellness collection yet.</p>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="pt-32 pb-64 text-center space-y-8 animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-4xl">✓</div>
        <h2 className="text-4xl font-bold">Thank you for choosing Calm.</h2>
        <p className="text-slate-500 max-w-md mx-auto">Your CALMARE experience is being prepared. You'll receive a confirmation email with tracking details shortly.</p>
        <button 
          onClick={onClear}
          className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold"
        >
          Back to Collection
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
           <h1 className="text-4xl font-bold">Checkout</h1>
           <div className="flex space-x-4 text-xs font-bold uppercase tracking-widest">
             <span className={step === 'bag' ? 'text-blue-600' : 'text-slate-300'}>01 Bag</span>
             <span className="text-slate-300">/</span>
             <span className={step === 'shipping' ? 'text-blue-600' : 'text-slate-300'}>02 Shipping</span>
             <span className="text-slate-300">/</span>
             <span className={step === 'payment' ? 'text-blue-600' : 'text-slate-300'}>03 Payment</span>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            {step === 'bag' && (
              <div className="space-y-6">
                {items.map((item, idx) => (
                  <div key={idx} className="flex space-x-6 pb-6 border-b border-slate-100">
                    <div className="w-24 h-32 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={`https://picsum.photos/seed/${item.color}/400/600`} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-slate-500 text-sm mt-1">{item.color} • {item.size}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-slate-400">Qty: {item.quantity}</span>
                        <button 
                          onClick={() => onRemoveItem(idx)}
                          className="text-red-500 text-xs font-bold uppercase tracking-widest hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {step === 'shipping' && (
              <div className="grid grid-cols-2 gap-6 animate-in slide-in-from-right-8 duration-500">
                <div className="col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Shipping Address</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
                </div>
              </div>
            )}

            {step === 'payment' && (
              <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
                <div className="p-8 bg-slate-900 rounded-2xl text-white space-y-8 relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-8 bg-white/20 rounded-md"></div>
                    <span className="font-bold tracking-widest uppercase opacity-60">Calmare Rewards</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs opacity-50 font-bold uppercase tracking-widest">Card Holder</p>
                    <p className="text-lg tracking-widest">CALMARE PREFERRED</p>
                  </div>
                </div>
                <div className="space-y-4">
                   <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Card Number</label>
                    <input type="text" placeholder="•••• •••• •••• ••••" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" className="p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
                    <input type="text" placeholder="CVC" className="p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl space-y-6">
              <h3 className="text-xl font-bold">Summary</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span className="text-slate-900 font-bold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Shipping</span>
                  <span className="text-slate-900 font-bold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Tax</span>
                  <span className="text-slate-900 font-bold">${(total * 0.08).toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-blue-600">${(total * 1.08 + shipping).toFixed(2)}</span>
                </div>
              </div>

              {step === 'bag' && (
                <button 
                  onClick={() => setStep('shipping')}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all"
                >
                  Continue to Shipping
                </button>
              )}
              {step === 'shipping' && (
                <button 
                  onClick={() => setStep('payment')}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all"
                >
                  Continue to Payment
                </button>
              )}
              {step === 'payment' && (
                <button 
                  onClick={() => setStep('success')}
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all"
                >
                  Confirm Purchase
                </button>
              )}
              
              <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest">
                Secure 256-bit encrypted checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
