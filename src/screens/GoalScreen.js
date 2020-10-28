import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import ImageThree from "../assets/ImageThree.png";

const GoalScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ImageThree} style={styles.backgroundStyle}>
        <View style={styles.viewStyleOne}>
          <Text style={styles.textStyleOne}>
            What is the main goal to achieve from working out ?
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundStyle: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  viewStyleOne: {
    paddingLeft: 15,
  },
  textStyleOne: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default GoalScreen;
