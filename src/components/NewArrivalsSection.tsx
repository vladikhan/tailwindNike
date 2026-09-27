import type { Shoe } from "@/constants/index"
import { Card } from "./Card"

interface NewArrivalsSectionProps {
  items: Shoe[];
  onClickCard: (shoe: Shoe) => void;
}

export function NewArrivalsSection({ items, onClickCard }: NewArrivalsSectionProps) {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold dark:text-white">
          NEW ARRIVALS
        </div>
      </div>
      <div className="mt-20 mb-8 md:mb-20 grid grid-cols-1 justify-between gap-x-6 gap-y-8 md:grid-cols-2 md:gap-y-24 xl:grid-cols-[repeat(3,25%)]">
        {items.map((item) => (
          <Card key={item.id} item={item} onClick={onClickCard} />
        ))}
      </div>
    </div>
  );
}
