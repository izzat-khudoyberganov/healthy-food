import {
  ADD_ONE,
  ADD_TO_CART,
  ADD_TO_LIKE,
  REMOVE_FROM_CART,
  REMOVE_FROM_LIKE,
  REMOVE_ONE,
} from "./type";

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((el) => el.id !== action.payload),
      };
      break;
    case ADD_TO_LIKE:
      return {
        ...state,
        likeItems: [
          ...state.likeItems,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
      break;
    case REMOVE_FROM_LIKE:
      return {
        ...state,
        likeItems: state.likeItems.filter((el) => el.id !== action.payload),
      };
      break;
    case ADD_ONE:
      console.log("add one");
      break;
    case REMOVE_ONE:
      console.log("remove one");
      break;
    default:
      console.log("Unknown function type");
  }
}
