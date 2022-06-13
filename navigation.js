//npx yarn add @react-navigation/native
//npx yarn add @react-navigation/stack
//npx yarn add @react-native-gesture-handler

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import { store } from  "./redux/store"
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import Test from "./screens/Test";
import OrderCompleted from "./screens/OrderCompleted";

function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} /> 
          <Stack.Screen name="OrderCompleted" component={OrderCompleted}  />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
} 

export default RootNavigation;