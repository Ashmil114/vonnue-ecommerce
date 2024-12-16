import { api } from "./axios";
export type Product = {
  id: string;
  name: string;
  price: string;
  mrp: string;
  seller: string;
  description: string;
  category: string;
  images: string[];
  rating: number;
  total_reviews: number;
};

export const products = () => {
  return new Promise<Product[]>((resolve, reject) => {
    api
      .get("products/")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
