import { ReactNode, useReducer } from "react";
import CartContext, { Item } from "./cart-context";
import { ActionType, cartReducer } from "./cartReducer";

type CartProviderProps = {
  children?: ReactNode;
};

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalPrice: 0,
  });

  const addItemToCart = (item: Item) => {
    dispatch({ type: ActionType.ADD_ITEM_TO_CART, payload: item });
  };

  const removeItemFromCart = (id: string) => {
    dispatch({ type: ActionType.REMOVE_ITEM_FROM_CART, payload: { id } });
  };

  const cartContext = {
    items: state.items,
    totalPrice: state.totalPrice,

    addItemToCart,
    removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
