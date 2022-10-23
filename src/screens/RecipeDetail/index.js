import React, { useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes';
import { getSteps, getSelectedRecipe } from '../../redux/selectors';

export default function RecipeDetail({ navigation, route }) {
  const { getRecipeDetails, getRecipeSteps } = useFetchRecipes();
  const { id } = route.params
  const recipe = useSelector(getSelectedRecipe)
  const steps = useSelector(getSteps)

  useEffect(() => {
    getRecipeDetails(id)
    getRecipeSteps(id)
  },[])


  return (
    <ScrollView>
      <Image source={{uri:recipe.image}} style={styles.image}/>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.caption}>ready in {recipe.readyInMinutes}min</Text>
      <Text style={styles.caption}>for : {recipe.servings} pers</Text>

      <View style={styles.containerIng}>
        <Text style={styles.titleIng}>Ingredients: </Text>
        {recipe.extendedIngredients?.map(ing => <Text key={ing.id}>{ing.name}</Text>)}
      </View>

      <View style= {styles.containerIng}>
        <Text style={styles.titleIng}>Steps:</Text>
        {steps?.map(step => <Text>{step.number}. {step.step}</Text>)}
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