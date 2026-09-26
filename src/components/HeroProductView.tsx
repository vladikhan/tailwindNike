import React from 'react';

const HeroProductView: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] bg-white dark:bg-night dark:text-white">
      {/* Product Image */}
      <div className="relative w-full max-w-4xl mx-auto pt-16 pb-24">
        <img
          src="/placeholder-shoe.jpg"
          alt="Nike Sneaker"
          className="w-full h-[500px] object-contain"
        />
        {/* Optional: Add a subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-night/50 dark:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* Title */}
        <h1 className="mb-4 text-5xl font-bold tracking-tight leading-none dark:text-white">
          Air Max 2026
        </h1>

        {/* Description */}
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Experience the future of comfort with our latest Air Max innovation.
          Featuring responsive cushioning and a lightweight, breathable upper.
        </p>

        {/* Price and Selectors */}
        <div className="flex flex-wrap items-baseline gap-6 mb-8">
          {/* Price */}
          <div className="text-3xl font-bold text-gray-800 dark:text-white">
            $180
          </div>

          {/* Size Selector */}
          <div className="flex-1 min-w-[150px]">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Size
            </label>
            <div className="flex gap-2">
              {[7, 7.5, 8, 8.5, 9, 9.5, 10].map((size) => (
                <button
                  key={size}
                  className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600 transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex-1 min-w-[150px]">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Quantity
            </label>
            <div className="flex items-center gap-3">
              <button
                className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600"
              >
                −
              </button>
              <span className="w-10 text-center">1</span>
              <button
                className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="w-full px-8 py-4 bg-nike-volt text-black font-semibold rounded-lg hover:bg-yellow-400 dark:hover:bg-yellow-300 transition-colors duration-200 transform hover:-translate-y-0.5"
        >
          Add to Bag
        </button>
      </div>
    </section>
  );
};

export default HeroProductView;