import { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import HeaderTabs from "../components/Home/HeaderTabs";
import Searchbar from "../components/Home/Searchbar";
import Categories from "../components/Home/Categories";
import RestarauntItems from "../components/Home/RestaurantItems";
import { localRestaurants } from "../components/Home/RestaurantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/Home/BottomTabs";

const YELP_API_KEY =
  "a3QY4r0Q2Mvo3FSSRG4_zygqMgJJ0gqgjVfnKzbed1ymuOjxlDvr8oNV6h8_aMwVGxLrcGuz9hSK5yD7rUCyO6sgSQGrhRmEmkzGjjcFZE60BNmmofZuAto02EGWYnYx";

function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Dallas");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?location=${city}`;
  
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
  
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      }
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);


  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.Tabs}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Searchbar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestarauntItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  Tabs: {
    backgroundColor: "white",
    padding: 15,
  },
});

export default Home;
