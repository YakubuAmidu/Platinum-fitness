import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class DetailTwoScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyleOne}>
        <Text style={styles.textStyleOne}>THURSDAY, 12 APRIL</Text>
        <View style={styles.viewStyleTwo}>
          <Text style={styles.textStyleTwo}>My Day</Text>
          <View style={styles.viewStyleThree}>
            <Text style={styles.textStyleThree}>+</Text>
          </View>
        </View>

        <View style={styles.viewStyleFour}>
          <Text style={styles.textStyleFour}>
            7 activities this week. Good job!
          </Text>
        </View>
        <View>
          <Text>Statistics</Text>
          <Text>See All</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyleOne: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
  },
  textStyleOne: {
    fontSize: 15,
    color: "gray",
    paddingBottom: 10,
  },
  viewStyleTwo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  textStyleTwo: {
    fontSize: 35,
    fontWeight: "bold",
  },
  viewStyleThree: {},
  textStyleThree: {
    color: "#fff",
    marginRight: 5,
    fontSize: 40,
    backgroundColor: "#1cafde",
  },
  viewStyleFour: {
    backgroundColor: "#DCDCDC",
    padding: 5,
  },
  textStyleFour: {
    color: "#1cafde",
    fontWeight: "bold",
  },
});

export default DetailTwoScreen;
