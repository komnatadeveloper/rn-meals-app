import React from 'react'
import {
  // Button,
  FlatList,
  // Platform,
  StyleSheet,
  Text, 
  TouchableOpacity,
  View
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';
import CustomHeaderButton from '../components/CustomHeaderButton'





const CategoriesScreen = props => {
  // console.log(props);

  const renderGridItem = (itemData) => {
    return <CategoryGridTile 
      title={itemData.item.title}
      color= {itemData.item.color}
      onSelect = { () => {
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: itemData.item.id,
          },
        });
      }}
    />;
  };

  return (
    <FlatList 
      data={CATEGORIES} 
      keyExtractor={ (item, index) => item.id}  // Newer versions dont need if item has id property. But to demonstrate it, it is here.
      renderItem={renderGridItem}
      numColumns={2}   
    />  
  );
}

CategoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Meal Categories',
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
  // headerStyle: {
  //   backgroundColor: Platform.OS === 'android' 
  //     ? Colors.primaryColor
  //     : ''
  // },
  // headerTintColor: Platform.OS === 'android' 
  //   ? 'white'
  //   : Colors.primaryColor
}

const  styles = StyleSheet.create( {
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

})

export default CategoriesScreen