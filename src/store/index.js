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
      console.log("add to cart");
      break;
    case REMOVE_FROM_CART:
      console.log("remove from cart");
      break;
    case ADD_TO_LIKE:
      console.log("add to like");
      break;
    case REMOVE_FROM_LIKE:
      console.log("remove from like");
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
