import { api } from "./axios";

type Categories = {
  id: string;
  name: string;
  image: string;
  count: number;
};

export const categories = () => {
  return new Promise<Categories[]>((resolve, reject) => {
    api
      .get("products/categories/")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};
