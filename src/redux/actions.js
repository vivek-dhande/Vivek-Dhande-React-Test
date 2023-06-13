// Define constants for action types
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

// Define action creators
export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product
});
