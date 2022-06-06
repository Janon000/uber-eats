import { View, Text, Image } from "react-native";
import React from "react";


const yelpRestInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image: 'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
  price: "$$",
  reviews: "5000",
  rating: 4.5,
  categories: [{title: 'Thai'}, {title: 'Comfort Food'}, {title: 'Ice Cream'}],
}



function About(props) {
  const { name, image, price, reviews, rating, categories } =
  props.route.params;

   console.log()

const formattedCategories = categories.map((cat)=> cat.title).join(" • ")


const description = `${formattedCategories} ${
  price ? " • " + price : ""
} • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

export default About;

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
