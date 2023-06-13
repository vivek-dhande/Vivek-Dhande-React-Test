import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions";

const AddProductForm = () => {
  // Initialize state variables
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // Get dispatch function from Redux store
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new product object with user input
    const newProduct = {
      id: Date.now(),
      title,
      description,
      price
    };

    // Dispatch action to add new product to store
    dispatch(addProduct(newProduct));

    // Reset state variables to clear form
    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
