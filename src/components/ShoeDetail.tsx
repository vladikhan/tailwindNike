import type { Shoe } from "@/constants/index"
import { useState } from "react"
import { QTY, SIZES } from "../constants/index"

interface ShoeDetailProps {
  shoe: Shoe;
  onClickAdd: (shoe: Shoe, qty: number | undefined, size: number | undefined) => void;
}

export function ShoeDetail({ shoe, onClickAdd }: ShoeDetailProps) {
  const [form, setForm] = useState<{ qty: number | undefined; size: number | undefined }>({
    qty: undefined,
    size: undefined,
  });

  const canAdd = form.qty !== undefined && form.size !== undefined;

  return (
    <div className="flex flex-col space-y-4 dark:text-white lg:flex-row-reverse">
      {/* Shoe image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img className="animate-float" src={shoe.src} alt={shoe.title} />
        </div>
      </div>

      <div className="flex-1 space-y-6">
        {/* Title & description */}
        <h1 className="text-5xl font-black tracking-tight leading-none md:text-7xl">
          {shoe.title}
        </h1>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
          {shoe.description}
        </p>

        {/* Price */}
        <div className="text-3xl font-extrabold md:text-6xl">
          {shoe.price} $
        </div>

        {/* Size selector — buttons instead of dropdown */}
        <div>
          <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            SIZE
          </div>
          <div className="flex flex-wrap gap-2">
            {SIZES.map((size) => {
              const isSelected = form.size === size;

              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, size }))}
                  aria-pressed={isSelected}
                  className={
                    isSelected
                      ? "flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#FFC600] bg-[#FFC600] font-bold text-black shadow-md"
                      : "flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-500 dark:text-white dark:hover:bg-gray-700"
                  }
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quantity stepper */}
        <div>
          <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            QTY
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  qty: Math.max(QTY[0]!, (prev.qty ?? QTY[0]!) - 1),
                }))
              }
              aria-label="Decrease quantity"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              −
            </button>
            <span className="w-10 text-center" aria-live="polite">
              {form.qty ?? "—"}
            </span>
            <button
              type="button"
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  qty: Math.min(QTY[QTY.length - 1]!, (prev.qty ?? 0) + 1),
                }))
              }
              aria-label="Increase quantity"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              +
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="space-x-10">
          <button
            onClick={() => onClickAdd(shoe, form.qty, form.size)}
            disabled={!canAdd}
            className="btn-press-anim h-14 w-44 transform bg-[#FFC600] font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:translate-y-0"
          >
            Add to bag
          </button>
          <a href="#" onClick={(e) => e.preventDefault()} className="text-lg font-bold underline underline-offset-4">
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
