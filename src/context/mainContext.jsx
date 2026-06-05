import { createContext, useReducer } from "react";
import { ADD_ONE, ADD_TO_CART, ADD_TO_LIKE, REMOVE_FROM_CART, REMOVE_FROM_LIKE, REMOVE_ONE } from "../store/type";
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

  function addOne(id) {
    dispatch({type: ADD_ONE, payload: id})
  }

  function removeOne(id) {  
    dispatch({type: REMOVE_ONE, payload: id})
  }

  
  const values = {
    addToCart,
    removeFromCart,
    addToLike,
    removeFromLike,
    addOne,
    removeOne,
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