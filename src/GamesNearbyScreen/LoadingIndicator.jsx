// src/GamesNearbyScreen/LoadingIndicator.js
import React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#32CD32" />
      <Text style={styles.text}>
        Finding nearby players requesting a match...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default LoadingIndicator;
