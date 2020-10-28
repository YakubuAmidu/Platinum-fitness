import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import ImageTwo from "../assets/ImageTwo.png";

const WorkoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WorkoutScreen</Text>
      <ImageBackground source={ImageTwo} style={styles.backgroundStyle} />
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
});

export default WorkoutScreen;
