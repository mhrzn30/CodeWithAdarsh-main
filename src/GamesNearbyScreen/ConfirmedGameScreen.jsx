import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ConfirmedGameScreen = ({ route }) => {
  const { game } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category: {game.category}</Text>
      <Text style={styles.subtitle}>Requested by: {game.player}</Text>
      <Image source={game.image} style={styles.image} />
      <View style={styles.confirmContainer}>
        <Text style={styles.confirmText}>CONFIRMED</Text>
      </View>
      <Text style={styles.locationTitle}>{game.location}</Text>
      <Text>Rating: 5.0 (120 Reviews)</Text>
      <Text>Date: {game.date}</Text>
      <Text>Time: {game.time}</Text>
      <Text style={styles.reference}>Reference Number: [AB12345XYZ]</Text>
      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>Contact Game Host:</Text>
        <Text style={styles.contactDetails}>📞 984-8867781</Text>
        <Text style={styles.contactTitle}>Contact Venue:</Text>
        <Text style={styles.contactDetails}>📞 984-8867781</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#606060",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 152,
    marginBottom: 10,
  },
  confirmContainer: {
    backgroundColor: "#cff09e",
    padding: 5,
    alignSelf: "flex-start",
    borderRadius: 5,
    marginBottom: 10,
  },
  confirmText: {
    color: "#fff",
  },
  locationTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  locationDetail: {
    fontSize: 12,
    color: "#606060",
    marginBottom: 5,
  },
  reference: {
    fontSize: 14,
    marginVertical: 10,
  },
  contactContainer: {
    marginTop: 20,
  },
  contactTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  contactDetails: {
    fontSize: 12,
  },
});

export default ConfirmedGameScreen;
