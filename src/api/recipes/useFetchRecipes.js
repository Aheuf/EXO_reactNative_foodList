import axios from "axios";
import { useDispatch } from "react-redux";
import { addRecipes, selectRecipe } from "../../redux/actions";

const URL_API = 'https://api.spoonacular.com/recipes/';
const API_KEY = '6741dfcb301c476cbdb0ddb12dc50060';
const MAX_PER_PAGE = 30

export const useFetchRecipes = () => {
    const dispatch = useDispatch()

    const getAllRecipes = async (page) => {
        try {
            const response = await axios.get(`${URL_API}complexSearch`, {
                params:{
                    apiKey: API_KEY,
                    number: MAX_PER_PAGE,
                    offset: page * MAX_PER_PAGE
                }
            })
            dispatch(addRecipes(response.data.results))
        } catch (e) {
            console.error(`error in getAllRecipes : ${e}`)
        }
    }

    const getRecipeDetails = async (id) => {
        try {
            const response = await axios.get(`${URL_API}${id}/information`,{
                params:{
                    apiKey: API_KEY
                }
            })
            dispatch(selectRecipe(response.data))
        } catch (e) {
            console.error(`error in getRecipeDetails : ${e}`)
        }
    }

    return {
        getAllRecipes,
        getRecipeDetails
    }
}