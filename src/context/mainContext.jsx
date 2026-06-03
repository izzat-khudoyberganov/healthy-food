import { createContext, useReducer } from "react";
import { ADD_TO_CART, ADD_TO_LIKE, REMOVE_FROM_CART, REMOVE_FROM_LIKE } from "../store/type";
import { reducer } from "../store";

export const MainContext = createContext(null);

function MainContextProvider({ children }) {
  const initialState = {
    cartItems: [],
    likeItems: [],
  };

  const [state, dispatch] = useReducer(reducer,  initialState );
  
  function addToCart(el) {
    dispatch({ type: ADD_TO_CART, payload: el });
  }

  function addToLike(el) {
    dispatch({ type: ADD_TO_LIKE, payload: el });
  }

  function removeFromCart(id){
    dispatch({type: REMOVE_FROM_CART, payload: id})
  }

  function removeFromLike(id){
    dispatch({type: REMOVE_FROM_LIKE, payload: id})
  }

  
  const values = {
    addToCart,
    removeFromCart,
    addToLike,
    removeFromLike,
    cartItems: state.cartItems,
    likeItems: state.likeItems
  }

  console.log(values.likeItems);
  

  return (
    <MainContext.Provider value={values}>
      {children}
    </MainContext.Provider>
  );
}


export default MainContextProvider;