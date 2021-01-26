export const addToCart = (payload) => {
  return {
    type: "ADD_TO_CART",
    payload,
  };
};

export const increment = (payload) => {
  return {
    type: "INCREMENT",
    payload,
  };
};

export const decrement = (payload) => {
  return {
    type: "DECREMENT",
    payload,
  };
};

export const removeProduct = (payload) => {
  return {
    type: "REMOVE_PRODUCT",
    payload,
  };
};
