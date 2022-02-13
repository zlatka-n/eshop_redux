import React from 'react'
import {createContext, useContext} from 'react';
import {initState} from "./initState";

const BuyContext = React.createContext();

//////TODO: actions/////
function buyReducer(state = initState, action) {
  switch(action.type) {
    case 'buyItem': {
      //get items data from the products array
      const id = action.payload;
      const book = state.products.find((prod) => prod.id === id);
      const isInCart = state.buy.find((book) => {
        return book.id === action.payload ? true : false;
      });
      return {
        ...state,
        //check if item is in the cart already
        buy: isInCart
          ? state.buy.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : //adding new book to the cart
            [...state.buy, { ...book }],
      };
    }
    default:{
      throw new Error('Unhaldled action type: ${action.type}');
    }
  }
}


export const BuyProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(buyReducer, initState);
  const value = {state, dispatch};

  return <BuyContext.Provider value={value}>{children}</BuyContext.Provider>
}

export const useBuyContext = () => {
  const contextValue = React.useContext(BuyContext);

  if (contextValue === undefined) {
    throw new Error('useContext must be used within a provider');
  }

  return contextValue;

}