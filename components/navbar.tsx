"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, ShoppingCart, Youtube } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useCart } from "./cart-context";
import { CartDrawer } from "./cart-drawer";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const { totalItems, setIsOpen } = useCart();
  const { user, logout } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-4 right-4 z-50">
        <nav className="max-w-7xl mx-auto bg-card/80 backdrop-blur-xl border border-border rounded-2xl shadow-lg shadow-black/5">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  {mounted ? (
                    <Image
                      src={resolvedTheme === "dark" ? "/images/newlogofordarktheme.png" : "/images/newlogoforlighttheme.png"}
                      alt="Store"
                      fill
                      className="object-contain"
                      priority
                    />
                  ) : (
                    <div className="w-8 h-8 bg-muted rounded-lg" />
                  )}
                </div>
                <span className="text-xl font-bold tracking-tight">
                  Store
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      pathname === link.href
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 items-center justify-center transition-colors duration-200 cursor-pointer"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <button
                  onClick={() => setIsOpen(true)}
                  className="relative w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  aria-label="Open cart"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
                <div className="hidden sm:block">
                  <ThemeToggle />
                </div>
                
                {/* Login / User Avatar */}
                {mounted && user ? (
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                      {user.avatar}
                    </div>
                    <button
                      onClick={logout}
                      className="hidden sm:flex w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 items-center justify-center transition-colors duration-200 cursor-pointer"
                      aria-label="Logout"
                    >
                      <LogOut className="h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="hidden sm:flex w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 items-center justify-center transition-colors duration-200 cursor-pointer"
                    aria-label="Login"
                  >
                    <User className="h-5 w-5" />
                  </Link>
                )}
                
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-border">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        pathname === link.href
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Youtube className="h-5 w-5" />
                    YouTube
                  </a>
                  
                  {/* Mobile Login/Logout */}
                  {mounted && user ? (
                    <>
                      <div className="flex items-center gap-2 px-4 py-3">
                        <div className="w-8 h-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                          {user.avatar}
                        </div>
                        <span className="text-sm font-medium">{user.name}</span>
                      </div>
                      <button
                        onClick={() => {
                          logout();
                          setMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors duration-200"
                      >
                        <LogOut className="h-5 w-5" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors duration-200"
                    >
                      <User className="h-5 w-5" />
                      Login
                    </Link>
                  )}
                  
                  <div className="pt-2 sm:hidden">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
      <CartDrawer />
    </>
  );
}
