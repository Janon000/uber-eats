import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import MenuItems from "../components/Home/restaurantDetail/MenuItem";
import About from "../components/Home/restaurantDetail/About";
import { Divider } from "react-native-elements";
import ViewCart from "../components/Home/restaurantDetail/ViewCart";

function Test({ route, navigation }) {
  return (
    <>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </>
  );
}

export default Test;
