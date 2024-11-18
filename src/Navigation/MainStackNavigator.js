import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../HomeScreen/MainScreen";
import FutsalList from "../SportLists/FutsalList";
import BasketballCourtsList from "../SportLists/BasketballCourtsList";
import CricketGroundsList from "../SportLists/CricketGroundsList";
import BadmintonCourtsList from "../SportLists/BadmintonCourtsList";
import Details from "../SportLists/Details/Details";
import PaymentScreen from "../SportLists/Details/PaymentScreen";
import BookingConfirmationScreen from "../SportLists/Details/BookingConfirmationScreen";
import PayOnArrival from "../SportLists/Details/PayOnArrival";
import RequestNowConfirmation from "../SportLists/Details/RequestNowConfirmation";
import BookingHistory from "../HistoryScreen/BookingHistory";
import AccountScreen from "../AccountScreen/AccountScreen";
import ProfileScreen from "../AccountScreen/ProfileScreen/ProfileScreen";
import PaymentsScreen from "../PaymentScreen/PaymentsScreen"; // Add this import
import HelpAndSupportScreen from "../AccountScreen/HelpAndSupportScreen/HelpAndSupportScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FutsalList"
        component={FutsalList}
        options={{ tabBarVisible: false }}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{ title: "              Payment" }}
      />
      <Stack.Screen
        name="BookingConfirmationScreen"
        component={BookingConfirmationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RequestNowConfirmation"
        component={RequestNowConfirmation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PayOnArrival"
        component={PayOnArrival}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BasketballCourtsList"
        component={BasketballCourtsList}
      />
      <Stack.Screen name="CricketGroundsList" component={CricketGroundsList} />
      <Stack.Screen
        name="BadmintonCourtsList"
        component={BadmintonCourtsList}
      />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="BookingHistory" component={BookingHistory} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} />
      <Stack.Screen
        name="HelpAndSupportScreen"
        component={HelpAndSupportScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
