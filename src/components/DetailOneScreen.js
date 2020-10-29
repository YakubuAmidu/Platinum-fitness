import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import ImageFour from "../assets/ImageFour.png";

class DetailOneScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyleOne}>Skip</Text>
        <ImageBackground source={ImageFour} style={styles.backgroundStyle}>
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
  textStyleOne: {
    color: "blue",
    fontSize: 20,
    textAlign: "right",
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: "bold",
  },
  backgroundStyle: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default DetailOneScreen;
