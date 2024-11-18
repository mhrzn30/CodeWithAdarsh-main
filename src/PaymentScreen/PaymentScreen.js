import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PaymentScreen = ({ route }) => {
  const { venueName, dateTime, referenceNumber, amount, paymentStatus } =
    route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Payments</Text>
      <Text style={styles.title}>{venueName}</Text>
      <Text>{dateTime}</Text>
      <Text>Reference Number: {referenceNumber}</Text>
      <Text>Amount: NPR {amount}</Text>
      <Text
        style={[
          styles.status,
          paymentStatus === "Paid" ? styles.paid : styles.pending,
        ]}
      >
        Status: {paymentStatus}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#ffff" },
  pageTitle: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  status: { fontSize: 16, marginTop: 10 },
  paid: { color: "green" },
  pending: { color: "red" },
});

export default PaymentScreen;
