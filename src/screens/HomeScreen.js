import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
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
              Easy-to-use workout planner and tracker with automated rest and
              recovery control
            </Text>

            <TouchableOpacity style={styles.viewStyleTwo}>
              <FontAwesome5
                name="user-circle"
                size={24}
                color="white"
                style={styles.iconStyleTwo}
              />
              <Text style={styles.textStyleThree}>
                Personalized your account
              </Text>
            </TouchableOpacity>

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
    paddingRight: 15,
    paddingTop: 200,
  },
  iconStyleOne: {
    fontSize: 80,
    width: 100,
    padding: 8,
    color: "#fff",
    backgroundColor: "gold",
  },
  textStyleOne: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 40,
    width: 300,
  },
  textStyleTwo: {
    color: "#fff",
    fontSize: 20,
    width: 360,
  },
  viewStyleTwo: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 10,
    paddingTop: 17,
    paddingBottom: 17,
    backgroundColor: "#3d65ee",
  },
  iconStyleTwo: {},
  textStyleThree: {
    marginHorizontal: 10,
    textTransform: "capitalize",
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  textStyleFour: {
    textAlign: "center",
    fontSize: 25,
    color: "#fff",
    textTransform: "capitalize",
  },
});

export default HomeScreen;
