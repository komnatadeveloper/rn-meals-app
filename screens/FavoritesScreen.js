import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CustomHeaderButton from '../components/CustomHeaderButton'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data';


const FavoritesScreen = props => {
  const favoriteMealsList = MEALS.filter( meal => meal.id === 'm1' || meal.id === 'm2')

  return (
    <MealList listData={favoriteMealsList} navigation={props.navigation} />
  );

}

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons
        HeaderButtonComponent={CustomHeaderButton}
      >
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  }
}



export default FavoritesScreen