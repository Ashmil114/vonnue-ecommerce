import { Product } from "../api/product.api";
import { create } from "zustand";

type ProductStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

export const useProduct = create<ProductStore>()((set) => ({
  products: [],
  setProducts: (products) => {
    set({ products });
  },
}));
