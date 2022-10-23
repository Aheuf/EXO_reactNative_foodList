import { ADD_RECIPES, ADD_RECIPE_STEPS, SELECT_RECIPE } from "../actions/actionsType"

const initialState = {
  list: [],
  selectedRecipe: {},
  stepsToFollow: {},
  steps: {}
}

export const recipes = (state = initialState, action) => {
  switch(action.type){
    case ADD_RECIPES: return {
      list: [...state.list, ...action.payload.data],
      selectedRecipe: state.selectedRecipe,
      steps: state.steps
    }
    case SELECT_RECIPE: return {
      list:state.list,
      selectedRecipe: action.payload.data,
      steps: state.steps
    }
    case ADD_RECIPE_STEPS: return {
      list: state.list,
      selectedRecipe: state.selectedRecipe,
      steps: action.payload.data
    }
    default: return state
  }
}