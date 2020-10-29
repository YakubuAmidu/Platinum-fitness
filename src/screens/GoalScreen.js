import React from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import ImageThree from "../assets/ImageThree.png";

const GoalScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ImageThree} style={styles.backgroundStyle}>
        <View style={styles.viewStyleOne}>
          <Text style={styles.textStyleOne}>
            What is the main goal to achieve from working out ?
          </Text>

          <View style={styles.viewStyleTwo}>
            <MaterialCommunityIcons
              name="human-handsup"
              style={styles.iconStyleOne}
            />
            <View style={styles.viewStyleThree}>
              <Text style={styles.textStyleTwo}>To be healthier</Text>
              <Text style={styles.textStyleFour}>
                It your primary fitness goal
              </Text>
            </View>
          </View>

          <View style={styles.viewStyleTwo}>
            <FontAwesome5 name="running" style={styles.iconStyleOne} />
            <View style={styles.viewStyleThree}>
              <Text style={styles.textStyleTwo}>Improve endurance</Text>
              <Text style={styles.textStyleFour}>
                Be in it for the long run
              </Text>
            </View>
          </View>

          <View style={styles.viewStyleTwo}>
            <Ionicons name="ios-fitness" style={styles.iconStyleOne} />
            <View style={styles.viewStyleThree}>
              <Text style={styles.textStyleTwo}>Increase strength</Text>
              <Text style={styles.textStyleFour}>Finally do a pull-up</Text>
            </View>
          </View>

          <View style={styles.viewStyleTwo}>
            <MaterialCommunityIcons
              name="human-handsup"
              style={styles.iconStyleOne}
            />
            <View style={styles.viewStyleThree}>
              <Text style={styles.textStyleTwo}>Get muscle definition</Text>
              <Text style={styles.textStyleFour}>Train for an event</Text>
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
    paddingTop: 150,
  },
  viewStyleTwo: {
    flexDirection: "row",
    marginTop: 30,
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
    fontSize: 35,
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
    marginTop: 30,
    borderRadius: 15,
  },
  textStyleFive: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default GoalScreen;
