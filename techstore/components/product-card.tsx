"use client";

import Image from "next/image";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "./cart-context";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-square bg-secondary/50 overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full z-10">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <Image
            src={product.image}
            alt={product.name}
            width={280}
            height={280}
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Quick add button - appears on hover */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
              added
                ? "bg-green-500 text-white"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            {added ? (
              <>
                <Check className="h-4 w-4" />
                Added!
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
