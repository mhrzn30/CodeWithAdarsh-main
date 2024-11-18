// src/GamesNearbyScreen/GamesNearbyScreen.js
import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import GameCard from "./GameCard";
import LoadingIndicator from "./LoadingIndicator";
import { sr } from "date-fns/locale";

const GamesNearbyScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      const fetchedGames = [
        {
          id: 1,
          category: "Football",
          player: "PLayer Name From database",
          location: "Kirtipur football ground",
          date: "22 May 2024",
          time: "04:00 PM",
          // imageSrc: require("C:UsersFantechDownloadsCodeWithAdarsh-mainCodeWithAdarsh-mainassetsVenueImagespexels-picography-3026.jpg"),
        },
        {
          id: 2,
          category: "Badminton",
          player: "PLayer Name From database",
          location: "Nagaun Badminton Court",
          date: "22 May 2024",
          time: "04:00 PM",
        },
        {
          id: 3,
          category: "Table Tennis",
          player: "PLayer Name From database",
          location: "Panga Tennis Court",
          date: "22 May 2024",
          time: "04:00 PM",
          //
        },
      ];
      setGames(fetchedGames);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default GamesNearbyScreen;
