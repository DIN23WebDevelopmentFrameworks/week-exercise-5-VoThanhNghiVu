import React from 'react';
import { IRecipe } from './types';

interface IRecipeProps {
  recipeData: IRecipe;
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  return (
    <div className="recipe-box" style={{ border: '1px solid black', padding: '10px' }}>
      <h2>{recipeData.name}</h2>
      <p><strong>Ingredients:</strong></p>
      <ul>
        {recipeData.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p><strong>Instructions:</strong></p>
      <ol>
        {recipeData.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>

  );
};

export default Recipe;
