import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import Details from './Screens/Details';
import Favorites from './Screens/Favorites';
// redux
import { Provider } from 'react-redux';
import { legacy_createStore , applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Reducer from './Redux/Reducer';

export default function App() {
  // redux
  const store = legacy_createStore(
      Reducer,
  composeWithDevTools(applyMiddleware(thunk))
  );
  // console.log(store)


  // navigation
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Detail' component={Details}/>
        <Stack.Screen name='favorite' component={Favorites}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
   
  );
}


