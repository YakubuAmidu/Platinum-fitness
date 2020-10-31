import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import ImageSix from "../assets/ImageSix.png";

const DetailThreeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={ImageSix}
        alt="img"
        style={styles.backgroundStyleOne}
      >
        <Text style={styles.textStyleOne}>My day</Text>
        <View style={styles.viewStyleBigOne}>
          <Text style={styles.textStyleTwo}>12 JUNE, 2018</Text>
          <Text style={styles.textStyleThree}>Running</Text>
          <View style={styles.textStyleTwo}>
            <FontAwesome5 name="route" size={24} color="orange" />
          </View>
          <View style={styles.viewStyleThree}>
            <FontAwesome name="clock-o" size={24} color="black" />
            <Text style={styles.textStyleFour}>Start at 12:55</Text>
            <FontAwesome name="clock-o" size={24} color="black" />
            <Text style={styles.textStyleFive}>Finish at 13:40</Text>
            <FontAwesome name="location-arrow" size={24} color="black" />
            <Text style={styles.textStyleSix}>8.32 km</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  backgroundStyleOne: {
    height: 300,
  },
});

export default DetailThreeScreen;
