import React, { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';
import { IRecipe } from './types';

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTags = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://dummyjson.com/recipes/tags');
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.error('Failed to fetch tags', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  useEffect(() => {
    if (selectedTag) {
      const fetchRecipes = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`);
          const data = await response.json();
          setRecipes(data.recipes);
        } catch (error) {
          console.error('Failed to fetch recipes', error);
        } finally {
          setLoading(false);
        }
      };

      fetchRecipes();
    }
  }, [selectedTag]);

  const handleSelectTag = (tag: string) => {
    setSelectedTag(tag);
  };

  const handleBackToTags = () => {
    setSelectedTag(null);
    setRecipes([]);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {loading && <p>Loading...</p>}
      {!loading && !selectedTag && (
       <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
      )}
      {!loading && selectedTag && (
        <div>
          <button onClick={handleBackToTags}>Back to Tags</button>
          <RecipeList recipes={recipes} />
        </div>
      )}
    </div>
  );
};

export default App;

