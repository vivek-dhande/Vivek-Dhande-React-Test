import {
  FETCH_PRODUCTS_SUCCESS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT
} from "./actions";

const initialState = {
  productList: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productList: state.productList.filter(
          (product) => product.id !== action.payload
        )
      };
    case ADD_PRODUCT:
      return {
        ...state,
        productList: [...state.productList, action.payload]
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        productList: state.productList.map((product) =>
          product.id === action.payload.id ? action.payload : product
        )
      };
    default:
      return state;
  }
};

export default productReducer;
