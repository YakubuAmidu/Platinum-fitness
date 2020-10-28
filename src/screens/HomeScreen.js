import React, { Component } from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import ImageOne from "../assets/ImageOne.png";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={ImageOne} style={styles.backgroundStyle}>
          <View style={styles.viewStyleOne}>
            <MaterialIcons name="fitness-center" style={styles.iconStyleOne} />

            <Text style={styles.textStyleOne}>
              Personalized fitness training
            </Text>

            <Text style={styles.textStyleTwo}>
              Easy-to-use workout planner and tracker with automated and
              recovery control
            </Text>

            <View style={styles.viewStyleTwo}>
              <FontAwesome5
                name="user-circle"
                size={24}
                color="white"
                style={styles.iconStyleTwo}
              />
              <Text style={styles.textStyleThree}>
                Personalized your account
              </Text>
            </View>

            <Text style={styles.textStyleFour}>Setup later</Text>
          </View>
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
  backgroundStyle: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  viewStyleOne: {
    paddingLeft: 15,
  },
  iconStyleOne: {
    fontSize: 40,
    color: "#fff",
    backgroundColor: "gold",
  },
  textStyleOne: {
    color: "#fff",
    fontSize: 30,
  },
  textStyleTwo: {
    color: "#fff",
  },
  viewStyleTwo: {},
  iconStyleTwo: {},
  textStyleThree: {},
  textStyleFour: {},
});

export default HomeScreen;
