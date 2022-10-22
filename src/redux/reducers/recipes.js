import { ADD_RECIPES, SELECT_RECIPE } from "../actions/actionsType"

const initialState = {
  list: [],
  selectedRecipe: {},
  stepsToFollow: {}
}

export const recipes = (state = initialState, action) => {
  switch(action.type){
    case ADD_RECIPES: return {
      list: [...state.list, ...action.payload.data],
      selectedRecipe: state.selectedRecipe
    }
    case SELECT_RECIPE: return {
      list:state.list,
      selectedRecipe: action.payload.data
    }
    default: return state
  }
}