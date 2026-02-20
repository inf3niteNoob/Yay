"use client";

import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/components/cart-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
}
