"use client";
import { useState, useEffect, useCallback } from "react";
import type { Product } from "@/types/product";

export type CartItem = Product & { quantity: number };

export function useCarrinhoStore() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const saveCart = useCallback((items: CartItem[]) => {
    setCart(items);
    localStorage.setItem("cart", JSON.stringify(items));
    window.dispatchEvent(new Event("cartUpdated"));
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch {
        setCart([]);
      }
    }

    const syncCart = () => {
      const s = localStorage.getItem("cart");
      if (s) {
        try {
          setCart(JSON.parse(s));
        } catch {
          setCart([]);
        }
      } else {
        setCart([]);
      }
    };

    window.addEventListener("storage", syncCart);
    window.addEventListener("cartUpdated", syncCart);

    return () => {
      window.removeEventListener("storage", syncCart);
      window.removeEventListener("cartUpdated", syncCart);
    };
  }, []);

  const addToCart = (product: Product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    const updatedCart = [...cart];

    if (index >= 0) {
      updatedCart[index].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    saveCart(updatedCart);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    saveCart(updatedCart);
  };

  const updateQuantity = (productId: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    saveCart(updatedCart);
  };

  const clearCart = () => {
    saveCart([]);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
}
