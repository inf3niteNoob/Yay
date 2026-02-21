"use client";

import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/components/cart-context";
import { AuthProvider } from "@/components/auth-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
