import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;

  const selectedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item;

    const MealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...MealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={selectedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
