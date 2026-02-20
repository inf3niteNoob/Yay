"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Truck, Star, ChevronRight } from "lucide-react";
import { ProductCard, Product } from "@/components/product-card";

const featuredProducts: Product[] = [
  {
    id: "laptop-1",
    name: "ProBook Elite",
    description: "15.6\" 4K OLED display, Intel Core i9, 32GB RAM, RTX 4070",
    price: 2499.99,
    originalPrice: 2799.99,
    image: "/images/product-laptop.png",
    category: "Laptops",
    badge: "Best Seller",
  },
  {
    id: "phone-1",
    name: "SmartPhone X Pro",
    description: "6.7\" Super Retina XDR, A17 Pro chip, 256GB storage",
    price: 1099.99,
    image: "/images/product-phone.png",
    category: "Phones",
    badge: "New",
  },
  {
    id: "tablet-1",
    name: "TabPro 12.9",
    description: "12.9\" Liquid Retina, M2 chip, 128GB, Apple Pencil support",
    price: 1099.99,
    originalPrice: 1199.99,
    image: "/images/product-tablet.png",
    category: "Tablets",
  },
  {
    id: "watch-1",
    name: "SmartWatch Ultra",
    description: "Titanium case, GPS + Cellular, 49mm, 100m water resistant",
    price: 799.99,
    image: "/images/product-watch.png",
    category: "Smart Watches",
    badge: "Popular",
  },
];

const features = [
  {
    icon: Zap,
    title: "Latest Technology",
    description: "Stay ahead with cutting-edge devices and innovations",
  },
  {
    icon: Shield,
    title: "2-Year Warranty",
    description: "Comprehensive protection on all premium products",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary delivery on orders over $50",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Tech Enthusiast",
    content: "The best tech store I've ever shopped at. Fast delivery and excellent customer support!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    content: "Amazing selection of laptops. Found the perfect development machine at a great price.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Content Creator",
    content: "Quality products and the return policy gives me peace of mind. Highly recommend!",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background with wood texture */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/texture-wood.jpg"
            alt=""
            fill
            className="object-cover opacity-20 dark:opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-accent/5" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                New Collection 2025
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                Premium
                <span className="text-accent"> Tech</span>
                <br />
                For Modern Life
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Discover the latest laptops, smartphones, tablets, and smart watches. 
                Elevate your digital experience with cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-colors cursor-pointer"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trusted by 10,000+ customers
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl" />
                <Image
                  src="/images/product-laptop.png"
                  alt="Premium Laptop"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
                {/* Floating cards */}
                <div className="absolute -left-8 top-1/4 bg-card p-4 rounded-2xl shadow-xl border border-border animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Performance</p>
                      <p className="font-bold">Elite</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-2xl shadow-xl border border-border animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Warranty</p>
                      <p className="font-bold">2 Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Featured Products
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Handpicked selection of our best-selling and newest tech products
              </p>
            </div>
            <Link
              href="/shop"
              className="hidden sm:inline-flex items-center gap-2 text-accent font-medium hover:underline"
            >
              View All Products
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-accent font-medium"
            >
              View All Products
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Banner */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Laptops", image: "/images/product-laptop.png", count: "24 products" },
              { name: "Phones", image: "/images/product-phone.png", count: "18 products" },
              { name: "Tablets", image: "/images/product-tablet.png", count: "12 products" },
              { name: "Smart Watches", image: "/images/product-watch.png", count: "15 products" },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/shop?category=${category.name.toLowerCase()}`}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square p-8 flex items-center justify-center bg-gradient-to-br from-secondary/50 to-transparent">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={200}
                    height={200}
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background to-transparent">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Join thousands of satisfied customers who trust TechStore
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 bg-card rounded-2xl border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-medium">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden bg-primary rounded-3xl p-12 lg:p-20">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Upgrade Your Tech?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Get 10% off your first order when you sign up for our newsletter
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
