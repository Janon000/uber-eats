import { View, Text } from "react-native";
import React from "react";
import About from "../components/Home/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/Home/restaurantDetail/MenuItem";
import ViewCart from "../components/Home/restaurantDetail/ViewCart";

export default function RestaurantDetail({route, navigation}) {

  console.log(`this is...${route.params.name}`)
  return (
    <View style={{
     
    }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
      <ViewCart navigation= { navigation } restaurantName={route.params.name} />
    </View>
  );
}
