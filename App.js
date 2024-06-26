import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScrren';
import MealDetailsScreen from './screens/MealDetailsScreen';
// import FavoritesContextProvider from './store/context/favourites-context';
import { Provider } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import { store } from './store/redux/store';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator();



function DrawerNavigator(){
  return(
    <Drawer.Navigator screenOptions={{
      headerStyle:{backgroundColor:"#1d0303"},
      headerTintColor:"#b09c9c",
      sceneContainerStyle:{backgroundColor:"#2d1d1d"},
      // drawerContentStyle:{backgroundColor:"#959090"},
      
      drawerInactiveTintColor:"#492222",
      drawerActiveTintColor:"#2d1d1d",
      drawerActiveBackgroudColor:'#441d1d',
      
    }}>
      <Drawer.Screen name='All' component={CategoriesScreen} options={{
        drawerIcon:({color,size})=><Icon name='list' color={color} size={size}/>
      }}/>
      <Drawer.Screen name='Favorites' component={FavoriteScreen} options={{
        drawerIcon:({color,size})=><Icon name='star' color={color} size={size}/>
      }}/>
    </Drawer.Navigator>
  );
}
export default function App () {

  
  

  return  (
    // <FavoritesContextProvider>
    <Provider store={store}>
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:"#1d0303"},
        headerTintColor:"#b09c9c",
        contentStyle:{backgroundColor:"#2d1d1d"},
        statusBarColor:"black"
      }}>
     
      
        <Stack.Screen name="MainScreen" component={DrawerNavigator} options={{
          // title:'All categories'
          headerShown:false
        }}/>
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} options={{animation:'fade_from_bottom'}}/>
        <Stack.Screen name="MealDetails" component={MealDetailsScreen} options={{animation:'fade_from_bottom'}}/>
      </Stack.Navigator>
      
      
     </NavigationContainer>
      </Provider> 
      // </FavoritesContextProvider>
    );
  };

const styles = StyleSheet.create({
  container:{
    backgroundColor:"black"
  }
});

