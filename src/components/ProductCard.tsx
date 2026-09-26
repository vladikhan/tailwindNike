import React from 'react';

type ProductCardProps = {
  title: string;
  price: number;
  imageUrl: string;
  accentColor: 'lime' | 'lavender' | 'mint' | 'pink';
};

const accentColors: Record<
  ProductCardProps['accentColor'],
  { bg: string; border: string }
> = {
  lime: { bg: '#EEFFA4', border: '#CCF074' },
  lavender: { bg: '#DDCEFD', border: '#C2A8F9' },
  mint: { bg: '#DAFFA2', border: '#BBF08C' },
  pink: { bg: '#FCC4EA', border: '#F89ED3' },
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  imageUrl,
  accentColor,
}) => {
  const { bg, border } = accentColors[accentColor];

  return (
    <div className="relative group w-full max-w-sm bg-white dark:bg-night dark:text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Accent Gradient Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="inset-0" style={{ background: `linear-gradient(135deg, ${bg} 0%, ${border} 100%)` }}></div>
      </div>

      {/* Image */}
      <div className="relative z-10 pt-[60%]">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 pt-4 pb-6">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
          ${price.toFixed(2)}
        </p>

        {/* Hover CTA - simple "Quick View" button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="w-full px-4 py-2 bg-nike-volt/90 text-black font-medium rounded-lg hover:bg-nike-volt transition-colors"
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;