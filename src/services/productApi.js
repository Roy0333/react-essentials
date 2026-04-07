import { api } from "./api";

export const fetchProducts = () => {
  return api("/products");
};
