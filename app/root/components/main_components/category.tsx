import React, { useState } from 'react';

interface CategoryProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({ categories, onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="flex gap-4 p-4 translate-y-[150%] md:translate-y-[80%] overflow-x-auto scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleCategoryClick(cat)}
          className={`transition-transform duration-500 sm:py-1 sm:px-2 sm:text-xs xl:py-2 xl:px-4 xl:text-base rounded-sm ${
            activeCategory === cat
              ? 'bg-gray-200 text-gray-700 font-bold' // Active state styles
              : 'border-l-2 border-gray-300 text-gray-200' // Default non-active state
          } hover:scale-110 hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Category;
