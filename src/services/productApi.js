import { api } from "./api";

export const fetchProducts = () => {
  return api("/products");
};

export const addProducts = (productData) => {
  return api("/products", {
    method: "POST",
    body: productData,
  });
};
