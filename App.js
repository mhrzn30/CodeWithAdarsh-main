// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import BottomTabNavigator from './src/Navigation/BottomTabNavigator';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// }

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./src/Navigation/BottomTabNavigator";
import BookingHistory from "./src/HistoryScreen/BookingHistory";
import RatingScreen from "./src/RatingsReviews/RatingScreen";
import ReviewScreen from "./src/RatingsReviews/ReviewScreen";
import ThankYouScreen from "./src/RatingsReviews/ThankYouScreen";
import PaymentScreen from "./src/PaymentScreen/PaymentScreen";
import ConfirmedGameScreen from "./src/GamesNearbyScreen/ConfirmedGameScreen";
import PaymentsScreen from "./src/PaymentScreen/PaymentsScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabs">
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="BookingHistory" component={BookingHistory} />
        <Stack.Screen name="Ratings" component={RatingScreen} />
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="ThankYou" component={ThankYouScreen} />
        {/* Add ThankYouScreen */}
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        {/* Add PaymentScreen */}
        <Stack.Screen name="ConfirmedGame" component={ConfirmedGameScreen} />
        {/* Add ConfirmedGameScreen */}
        <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
