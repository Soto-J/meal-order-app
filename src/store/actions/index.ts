import { ActionType } from "../action-types";
import { Item } from "../context/cart-context";

type AddItemToCartAction = {
  type: ActionType.ADD_ITEM_TO_CART;
  payload: Item;
};

type RemoveItemFromCartAction = {
  type: ActionType.REMOVE_ITEM_FROM_CART;
  payload: { id: string };
};

type ClearCartAction = {
  type: ActionType.CLEAR_CART;
};

export type Action =
  | AddItemToCartAction
  | RemoveItemFromCartAction
  | ClearCartAction;
