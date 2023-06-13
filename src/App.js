import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import productReducer from "./redux/reducer";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import UpdateProductForm from "./components/UpdateProductForm";

const store = createStore(productReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Product Management</h1>
        <ProductList />
        <h1>Add Product</h1>
        <AddProductForm />
        <h1>Update Product</h1>
        <UpdateProductForm />
      </div>
    </Provider>
  );
};

export default App;
