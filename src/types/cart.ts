import type { Shoe } from "@/constants/index";

export interface CartItem {
  product: Shoe;
  qty: number | undefined;
  size: number | undefined;
}
