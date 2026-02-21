"use client";

import Image from "next/image";
import { Award, Users, Globe, Heart, Target, Zap, Shield, Truck } from "lucide-react";

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "50+", label: "Products" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "We put our customers at the heart of everything we do, ensuring exceptional service and support.",
  },
  {
    icon: Target,
    title: "Quality Focus",
    description: "Every product in our store is carefully selected and tested to meet the highest standards.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of technology trends to bring you the latest and greatest products.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Your data and transactions are protected with industry-leading security measures.",
  },
];

const team = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    bio: "Tech enthusiast with 15+ years in the electronics industry",
  },
  {
    name: "Sarah Chen",
    role: "Head of Product",
    bio: "Curates our premium selection with an eye for quality",
  },
  {
    name: "Marcus Johnson",
    role: "Customer Success",
    bio: "Ensures every customer has an exceptional experience",
  },
  {
    name: "Emily Rodriguez",
    role: "Tech Specialist",
    bio: "Expert advice on all things tech",
  },
];

const milestones = [
  { year: "2020", title: "Founded", description: "Yay started with a simple mission" },
  { year: "2021", title: "First 1,000 Customers", description: "Reached our first major milestone" },
  { year: "2022", title: "Expanded Product Line", description: "Added smart home and accessories" },
  { year: "2023", title: "International Shipping", description: "Now shipping to 20+ countries" },
  { year: "2024", title: "Award Winning", description: "Best Online Electronics Retailer" },
  { year: "2025", title: "10,000+ Customers", description: "Continuing to grow and serve" },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/texture-wood.jpg"
            alt=""
            fill
            className="object-cover opacity-10 dark:opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              About <span className="text-accent">Yay</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We&apos;re on a mission to bring the best technology to everyone. 
              Founded with passion and built on trust.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-secondary/50">
                <Image
                  src="/images/product-laptop.png"
                  alt="Our Story"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border border-border">
                <Award className="h-8 w-8 text-accent mb-2" />
                <p className="font-bold">Award Winning</p>
                <p className="text-sm text-muted-foreground">Service 2024</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Our Story</h2>
              <p className="text-muted-foreground text-lg">
                Yay began in 2020 with a simple idea: technology should be accessible, 
                understandable, and enjoyable for everyone. What started as a small online 
                shop has grown into a trusted destination for tech enthusiasts worldwide.
              </p>
              <p className="text-muted-foreground text-lg">
                We believe that the right technology can transform lives. That&apos;s why we 
                carefully curate every product in our store, ensuring it meets our high 
                standards for quality, performance, and value.
              </p>
              <p className="text-muted-foreground text-lg">
                Today, we&apos;re proud to serve over 10,000 customers across 20+ countries, 
                helping them find the perfect devices to power their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">
              Milestones that mark our growth and success
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 ml-12 md:ml-0 md:text-right">
                    <div
                      className={`${
                        index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:text-left"
                      }`}
                    >
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 ring-4 ring-background" />

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              Passionate individuals dedicated to bringing you the best tech experience
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center text-2xl font-bold">
                  {member.name[0]}
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-accent text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground">
              What sets us apart from the competition
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2-Year Warranty</h3>
              <p className="text-muted-foreground">
                All products come with comprehensive warranty coverage for your peace of mind.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Shipping</h3>
              <p className="text-muted-foreground">
                Complimentary delivery on all orders over $50. Fast and reliable service.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-muted-foreground">
                Our knowledgeable team is here to help you make the right choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden bg-accent rounded-3xl p-12 lg:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-accent" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <Globe className="h-12 w-12 mx-auto mb-6 text-white/80" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Join Our Community
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Be part of our growing family of tech enthusiasts. 
                Start shopping today and experience the Yay difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/shop"
                  className="px-8 py-4 bg-white text-accent rounded-xl font-semibold hover:bg-white/90 transition-colors cursor-pointer"
                >
                  Start Shopping
                </a>
                <a
                  href="mailto:contact@yaystore.com"
                  className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors cursor-pointer"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
