const BASE_URL = "https://fakestoreapi.com";

export const api = async (endpoint, options = {}) => {
  const { method = "GET", body, headers = {} } = options;

  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};
