import React from 'react';
import RecipeTag from './RecipeTag';

interface IRecipeTagListProps {
  tagList: string[];
  onSelectTag: (tagName: string) => void;
}

const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Choose a tag below</th>
        </tr>
      </thead>
      <tbody>
        {tagList.map(tag => (
          <tr key={tag}>
            <td>
              <RecipeTag tagName={tag} onSelectTag={onSelectTag} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecipeTagList;