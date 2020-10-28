import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import ImageTwo from "../assets/ImageTwo.png";

const WorkoutScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ImageTwo} style={styles.backgroundStyle}>
        <View style={styles.viewStyleOne}>
          <Text style={styles.textStyleOne}>
            How often do you usually work out ?
          </Text>
          <View style={styles.viewStyleTwo}>
            <FontAwesome name="user" style={styles.iconStyleOne} />
            <View style={styles.viewStyleThree}>
              <Text style={styles.textStyleTwo}>0-1 workouts/week</Text>
              <Text style={styles.textStyleFour}>I'm a little rusty</Text>
            </View>
          </View>

          <View style={styles.viewStyleTwo}>
            <MaterialCommunityIcons
              name="human-male"
              style={styles.iconStyleOne}
            />
            <View style={styles.viewStyleThree}>
              <Text style={styles.textStyleTwo}>0-1 workouts/week</Text>
              <Text style={styles.textStyleFour}>I'm a regular</Text>
            </View>
          </View>

          <View style={styles.viewStyleTwo}>
            <MaterialCommunityIcons
              name="human-handsup"
              style={styles.iconStyleOne}
            />
            <View style={styles.viewStyleThree}>
              <Text style={styles.textStyleTwo}>0-1 workouts/week</Text>
              <Text style={styles.textStyleFour}>A man, a machine</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={styles.textStyleFive}>Next</Text>
          </TouchableOpacity>
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
    paddingTop: 200,
  },
  viewStyleTwo: {
    flexDirection: "row",
    marginTop: 50,
  },
  viewStyleThree: {
    marginHorizontal: 20,
  },
  iconStyleOne: {
    fontSize: 40,
    color: "#fff",
  },
  textStyleOne: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },
  textStyleTwo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  textStyleFour: {
    color: "gray",
    fontWeight: "bold",
  },
  touchableOpacity: {
    backgroundColor: "#3d65ee",
    alignItems: "center",
    padding: 15,
    marginTop: 50,
    borderRadius: 15,
  },
});

export default WorkoutScreen;
