import type { Shoe } from "@/constants/index"
import type { CartItem } from "@/types/cart"
import React from "react"
import { CartItem as CartItemComponent } from "./CartItem"

interface CartProps {
  cartItems: CartItem[];
  onRemove: (productId: Shoe["id"]) => void;
  onUpdateQty: (productId: Shoe["id"], qty: number) => void;
  onUpdateSize: (productId: Shoe["id"], size: number) => void;
}

const CartComponent = React.memo(({ cartItems, onRemove, onUpdateQty, onUpdateSize }: CartProps) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * (item.qty ?? 0),
    0
  );

  return (
    <>
      <h2 className="mb-5 text-4xl font-bold dark:text-white">
        Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-400 dark:text-gray-300">Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-5">
            {cartItems.map((cartItem) => (
              <li key={cartItem.product.id}>
                <CartItemComponent
                  item={cartItem}
                  onRemove={() => onRemove(cartItem.product.id)}
                  onUpdateQty={(qty) => onUpdateQty(cartItem.product.id, qty)}
                  onUpdateSize={(size) => onUpdateSize(cartItem.product.id, size)}
                />
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between border-t pt-4 font-bold dark:text-white">
            <span>Total</span>
            <span>{totalPrice.toFixed(2)}$</span>
          </div>
        </>
      )}
    </>
  );
});

CartComponent.displayName = "Cart";
export { CartComponent as Cart };
