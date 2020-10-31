import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import ImageTwo from "../assets/ImageTwo.png";
import GoalScreen from "./GoalScreen";

const WorkoutScreen = ({ navigation }) => {
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
              <Text style={styles.textStyleTwo}>2-4 workouts/week</Text>
              <Text style={styles.textStyleFour}>I'm a regular</Text>
            </View>
          </View>

          <View style={styles.viewStyleTwo}>
            <FontAwesome5 name="running" style={styles.iconStyleOne} />
            <View style={styles.viewStyleThree}>
              <Text style={styles.textStyleTwo}>5+ workouts/week</Text>
              <Text style={styles.textStyleFour}>A man, a machine</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Goal")}
            style={styles.touchableOpacity}
          >
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
    paddingRight: 15,
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
    backgroundColor: "#000",
    padding: 7,
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
  textStyleFive: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default WorkoutScreen;
