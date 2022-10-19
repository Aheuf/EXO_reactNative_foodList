import React, { useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes';
import { getRecipesList } from '../../redux/selectors';
import RecipeTile from './RecipeTile';

export default function RecipesList() {
  const { getAllRecipes } = useFetchRecipes();
  const allRecipes = useSelector(getRecipesList)
  console.log(`allRecipes ${allRecipes}`)

  useEffect(() => {
    getAllRecipes()
  }, [])

  const renderItem = ({item}) => <RecipeTile item={item}/>

  return (
    <>
      <Text>Recipes List</Text>
      <FlatList
        data={allRecipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </>
  )
}
