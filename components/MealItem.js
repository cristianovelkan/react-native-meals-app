import { View, Text, Pressable, Image, StyleSheet } from "react-native";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={onPress}
      >
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsText}>{duration}m</Text>
          <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 15,
  },
  detailsText: {
    fontSize: 12,
  },
  pressed: {
    opacity: 0.5,
  },
});
