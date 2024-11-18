import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const NotificationItem = ({ notification }) => {
  const { user, message, time, image, type } = notification;

  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: image }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.user}>{user}</Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{time}</Text>
        {type === "action" && (
          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.approveButton}>
              <Text style={styles.approveText}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.declineButton}>
              <Text style={styles.declineText}>Decline</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  user: {
    fontWeight: "bold",
  },
  message: {
    color: "#555",
  },
  time: {
    fontSize: 12,
    color: "#aaa",
  },
  actionContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  approveButton: {
    backgroundColor: "#ff4d4f",
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  declineButton: {
    borderWidth: 1,
    borderColor: "#555",
    padding: 5,
    borderRadius: 5,
  },
  approveText: {
    color: "#fff",
  },
  declineText: {
    color: "#555",
  },
});

export default NotificationItem;
