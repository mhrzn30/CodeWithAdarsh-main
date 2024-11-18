import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const RatingScreen = ({ navigation, route }) => {
  const { venueName, ratingSummary } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {venueName} ({ratingSummary.totalReviews} Reviews)
      </Text>
      <Image source={{ uri: ratingSummary.image }} style={styles.image} />

      <View style={styles.summary}>
        <Text style={styles.rating}>{ratingSummary.rating} ⭐</Text>
        <Text>{ratingSummary.recommendationPercentage}% Recommended</Text>
        {/* Add rating breakdown here */}
      </View>

      <Button
        title="Add a Review"
        onPress={() => navigation.navigate("Review")}
        color="red"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  image: { width: "100%", height: 200, marginBottom: 10 },
  summary: { marginTop: 20 },
  rating: { fontSize: 18, fontWeight: "bold" },
});

export default RatingScreen;
