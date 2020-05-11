import React from 'react'
import { Platform, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors'

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
    // color: 'yellow'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  // headerTitle: 'A Screen'
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
      // navigationOptions: {
      //   headerStyle: {
      //     backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      //   },
      //   headerTintColor:
      //     Platform.OS === "android" ? "white" : Colors.primaryColor,
      // },
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    // mode: 'modal',
    initialRouteName: "Categories",
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavoriteNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // mode: 'modal',
    // initialRouteName: "Categories",
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      // tabBarLabel: 'MealsABC'   //TAB BAR AS STRING
      tabBarLabel: Platform.OS === 'android'
        ?  (
            <Text
              style={{
                fontFamily:'open-sans-bold',
                color:'purple'
              }}
            >
              MealsAND
            </Text>
          )
        : 'MealsIOS'

    },
  },
  Favorites: {
    screen: FavoriteNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: Platform.OS === 'android'
        ? (
          <Text
            style={{
              fontFamily: 'open-sans-bold',
              color: 'purple'
            }}
          >
            FavoritesAND
          </Text>
        )
        : 'FavoritesIOS'
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(
      tabScreenConfig, 
      {
        activeTintColor: 'white',
        shifting: true
      }
    )
    : createBottomTabNavigator(
      tabScreenConfig, 
      {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'open-sans-bold',
            // color:'purple'
          },
          activeTintColor: Colors.accentColor,
        },
      }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  }, 
  {  
    navigationOptions: {
      drawerLabel: 'Filters!!!'
    },  
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealFavs:{
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals123'
      }
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);



export default createAppContainer(MainNavigator);