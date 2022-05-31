import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import Searchbar from "../components/Searchbar";
import Categories from "../components/Categories";

function Home() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.Tabs}>
        <HeaderTabs />
        <Searchbar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
      </ScrollView>
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
