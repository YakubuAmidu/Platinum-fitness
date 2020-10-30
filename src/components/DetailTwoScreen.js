import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class DetailTwoScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyleOne}>
        <Text style={styles.textStyleOne}>THURSDAY, 12 APRIL</Text>
        <View style={styles.viewStyleTwo}>
          <Text style={styles.textStyleTwo}>My Day</Text>
          <Text style={styles.textStyleThree}>+</Text>
        </View>

        <View style={styles.viewStyleThree}>
          <Text style={styles.textStyleFour}>
            7 activities this week. Good job!
          </Text>
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
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  textStyleTwo: {
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default DetailTwoScreen;
