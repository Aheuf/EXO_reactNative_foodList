import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import RecipesList from './src/screens/RecipesList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeDetail from './src/screens/RecipeDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="RecipesList" component={RecipesList} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetail} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
