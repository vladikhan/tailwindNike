import { CartItem } from "./CartItem";
import type { Shoe } from "@/constants/index";

interface CartItemType {
  product: Shoe;
  qty: number | null;
  size: number | null;
}

interface CartProps {
  cartItems: CartItemType[];
}

export function Cart({ cartItems }: CartProps) {
  return (
    <>
      <h2 className="mb-5 text-4xl font-bold dark:text-white">
        Cart
      </h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} />
          </li>
        ))}
      </ul>
    </>
  );
}
