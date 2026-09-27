import type { Shoe } from "@/constants/index"
import type { CartItem } from "@/types/cart"

type CartAction =
  | { type: "ADD"; product: Shoe; qty: number; size: number }
  | { type: "REMOVE"; productId: Shoe["id"] }
  | { type: "UPDATE_QTY"; productId: Shoe["id"]; qty: number }
  | { type: "UPDATE_SIZE"; productId: Shoe["id"]; size: number };

export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD": {
      const existingIndex = state.findIndex(
        (item) => item.product.id === action.product.id
      );
      if (existingIndex > -1) {
        return state.map((item, i) =>
          i === existingIndex
            ? { ...item, qty: action.qty, size: action.size }
            : item
        );
      }
      return [...state, { product: action.product, qty: action.qty, size: action.size }];
    }
    case "REMOVE":
      return state.filter((item) => item.product.id !== action.productId);
    case "UPDATE_QTY":
      return state.map((item) =>
        item.product.id === action.productId ? { ...item, qty: action.qty } : item
      );
    case "UPDATE_SIZE":
      return state.map((item) =>
        item.product.id === action.productId ? { ...item, size: action.size } : item
      );
    default:
      return state;
  }
}
