'use client';

import { useState } from 'react';

const ingredientsList = [
  'beef',
  'goat meat',
  'chicken meat',
  'tomato paste',
  'sauce',
  'bell peppers',
  'potatoes',
  'carrots',
  'raisins',
  'hotdogs',
  'liverspread',
  'pork',
];

const determineDish = (ingredients: string[]): string => {
  const hasBeef = ingredients.includes('beef');
  const hasGoat = ingredients.includes('goat meat');
  const hasChicken = ingredients.includes('chicken meat');
  const hasPork = ingredients.includes('pork');
  const hasTomatoPaste = ingredients.includes('tomato paste');
  const hasSauce = ingredients.includes('sauce');
  const hasBellPeppers = ingredients.includes('bell peppers');
  const hasPotatoes = ingredients.includes('potatoes');
  const hasCarrots = ingredients.includes('carrots');
  const hasRaisins = ingredients.includes('raisins');
  const hasHotdogs = ingredients.includes('hotdogs');
  const hasLiverspread = ingredients.includes('liverspread');

  if (
    hasBeef &&
    hasTomatoPaste &&
    hasSauce &&
    hasBellPeppers &&
    hasPotatoes &&
    hasCarrots
  ) {
    if (hasRaisins && hasHotdogs && hasLiverspread) {
      return 'Caldereta';
    }
    return 'Menudo';
  }

  if (
    hasGoat &&
    hasTomatoPaste &&
    hasSauce &&
    hasBellPeppers &&
    hasPotatoes &&
    hasCarrots
  ) {
    return 'Caldereta';
  }

  if (
    hasChicken &&
    hasTomatoPaste &&
    hasSauce &&
    hasBellPeppers &&
    hasPotatoes &&
    hasCarrots
  ) {
    return 'Afritada';
  }

  if (
    hasPork &&
    hasTomatoPaste &&
    hasSauce &&
    hasBellPeppers &&
    hasPotatoes &&
    hasCarrots
  ) {
    return 'Menudo';
  }

  return 'Not available';
};

const Cooking = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [dish, setDish] = useState<string>('');

  const handleIngredientChange = (ingredient: string) => {
    setSelectedIngredients((prevIngredients) =>
      prevIngredients.includes(ingredient)
        ? prevIngredients.filter((i) => i !== ingredient)
        : [...prevIngredients, ingredient]
    );
  };

  const handleCook = () => {
    const result = determineDish(selectedIngredients);
    setDish(result);
  };

  return (
    <div>
      <h1>Recipe Selector</h1>
      <div>
        {ingredientsList.map((ingredient) => (
          <label key={ingredient}>
            <input
              type="checkbox"
              value={ingredient}
              checked={selectedIngredients.includes(ingredient)}
              onChange={() => handleIngredientChange(ingredient)}
            />
            {ingredient}
          </label>
        ))}
      </div>
      <button onClick={handleCook} className='text-white rounded-md bg-purple-500 mx-auto'>Cook</button>
      {dish && <h2 className='text-white'>Dish: {dish}</h2>}
    </div>
  );
};

export default Cooking;
