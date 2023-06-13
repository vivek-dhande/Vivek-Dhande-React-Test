import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsSuccess, deleteProduct } from "../redux/actions";

const ProductList = () => {
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  /**
   * Fetches product data from API and dispatches action to update state.
   */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        dispatch(fetchProductsSuccess(data.products));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  /**
   * Dispatches action to delete product from state.
   *
   * @param {number} id - ID of product to be deleted.
   */
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Thumbnail</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {productList.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <img src={product.thumbnail} alt={product.title} />
            </td>
            <td>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
