import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const ReviewScreen = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(null);
  const navigation = useNavigation();

  const submitReview = () => {
    // Handle review submission logic here
    console.log(`Review: ${review}, Rating: ${rating}`);
    navigation.navigate("ThankYou");
  };

  const ratingColors = ["#FFF9E3", "#FFF4CC", "#FFEEB3", "#FFE799", "#FFE080"];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Write your review..."
        multiline
        value={review}
        onChangeText={setReview}
      />
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((rate) => (
          <TouchableOpacity
            key={rate}
            style={[
              styles.ratingButton,
              { backgroundColor: ratingColors[rate - 1] },
              rating === rate && styles.selectedRatingButton,
            ]}
            onPress={() => setRating(rate)}
          >
            <FontAwesome
              name="star"
              size={24}
              color={rating === rate ? "#FFD700" : "#000"}
            />
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Submit Review" onPress={submitReview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  ratingButton: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRatingButton: {
    borderWidth: 2,
    borderColor: "#000",
  },
});

export default ReviewScreen;
