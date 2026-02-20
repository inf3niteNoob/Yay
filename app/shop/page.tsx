"use client";

import { Suspense } from "react";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard, Product } from "@/components/product-card";
import { Search, SlidersHorizontal, X, Grid3X3, LayoutList } from "lucide-react";

const allProducts: Product[] = [
  {
    id: "laptop-1",
    name: "ProBook Elite X1",
    description: "15.6\" 4K OLED display, Intel Core i9-14900HX, 32GB RAM, RTX 4070, 1TB SSD",
    price: 2499.99,
    originalPrice: 2799.99,
    image: "/images/product-laptop.png",
    category: "Laptops",
    badge: "Best Seller",
  },
  {
    id: "laptop-2",
    name: "UltraBook Pro 14",
    description: "14\" 2.8K OLED, Intel Core Ultra 7, 16GB RAM, Intel Arc, 512GB SSD",
    price: 1499.99,
    image: "/images/product-laptop.png",
    category: "Laptops",
  },
  {
    id: "laptop-3",
    name: "Gaming Beast G15",
    description: "17.3\" QHD 240Hz, AMD Ryzen 9, RTX 4080, 32GB RAM, 2TB SSD",
    price: 3299.99,
    originalPrice: 3599.99,
    image: "/images/product-laptop.png",
    category: "Laptops",
    badge: "Hot",
  },
  {
    id: "phone-1",
    name: "SmartPhone X Pro",
    description: "6.7\" Super Retina XDR, A17 Pro chip, 256GB, Titanium design",
    price: 1099.99,
    image: "/images/product-phone.png",
    category: "Phones",
    badge: "New",
  },
  {
    id: "phone-2",
    name: "SmartPhone X",
    description: "6.1\" Super Retina XDR, A16 chip, 128GB, Aluminum design",
    price: 899.99,
    originalPrice: 999.99,
    image: "/images/product-phone.png",
    category: "Phones",
  },
  {
    id: "phone-3",
    name: "Galaxy Ultra S24",
    description: "6.8\" Dynamic AMOLED, Snapdragon 8 Gen 3, 512GB, S Pen included",
    price: 1299.99,
    image: "/images/product-phone.png",
    category: "Phones",
    badge: "Popular",
  },
  {
    id: "tablet-1",
    name: "TabPro 12.9",
    description: "12.9\" Liquid Retina XDR, M2 chip, 128GB, Apple Pencil support",
    price: 1099.99,
    originalPrice: 1199.99,
    image: "/images/product-tablet.png",
    category: "Tablets",
  },
  {
    id: "tablet-2",
    name: "Tab Air 11",
    description: "11\" Liquid Retina, M1 chip, 64GB, 5G capable",
    price: 699.99,
    image: "/images/product-tablet.png",
    category: "Tablets",
    badge: "Sale",
  },
  {
    id: "tablet-3",
    name: "Tab Mini 8.3",
    description: "8.3\" Liquid Retina, A15 chip, 256GB, Compact power",
    price: 549.99,
    image: "/images/product-tablet.png",
    category: "Tablets",
  },
  {
    id: "watch-1",
    name: "SmartWatch Ultra 2",
    description: "Titanium case, GPS + Cellular, 49mm, 100m water resistant",
    price: 799.99,
    image: "/images/product-watch.png",
    category: "Smart Watches",
    badge: "Popular",
  },
  {
    id: "watch-2",
    name: "SmartWatch Series 9",
    description: "Aluminum case, GPS, 45mm, Advanced health sensors",
    price: 429.99,
    originalPrice: 499.99,
    image: "/images/product-watch.png",
    category: "Smart Watches",
  },
  {
    id: "watch-3",
    name: "SmartWatch SE",
    description: "Aluminum case, GPS, 44mm, Essential features",
    price: 249.99,
    image: "/images/product-watch.png",
    category: "Smart Watches",
    badge: "Budget Pick",
  },
];

const categories = ["All", "Laptops", "Phones", "Tablets", "Smart Watches"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "name", label: "Name: A-Z" },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Filter by price
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy, priceRange]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setPriceRange([0, 5000]);
    setSortBy("featured");
  };

  const hasActiveFilters =
    selectedCategory !== "All" || searchQuery || priceRange[0] > 0 || priceRange[1] < 5000;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Shop</h1>
          <p className="text-muted-foreground">
            Browse our collection of premium electronics
          </p>
        </div>

        {/* Search and Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden px-4 py-3 bg-card border border-border rounded-xl hover:bg-secondary transition-colors"
            >
              <SlidersHorizontal className="h-5 w-5" />
            </button>
            <div className="hidden sm:flex bg-card border border-border rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <LayoutList className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`${
              mobileFiltersOpen ? "block" : "hidden"
            } lg:block w-full lg:w-64 shrink-0 space-y-6`}
          >
            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                      selectedCategory === category
                        ? "bg-accent/10 text-accent font-medium"
                        : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-semibold mb-4">Price Range</h3>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0] || ""}
                    onChange={(e) =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                    className="w-full px-3 py-2 bg-card border border-border rounded-lg text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1] || ""}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className="w-full px-3 py-2 bg-card border border-border rounded-lg text-sm"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-full accent-accent"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="w-full py-2 text-accent text-sm font-medium hover:underline"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} products
              </p>
              {hasActiveFilters && (
                <div className="flex gap-2">
                  {selectedCategory !== "All" && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      {selectedCategory}
                      <button onClick={() => setSelectedCategory("All")}>
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-pulse space-y-8">
            <div className="h-8 w-48 bg-secondary rounded" />
            <div className="h-4 w-96 bg-secondary rounded" />
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 bg-secondary rounded-2xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
