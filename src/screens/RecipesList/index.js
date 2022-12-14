import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes';
import { getRecipesList } from '../../redux/selectors';
import RecipeTile from './RecipeTile';

export default function RecipesList({ navigation }) {
  const [page, setPage] = useState(0);
  const { getAllRecipes } = useFetchRecipes();
  const allRecipes = useSelector(getRecipesList)

  useEffect(() => {
    getAllRecipes(page)
  }, [page])

  const renderItem = ({item}) => <RecipeTile navigation={navigation} item={item}/>

  const onEndReached = () => {
    setPage(currPage => currPage + 1)
  }

  return (
      <FlatList
        data={allRecipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        onEndReached={onEndReached}
        ListFooterComponent={() => <View style={{padding:40}}><ActivityIndicator/></View>}
      />
  )
}
