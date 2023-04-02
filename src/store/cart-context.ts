import { createContext } from "react";

type TCartContext = {
  items: Item[];
  totalPrice: number;

  addItemToCart: (item: Item) => void;
  removeItemFromCart: (id: string) => void;
};

export type Item = {
  id: string;
  quantity: number;
  name: string;
  description: string;
  price: number;
};

const CartContext = createContext({} as TCartContext);

export default CartContext;
