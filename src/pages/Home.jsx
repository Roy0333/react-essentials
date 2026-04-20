import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../services/productApi";
import ProductCard from "../components/cards/ProductCrad";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

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
      <div className="flex justify-end mb-5">
        <Link
          to="/add-products"
          className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg"
        >
          <Plus /> Add Product
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((p, index) => (
          <ProductCard productCard={p} key={index} />
        ))}
      </div>
    </>
  );
};

export default Home;
