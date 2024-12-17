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
export type Review = {
  id: string;
  rating: number;
  review: string;
  created: string;
  customer: string;
};

export type RatingSet = {
  rating: number;
  count: number;
};

export type IsReviewed = {
  id: string;
  rating: number;
  review: string;
};

export type ProductDetail = {
  id: string;
  name: string;
  rating: number;
  total_reviews: number;
  images: string[];
  price: string;
  mrp: string;
  description: string;
  category: string;
  seller: string;
  reviews: Review[];
  rating_set: RatingSet[];
  is_reviewed: boolean;
  user_review: IsReviewed;
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

export const productDetail = ({ id }: { id: string }) => {
  return new Promise<ProductDetail>((resolve, reject) => {
    api
      .get(`products/product/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
