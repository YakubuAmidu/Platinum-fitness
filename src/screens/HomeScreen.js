import React, { Component } from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import ImageOne from "../assets/ImageOne.png";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen()</Text>
        <ImageBackground source={ImageOne} style={styles.image}>
          <Text>Hello</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default HomeScreen;
