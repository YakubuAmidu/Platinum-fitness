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
            <Text style={styles.textStyleTwo}> Hi</Text>
          </ImageBackground>
          <ImageBackground source={ImageFive} style={styles.backgroundStyleTwo}>
            <Text style={styles.textStyleThree}>Hello</Text>
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
    paddingRight: 20,
    paddingBottom: 20,
    fontWeight: "bold",
  },
  viewStyleOne: {
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  backgroundStyleOne: {
    alignSelf: "flex-end",
    width: 300,
    height: 150,
    marginBottom: 25,
  },
  textStyleTwo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  backgroundStyleTwo: {
    alignSelf: "flex-start",
    width: 300,
    height: 150,
  },
  textStyleThree: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default DetailOneScreen;
