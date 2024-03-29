import { ReactNode, useReducer } from "react";
import CartContext, { Item } from "./context/cart-context";
import { cartReducer } from "./reducer/cartReducer";
import { ActionType } from "./action-types";

type CartProviderProps = {
  children?: ReactNode;
};

const defaultState = {
  items: [],
  totalPrice: 0,
};

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, defaultState);

  const addItemToCart = (item: Item) =>
    dispatch({ type: ActionType.ADD_ITEM_TO_CART, payload: item });

  const removeItemFromCart = (id: string) =>
    dispatch({ type: ActionType.REMOVE_ITEM_FROM_CART, payload: { id } });

  const clearCart = () => dispatch({ type: ActionType.CLEAR_CART });

  const cartContext = {
    items: state.items,
    totalPrice: state.totalPrice,

    addItemToCart,
    removeItemFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
