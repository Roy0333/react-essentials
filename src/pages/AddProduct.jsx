import { UploadCloudIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProducts } from "../services/productApi";

const AddProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [count, setCount] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      title,
      price: parseFloat(price),
      category,
      image,
      description,
      rating: parseFloat(rating),
      count: parseInt(count),
    };

    try {
      const res = await addProducts(productData);
      console.log("Product added successfully:", res);

      // Reset form
      setTitle("");
      setPrice("");
      setCategory("");
      setImage("");
      setDescription("");
      setRating("");
      setCount("");

      alert("Product added successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error adding product:", err);
      alert("Failed to add product. Please try again.");
    }
  };
  return (
    <div className="">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-purple-500">Add Product</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label htmlFor="title" className=" text-black">
              Product Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-1">
            <label htmlFor="price" className=" text-black">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              className="p-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1">
            <label htmlFor="category" className=" text-black">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Image URL */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label htmlFor="image" className=" text-black">
              Image
            </label>
            <div className="rounded-lg border-2 border-dashed border-gray-300 bg-white relative flex flex-col py-20 justify-center items-center">
              <input
                type="file"
                id="image"
                name="image"
                accept=".jpg,.jpeg,.png"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setImage(reader.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="absolute left-0 top-0 w-full h-full opacity-0"
              />
              <UploadCloudIcon className="w-16 h-auto mb-5 text-purple-600" />
              <p className="font-bold">Upload .JPG & .PNG formatted image</p>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label htmlFor="description" className=" text-black">
              Description
            </label>
            <textarea
              rows="4"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Rating */}
          <div className="flex flex-col gap-1">
            <label htmlFor="rating" className=" text-black">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={rating}
              onChange={(e) => setRating(parseFloat(e.target.value))}
              className="p-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Count */}
          <div className="flex flex-col gap-1">
            <label htmlFor="count" className=" text-black">
              Rating Count
            </label>
            <input
              type="number"
              id="count"
              name="count"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
              className="p-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-purple-600 text-black font-semibold hover:bg-purple-700 transition-all duration-200 shadow-md shadow-purple-500/20"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
