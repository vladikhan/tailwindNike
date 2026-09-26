import type { CartItem } from "@/types/cart"
import { CiTrash } from "react-icons/ci"
import { QTY, SIZES } from "../constants/index"
import { Select } from "./Select"

interface CartItemProps {
  item: CartItem;
  onRemove: () => void;
  onUpdateQty: (qty: number) => void;
  onUpdateSize: (size: number) => void;
}

export function CartItem({
  item: { product, qty, size },
  onRemove,
  onUpdateQty,
  onUpdateSize,
}: CartItemProps) {
  return (
    <div
      className={
        "dark:bg-night-50 cursor-pointer space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2] dark:bg-transparent"
      }
    >
      <div className="flex  space-x-2 ">
        {/* Image */}
        <img className="h-24" src={product.src} alt={product.title} />
        <div className="space-y-2">
          {/* Title & Description */}
          <div className="font-bold dark:text-white">
            {product.title}
          </div>
          <div className="text-sm text-gray-400">
            {product.description}
          </div>
        </div>
        {/* Price */}
        <div className="font-bold dark:text-white">
          {product.price}$
        </div>
      </div>

      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select
              defaultValue={size}
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
              onChange={(value) => onUpdateSize(Number(value))}
            />
          </div>
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select
              defaultValue={qty}
              title=""
              options={QTY}
              className={"w-16 p-1 pl-2"}
              onChange={(value) => onUpdateQty(Number(value))}
            />
          </div>
        </div>
        <button onClick={onRemove} aria-label={`Remove ${product.title} from cart`}>
          <CiTrash
            size={25}
            className="text-black dark:text-white"
          />
        </button>
      </div>
    </div>
  );
}
