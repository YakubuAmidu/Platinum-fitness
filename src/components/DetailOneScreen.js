import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import ImageFour from "../assets/ImageFour.png";
import ImageFive from "../assets/ImageFive.png";

class DetailOneScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyleOne}>Skip</Text>

        <View style={styles.viewStyleOne}>
          <ImageBackground source={ImageFour} style={styles.backgroundStyleOne}>
            <Text> Hi</Text>
          </ImageBackground>
          <ImageBackground source={ImageFive} style={styles.backgroundStyleTwo}>
            <Text>Hello</Text>
          </ImageBackground>
        </View>

        <Text>Hello</Text>
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
  viewStyleOne: {
    alignItems: "center",
  },
  backgroundStyleOne: {
    width: 300,
    height: 150,
    marginBottom: 25,
  },
  backgroundStyleTwo: {
    width: 300,
    height: 150,
  },
});

export default DetailOneScreen;
