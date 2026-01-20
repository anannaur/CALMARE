
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import ProductDetail from './views/ProductDetail';
import About from './views/About';
import Checkout from './views/Checkout';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<(CartItem & { name: string })[]>([]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const handleAddToCart = (item: CartItem & { name: string }) => {
    setCart(prev => [...prev, item]);
    setCurrentPage('checkout');
  };

  const handleRemoveFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onSelectProduct={navigateToProduct} />;
      case 'product':
        return selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onAddToCart={handleAddToCart}
          />
        ) : <Home onSelectProduct={navigateToProduct} />;
      case 'about':
        return <About />;
      case 'checkout':
        return (
          <Checkout 
            items={cart} 
            onRemoveItem={handleRemoveFromCart} 
            onClear={clearCart} 
          />
        );
      default:
        return <Home onSelectProduct={navigateToProduct} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        onNavigate={setCurrentPage} 
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)} 
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
