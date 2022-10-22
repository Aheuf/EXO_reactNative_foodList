import React, { useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes';
import { getSelectedRecipe } from '../../redux/selectors';

export default function RecipeDetail({ navigation, route }) {
  const { getRecipeDetails } = useFetchRecipes();
  const { id } = route.params
  const recipe = useSelector(getSelectedRecipe)

  useEffect(() => {
    getRecipeDetails(id)
  },[])

  const renderItem = ({item}) => <Text>-{item.name}</Text>

  return (
    <ScrollView>
      <Image source={{uri:recipe.image}} style={styles.image}/>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.caption}>ready in {recipe.readyInMinutes}min</Text>
      <Text style={styles.caption}>for : {recipe.servings} pers</Text>
      <Text style={styles.summary}>{recipe.summary}</Text>
      <View style={styles.containerIng}>
        <Text style={styles.titleIng}>Ingredients: </Text>
        <FlatList
          data={recipe.extendedIngredients}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image:{
    width:"100%",
    height:"30%",
    marginBottom:10
  },
  title:{
    fontWeight:"bold",
    fontSize:18,
    textAlign:"center"
  },
  titleIng:{
    fontWeight:"bold",
    fontSize:16
  },
  caption:{
    textAlign:"center"
  },
  containerIng:{
    marginHorizontal:16,
    marginVertical:10,
    padding:6,
    borderTopColor:"grey",
    borderTopWidth:1
  }
})