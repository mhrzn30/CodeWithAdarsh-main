import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GameCard = ({ game }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      {/* <Image source={game.image} style={styles.image} /> */}
      <Text style={styles.category}>Category: {game.category}</Text>
      <Text style={styles.player}>
        {game.player} is requesting for the game
      </Text>
      <View style={styles.details}>
        <Text>{game.date}</Text>
        <Text>{game.time}</Text>
        <Text>{game.location}</Text>
      </View>
      <Button
        title="Join"
        onPress={() => navigation.navigate("ConfirmedGame", { game })}
        color="#ff5c5c"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "#e0e0e0",
    borderWidth: 1,
  },
  category: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  player: {
    fontSize: 16,
    marginBottom: 10,
    color: "#ff5c5c",
  },
  details: {
    marginBottom: 10,
  },
});

export default GameCard;
