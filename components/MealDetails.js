import { StyleSheet, Text, View } from "react-native";

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsText, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsText, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsText, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 15,
  },
  detailsText: {
    fontSize: 12,
  },
});
