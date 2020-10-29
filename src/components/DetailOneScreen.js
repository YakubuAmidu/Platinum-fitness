import React, { Component } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import ImageFour from "../assets/ImageFour.png";
import ImageFive from "../assets/ImageFive.png";

const DetailOneScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.textStyleOne}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.viewStyleOne}>
        <ImageBackground source={ImageFour} style={styles.backgroundStyleOne}>
          <View style={styles.viewStyleTwo}>
            <Text style={styles.textStyleTwo}> Time 45:23</Text>
            <Text style={styles.textStyleTwo}> Distance 12,31 km</Text>
            <Text style={styles.textStyleTwo}> Calories 133,2 kcal</Text>
          </View>
        </ImageBackground>
        <ImageBackground source={ImageFive} style={styles.backgroundStyleTwo}>
          <View style={styles.viewStyleTwo}>
            <Text style={styles.textStyleTwo}>Time 45:23</Text>
            <Text style={styles.textStyleTwo}>Distance 12,31 km</Text>
            <Text style={styles.textStyleTwo}>Calories 133,2 kcal</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.viewStyleThree}>
        <Text style={styles.textSThree}>UPGRADE TO PRO</Text>
        <Text style={styles.textStyleFour}>
          Enter and record all your activities
        </Text>
        <Text style={styles.textStyleFive}>
          From strength and endurance to mobility and yoga -- featuring our
          trainers
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("DetailTwo")}
        style={styles.viewStyleFour}
      >
        <FontAwesome name="star" style={styles.iconStyleOne} />
        <View style={styles.viewStyleFive}>
          <Text style={styles.textStyleSix}>Pro Account</Text>
          <Text style={styles.textStyleSeven}>Monthly payment</Text>
        </View>
        <Text style={styles.textStyleEight}>$12</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20,
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
  },
  backgroundStyleOne: {
    alignSelf: "flex-end",
    paddingLeft: 20,
    paddingTop: 90,
    width: 300,
    height: 150,
    marginBottom: 25,
  },
  viewStyleTwo: {
    width: 110,
    flexDirection: "row",
  },
  textStyleTwo: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  backgroundStyleTwo: {
    alignSelf: "flex-start",
    paddingRight: 20,
    paddingTop: 90,
    width: 300,
    height: 150,
  },
  viewStyleThree: {
    paddingTop: 30,
  },
  textSThree: {
    fontSize: 20,
    color: "gray",
    paddingBottom: 25,
  },
  textStyleFour: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 25,
  },
  textStyleFive: {
    fontSize: 20,
  },
  viewStyleFour: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCDCDC",
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 40,
  },
  iconStyleOne: {
    fontSize: 30,
    padding: 10,
    color: "blue",
    backgroundColor: "lightblue",
  },
  textStyleSix: {
    fontSize: 25,
    marginBottom: 5,
    fontWeight: "bold",
  },
  textStyleSeven: {
    fontSize: 18,
    color: "gray",
    marginRight: 30,
  },
  textStyleEight: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "blue",
  },
  viewStyleOne: {
    marginHorizontal: 20,
  },
  viewStyleFive: {
    marginHorizontal: 20,
  },
});

export default DetailOneScreen;
