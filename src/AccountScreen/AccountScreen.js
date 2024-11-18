import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AccountScreen = () => {
  const navigation = useNavigation();

  const handleAlert = (message) => {
    Alert.alert("Feature Coming Soon", message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={styles.username}>Username</Text>
        <Text style={styles.details}>Age | Gender</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <Text style={styles.listText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => navigation.navigate("PaymentsScreen")}
        >
          <Text style={styles.listText}>Payments</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() =>
            handleAlert("Help and Support feature is under development")
          }
        >
          <Text style={styles.listText}>Help and Support</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logout}
        onPress={() => handleAlert("Logout feature is under development")}
      >
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: "#ddd",
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  details: {
    color: "#888",
  },
  section: {
    marginTop: 20,
    backgroundColor: "#f0f0f5",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  listItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  listText: {
    fontSize: 16,
  },
  logout: {
    marginTop: 30,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 18,
    color: "red",
  },
});

export default AccountScreen;
