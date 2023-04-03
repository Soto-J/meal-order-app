import { Item } from "./cart-context";

type CartState = {
  items: Item[];
  totalPrice: number;
};

export enum ActionType {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
}
type AddItemToCartAction = {
  type: ActionType.ADD_ITEM_TO_CART;
  payload: Item;
};
type RemoveItemFromCartAction = {
  type: ActionType.REMOVE_ITEM_FROM_CART;
  payload: { id: string };
};
type Action = AddItemToCartAction | RemoveItemFromCartAction;

export const cartReducer = (state: CartState, action: Action): CartState => {
  // used let because const variables presist in switch statements. **
  let updatedItems!: Item[];
  let updatedTotalPrice!: number;

  switch (action.type) {
    case ActionType.ADD_ITEM_TO_CART:
      const { payload: itemToAdd } = action;
      const indexOfExistingItem = state.items.findIndex(
        (item) => item.id === itemToAdd.id
      );
      const itemInCart = state.items[indexOfExistingItem];
      
      // If item exist in state, update quantity otherwise add to state
      if (itemInCart) {
        updatedItems = [...state.items];
        itemInCart.quantity += itemToAdd.quantity;
        
        updatedItems[indexOfExistingItem] = itemInCart;
      } else {
        updatedItems = [...state.items, itemToAdd];
      }

      updatedTotalPrice =
        state.totalPrice + itemToAdd.price * itemToAdd.quantity;

      return {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    case ActionType.REMOVE_ITEM_FROM_CART:
      const indexOfItemToRemove = state.items.findIndex(
        (item: Item) => item.id === action.payload.id
      );

      const oneRemaining = state.items[indexOfItemToRemove].quantity === 1;

      if (oneRemaining) {
        updatedItems = state.items.filter(
          (item: Item) => item.id !== action.payload.id
        );
      } else {
        updatedItems = [...state.items];
        updatedItems[indexOfItemToRemove].quantity--;
      }

      updatedTotalPrice =
        state.totalPrice - state.items[indexOfItemToRemove].price;

      return {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    default:
      return state;
  }
};
