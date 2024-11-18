import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import {
  faqs,
  sendQuery,
} from "../HelpAndSupportScreen/dummyDataBaseHelpScreen"; // Import dummy database

const HelpAndSupportScreen = () => {
  const [faqList, setFaqList] = useState([]);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    // Fetch FAQs from dummy database
    setFaqList(faqs);
  }, []);

  const handleSendQuery = () => {
    // Send query using dummy database function
    const responseMessage = sendQuery(query);
    setResponse(responseMessage);
    setQuery("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help and Support</Text>
      <Image
        source={{
          uri: "https://via.placeholder.com/400x200.png?text=Support+Image",
        }}
        style={styles.image}
      />
      <Text style={styles.subtitle}>Frequently Asked Questions</Text>
      <FlatList
        data={faqList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.faqItem}>
            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.answer}>{item.answer}</Text>
          </View>
        )}
      />
      <Text style={styles.subtitle}>Send us your query</Text>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholder="Type your query here..."
      />
      <Button title="Send" onPress={handleSendQuery} />
      {response ? <Text style={styles.response}>{response}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  faqItem: {
    marginBottom: 15,
  },
  question: {
    fontSize: 16,
    fontWeight: "bold",
  },
  answer: {
    fontSize: 14,
    color: "#606060",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  response: {
    marginTop: 10,
    fontSize: 14,
    color: "green",
  },
});

export default HelpAndSupportScreen;
