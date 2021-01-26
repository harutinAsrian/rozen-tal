const initialCartState = {
  itemInfo: [],
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      for (let i = 0; i < state.itemInfo.length; i++) {
        if (state.itemInfo[i].id === action.payload.id) {
          return { ...state };
        }
      }
      return { ...state, itemInfo: [...state.itemInfo, action.payload] };

    case "INCREMENT":
      const indexInc = state.itemInfo.findIndex(
        (item) => item.id === action.payload
      );

      const newStateInc = [...state.itemInfo];
      newStateInc[indexInc].quantity++;
      newStateInc[indexInc].total = Math.floor(
        newStateInc[indexInc].quantity * newStateInc[indexInc].price
      );

      return {
        ...state,
        itemInfo: newStateInc,
      };

    case "DECREMENT":
      const indexDec = state.itemInfo.findIndex(
        (item) => item.id === action.payload
      );

      const newStateDec = [...state.itemInfo];
      newStateDec[indexDec].total = Math.floor(
        newStateDec[indexDec].quantity * newStateDec[indexDec].price
      );
      if (newStateDec[indexDec].quantity > 1) newStateDec[indexDec].quantity--;
      else {
        const filteredState = state.itemInfo.filter(
          (item) => item.id !== action.payload
        );
        return { ...state, itemInfo: filteredState };
      }
      return {
        ...state,
        itemInfo: newStateDec,
      };

    case "REMOVE_PRODUCT":
      const filteredState = state.itemInfo.filter(
        (item) => item.id !== action.payload
      );

      return { ...state, itemInfo: filteredState };

    default:
      return state;
  }
};
export default cartReducer;
