import * as RecipeAPIUtil from '../util/recipe_api_util'

export const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveRecipes = recipes => ({
  type: RECEIVE_ALL_RECIPES,
  recipes
});

const receiveRecipe = payload => ({
  type: RECEIVE_RECIPE,
  payload
});

const removeRecipe = recipeId => ({
  type: REMOVE_RECIPE,
  recipeId
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const requestRecipes = () => dispatch => (
  RecipeAPIUtil.fetchRecipes()
  .then((recipes) => dispatch(receiveRecipes(recipes)))
);

export const requestRecipe = recipeId => dispatch => (
  RecipeAPIUtil.fetchRecipe(recipeId)
  .then(recipe => dispatch(receiveRecipe(recipe)))
);

export const createRecipe = recipe => dispatch => (
  RecipeAPIUtil.createRecipe(recipe)
  .then(recipe => dispatch(receiveRecipe(recipe)))
  .fail(errors => dispatch(receiveErrors(errors)))
);

export const updateRecipe = recipe => dispatch => (
  RecipeAPIUtil.updateRecipe(recipe)
  .then(recipe => dispatch(receiveRecipe(recipe)))
  .fail(errors => dispatch(receiveErrors(errors)))
);

export const deleteRecipe = recipeId => dispatch => (
  RecipeAPIUtil.deleteRecipe(recipeId)
  .then(() => dispatch(removeRecipe(recipeId)))
);