import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false); // Manage editing state
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    interestedCategory: "",
    gender: "",
    age: "",
  });

  const handleEditToggle = () => {
    if (isEditing) {
      // If already editing, save the changes (for now, show an alert)
      Alert.alert(
        "Profile Updated",
        "Your profile has been updated successfully."
      );
    }
    setIsEditing(!isEditing); // Toggle the editing mode
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
      </View>

      <View style={styles.profileDetails}>
        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.fullName}
            onChangeText={(text) => setProfile({ ...profile, fullName: text })}
            placeholder="Enter Full Name"
          />
        ) : (
          <Text style={styles.value}>{profile.fullName || "XXXX XXXXX"}</Text>
        )}

        {/* Email Address */}
        <Text style={styles.label}>E-mail Address</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.email}
            onChangeText={(text) => setProfile({ ...profile, email: text })}
            placeholder="Enter Email"
          />
        ) : (
          <Text style={styles.value}>{profile.email || "xxxx@xxx.com"}</Text>
        )}

        {/* Phone Number */}
        <Text style={styles.label}>Phone Number</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.phoneNumber}
            onChangeText={(text) =>
              setProfile({ ...profile, phoneNumber: text })
            }
            placeholder="Enter Phone Number"
          />
        ) : (
          <Text style={styles.value}>
            {profile.phoneNumber || "+XXX XXXXXXXX"}
          </Text>
        )}

        {/* Interested Category */}
        <Text style={styles.label}>Interested Category</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.interestedCategory}
            onChangeText={(text) =>
              setProfile({ ...profile, interestedCategory: text })
            }
            placeholder="Enter Interested Category"
          />
        ) : (
          <Text style={styles.value}>
            {profile.interestedCategory || "XXXXXXXX"}
          </Text>
        )}

        {/* Gender */}
        <Text style={styles.label}>Gender</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.gender}
            onChangeText={(text) => setProfile({ ...profile, gender: text })}
            placeholder="Enter Gender"
          />
        ) : (
          <Text style={styles.value}>{profile.gender || "XXXX"}</Text>
        )}

        {/* Age */}
        <Text style={styles.label}>Age</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.age}
            onChangeText={(text) => setProfile({ ...profile, age: text })}
            placeholder="Enter Age"
          />
        ) : (
          <Text style={styles.value}>{profile.age || "XXXX"}</Text>
        )}

        {/* Edit/Save Button */}
        <TouchableOpacity style={styles.editButton} onPress={handleEditToggle}>
          <Text style={styles.editText}>
            {isEditing ? "Save" : "Edit Details"}
          </Text>
        </TouchableOpacity>
      </View>
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
  profileDetails: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 14,
    color: "#888",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  editButton: {
    marginTop: 20,
    alignItems: "center",
  },
  editText: {
    color: "#007BFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
