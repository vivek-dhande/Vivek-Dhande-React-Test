import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../redux/actions";

const UpdateProductForm = () => {
  // Define state variables
  const [selectedTitle, setSelectedTitle] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");
  const [idToUpdate, setIdToUpdate] = useState("");

  // Retrieve product list from Redux store
  const productList = useSelector((state) => state.productList);

  // Define dispatch function for updating product
  const dispatch = useDispatch();

  // Handle change in selected product title
  const handleTitleChange = (e) => {
    setSelectedTitle(e.target.value);

    // Find selected product in product list
    const selectedProduct = productList.find(
      (product) => product.title === e.target.value
    );

    // If selected product is found, populate form fields with its data
    if (selectedProduct) {
      setIdToUpdate(selectedProduct.id);
      setUpdatedTitle(selectedProduct.title);
      setUpdatedDescription(selectedProduct.description);
      setUpdatedPrice(selectedProduct.price);
    }
  };

  // Handle form submission for updating product
  const handleUpdate = (e) => {
    e.preventDefault();

    // Create updated product object
    const updatedProduct = {
      id: idToUpdate,
      title: updatedTitle,
      description: updatedDescription,
      price: updatedPrice
    };

    // Dispatch action to update product in Redux store
    dispatch(updateProduct(updatedProduct));

    // Reset form fields and selected product
    setSelectedTitle("");
    setUpdatedTitle("");
    setUpdatedDescription("");
    setUpdatedPrice("");
  };

  return (
    <form onSubmit={handleUpdate}>
      <select value={selectedTitle} onChange={handleTitleChange}>
        <option value="">Select Title</option>
        {productList.map((product) => (
          <option key={product.id} value={product.title}>
            {product.title}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Title"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={updatedDescription}
        onChange={(e) => setUpdatedDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Price"
        value={updatedPrice}
        onChange={(e) => setUpdatedPrice(e.target.value)}
        required
      />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProductForm;
