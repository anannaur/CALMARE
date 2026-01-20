
import React, { useState, useEffect } from 'react';
import { generateProductVisual } from '../services/geminiService';

interface AIImageProps {
  prompt: string;
  className?: string;
}

const AIImage: React.FC<AIImageProps> = ({ prompt, className = "" }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    const fetchImage = async () => {
      setLoading(true);
      const url = await generateProductVisual(prompt);
      if (isMounted) {
        setImageUrl(url);
        setLoading(false);
      }
    };

    fetchImage();
    return () => { isMounted = false; };
  }, [prompt]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-slate-200 animate-pulse rounded-2xl ${className}`}>
        <div className="text-slate-400 text-sm font-medium">Visualizing...</div>
      </div>
    );
  }

  if (!imageUrl) {
    return (
      <div className={`flex items-center justify-center bg-slate-100 rounded-2xl ${className}`}>
        <img 
          src={`https://picsum.photos/seed/${encodeURIComponent(prompt)}/800/1200`} 
          alt="Product Placeholder" 
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    );
  }

  return (
    <img 
      src={imageUrl} 
      alt="Generated Product Visual" 
      className={`w-full h-full object-cover rounded-2xl shadow-xl transition-opacity duration-700 opacity-100 ${className}`}
    />
  );
};

export default AIImage;
