import React from 'react'


import { CATEGORIES, MEALS } from '../data/dummy-data'
import Colors from "../constants/Colors";
import MealList from '../components/MealList';


const CategoryMealScreen = props => {


  const categoryId = props.navigation.getParam('categoryId')

  // const selectedCategory = CATEGORIES.find(
  //   (categoryItem) => (categoryItem.id === categoryId)
  // );

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  )

  return (
    // <View style={styles.screen}>
    //   <FlatList
    //     data={displayedMeals}
    //     keyExtractor={(item, index) => item.id}
    //     renderItem={renderMealItem}
    //     style={{width: '100%'}}
    //   />
    // </View>
    <MealList
      listData= {displayedMeals}
      navigation= {props.navigation}
    />
  );
}

CategoryMealScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData)
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(
    (categoryItem) => categoryItem.id === categoryId
  );

  return {
    headerTitle: selectedCategory.title,
    // headerStyle: {
    //   backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    // },
    // headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
}



export default CategoryMealScreen