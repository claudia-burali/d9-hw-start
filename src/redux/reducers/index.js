const initialState = {
  cart: {
    content: [],
  },
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.concat(action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
