import { ADD_RECIPES, SELECT_RECIPE } from "./actionsType";

export const addRecipes = (data) => ({
  type:ADD_RECIPES,
  payload: {
    data
  }
})

export const selectRecipe = (data) => ({
  type:SELECT_RECIPE,
  payload:{
    data
  }
})