import React from 'react';
import { Link } from "react-router-dom";

const RecipeIndexItem = props => {

  const { recipe } = props;

  if (!recipe) return null;
  
  return (
    <div className="recipe-index-item">
      <Link to={`/recipes/${recipe.id}`}>
        <img src={recipe.photo_url ? recipe.photo_url : window.placeholder} />
      </Link>
      <div className="recipe-info">
        <Link to={`/recipes/${recipe.id}`} className="recipe-title">{recipe.title}</Link>
        &nbsp; by &nbsp;
        <Link to={`/member/${recipe.username}`} className="recipe-author">{recipe.username}</Link>
        &nbsp; in &nbsp;
        <Link to="/" className="recipe-category">{recipe.category}</Link>
      </div>
      <div className="recipe-stats"></div>
    </div>
  );
}

export default RecipeIndexItem;