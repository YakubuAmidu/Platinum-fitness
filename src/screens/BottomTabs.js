import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SimpleLineIcons, Foundation, Entypo } from "@expo/vector-icons";

const BottomTabs = () => {
  return (
    <View style={styles.viewStyleOne}>
      <TouchableOpacity style={styles.viewStyleTwo}>
        <SimpleLineIcons name="screen-smartphone" size={30} color="#1cafde" />
        <Text style={styles.textStyleThree}>My Day</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewStyleTwo}>
        <Foundation name="graph-bar" size={30} color="gray" />
        <Text style={styles.textStyleFour}>Goals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewStyleTwo}>
        <SimpleLineIcons name="fire" size={30} color="#FF8C00" />
        <Text style={styles.textStyleFive}>Lets Go!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewStyleTwo}>
        <Entypo name="news" size={30} color="gray" />
        <Text style={styles.textStyleSix}>News Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewStyleTwo}>
        <Entypo name="user" size={30} color="gray" />
        <Text style={styles.textStyleSeven}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyleOne: {
    borderTopWidth: 1,
    borderColor: "#000",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    marginTop: 70,
  },
  viewStyleTwo: {
    alignItems: "center",
  },
  textStyleThree: {
    color: "#1cafde",
  },
  textStyleFour: {
    marginTop: 5,
    color: "gray",
  },
  textStyleFive: {
    marginTop: 5,
    color: "#FF8C00",
  },
  textStyleSix: {
    marginTop: 5,
    color: "gray",
  },
  textStyleSeven: {
    marginTop: 5,
    color: "gray",
  },
});

export default BottomTabs;
