import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../services/productApi";
import ProductCard from "../components/cards/ProductCrad";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getData();
  }, []);
  // const dispatch = useDispatch();
  // const { items, status } = useSelector((state) => state.products);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  // if (status === "loading") return <p>Loading...</p>;
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard productCard={p} />
        ))}
      </div>
    </>
  );
};

export default Home;
