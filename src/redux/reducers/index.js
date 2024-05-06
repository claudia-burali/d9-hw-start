const initialState = {
  favorite: {
    content: [],
  },
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorite: {
          ...state.favorite,
          content: state.favorite.content.concat(action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
