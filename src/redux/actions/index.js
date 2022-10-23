import { ADD_RECIPES, ADD_RECIPE_STEPS, SELECT_RECIPE } from "./actionsType";

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

export const addSteps = (data) => ({
  type:ADD_RECIPE_STEPS,
  payload:{
    data
  }
})