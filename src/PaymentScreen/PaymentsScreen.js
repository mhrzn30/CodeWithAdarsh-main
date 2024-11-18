// src/PaymentScreen/PaymentsScreen.js

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, ActivityIndicator } from "react-native";

const PaymentSummary = ({
  venue,
  date,
  time,
  transactionID,
  amount,
  status,
}) => {
  return (
    <View style={styles.paymentSummaryContainer}>
      <View style={styles.paymentSummaryHeader}>
        <Image
          style={styles.paymentSummaryImage}
          source={{ uri: "https://placeholder.pics/svg/57x59" }}
        />
        <View style={styles.paymentSummaryDetailsContainer}>
          <Text style={styles.paymentSummaryVenueName}>{venue}</Text>
          <Text style={styles.paymentSummaryDateTime}>{date}</Text>
          <Text style={styles.paymentSummaryDateTime}>{time}</Text>
        </View>
      </View>
      <Text style={styles.paymentSummaryTransactionID}>
        Transaction ID: {transactionID}
      </Text>
      <Text style={styles.paymentSummaryAmount}>Amount: {amount}</Text>
      <Text
        style={
          status === "Paid"
            ? styles.paymentSummaryPaidStatus
            : styles.paymentSummaryUnpaidStatus
        }
      >
        Status: {status}
      </Text>
    </View>
  );
};

const PaymentsScreen = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from a backend
    setTimeout(() => {
      const dummyData = [
        {
          venue: "Shankhalmul Futsal",
          date: "12 May, Sun",
          time: "03:00PM-04:00PM",
          transactionID: "TXN78901234",
          amount: "NPR 600",
          status: "Paid",
        },
        // Add more dummy records as needed
      ];
      setPayments(dummyData);
      setLoading(false);
    }, 2000); // Simulate a 2-second delay
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Payments</Text>
      </View>
      {payments.map((payment, index) => (
        <PaymentSummary key={index} {...payment} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  header: {
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  paymentSummaryContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
  },
  paymentSummaryHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  paymentSummaryImage: {
    width: 57,
    height: 59,
    borderRadius: 5,
    marginRight: 10,
  },
  paymentSummaryDetailsContainer: {
    flex: 1,
  },
  paymentSummaryVenueName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1c0303",
  },
  paymentSummaryDateTime: {
    fontSize: 16,
    lineHeight: 19.36,
    color: "#1c0303",
  },
  paymentSummaryTransactionID: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19.36,
    color: "#000000",
    marginBottom: 5,
  },
  paymentSummaryAmount: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19.36,
    color: "#000000",
    marginBottom: 5,
  },
  paymentSummaryPaidStatus: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19.36,
    color: "green",
  },
  paymentSummaryUnpaidStatus: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19.36,
    color: "red",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PaymentsScreen;
