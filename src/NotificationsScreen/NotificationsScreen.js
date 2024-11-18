import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import NotificationItem from "./components/NotificationItem";

const notifications = [
  {
    id: "1",
    user: "Cr. Ronaldo",
    message: "Accepted your game request.",
    time: "Today at 9:42 AM",
    image: "url-to-avatar", // Replace with actual image URLs or require paths
    type: "info",
  },
  {
    id: "2",
    user: "Itachi",
    message: "requested you to play a match with you.",
    time: "Today at 10:42 AM",
    image: "url-to-avatar",
    type: "action",
  },
];

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem notification={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default NotificationsScreen;
