import type { Shoe } from "@/constants/index"

interface CardProps {
  item: Shoe;
  onClick: (item: Shoe) => void;
}

export function Card({ item, onClick }: CardProps) {
  return (
    <button
      onClick={() => onClick(item)}
      aria-label={`View ${item.title}`}
      className={`${item.className} relative min-h-[320px] max-w-xl transform cursor-pointer rounded-2xl text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="p-8">
        <div className="text-2xl font-bold tracking-tight">{item.title}</div>
        <div className="mt-2 text-lg font-semibold">{item.price} $</div>
        <div className="mt-10 font-semibold underline underline-offset-4">
          SHOP NOW +
        </div>
      </div>
      <img
        className="absolute left-[50%] top-5 h-40"
        src={item.src}
      />
    </button>
  );
}
