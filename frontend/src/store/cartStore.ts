import { create } from "zustand";
import { Product } from "../api/product.api";
import { persist } from "zustand/middleware";

export type Cart = {
  product: Product;
  quantity: number;
};

export type CartStore = {
  cart: Cart[];
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  clearCart: () => void;
};

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      addItem: (product) => {
        set((prev) => {
          const existingItem = prev.cart.find(
            (item) => item.product.id === product.id
          );
          if (existingItem) {
            existingItem.quantity += 1;
            return {
              cart: [
                ...prev.cart.filter((item) => item.product.id !== product.id),
                existingItem,
              ],
            };
          }
          return { cart: [...prev.cart, { product, quantity: 1 }] };
        });
      },
      removeItem: (product) => {
        set((prev) => {
          const existingItem = prev.cart.find(
            (item) => item.product.id === product.id
          );
          if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity -= 1;
            return {
              cart: [
                ...prev.cart.filter((item) => item.product.id !== product.id),
                existingItem,
              ],
            };
          }
          return {
            cart: [
              ...prev.cart.filter((item) => item.product.id !== product.id),
            ],
          };
        });
      },
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    { name: "cart" }
  )
);
