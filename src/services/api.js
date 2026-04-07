const BASE_URL = "https://fakestoreapi.com";

export const api = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};
