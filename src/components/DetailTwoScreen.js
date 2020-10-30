import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomTabs from "../screens/BottomTabs";
import { FontAwesome5 } from "@expo/vector-icons";

class DetailTwoScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyleOne}>
        <Text style={styles.textStyleOne}>THURSDAY, 12 APRIL</Text>
        <View style={styles.viewStyleTwo}>
          <Text style={styles.textStyleTwo}>My Day</Text>
          <TouchableOpacity style={styles.viewStyleThree}>
            <Text style={styles.textStyleThree}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewStyleFour}>
          <Text style={styles.textStyleFour}>
            7 activities this week. Good job!
          </Text>
        </View>
        <View style={styles.viewStyleFive}>
          <Text style={styles.textStyleFive}>Statistics</Text>
          <TouchableOpacity>
            <Text style={styles.textStyleSix}>See All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Barchart</Text>
        </View>

        <View style={styles.viewStyleSix}>
          <View style={styles.viewStyleSeven}>
            <Text style={styles.textStyleSeven}>Today's Activities</Text>
            <TouchableOpacity>
              <Text style={styles.textStyleEight}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewStyleEight}>
            <View style={styles.viewStyleNine}>
              <FontAwesome5 name="swimmer" size={24} color="#fff" />
              <Text style={styles.textStyleNine}>Swimming</Text>
            </View>
            <View style={styles.viewStyleTen}>
              <Text style={styles.textStyleTen}>1:16:03 Duration</Text>
              <View>
                <Text style={styles.textStyleEleven}>Avg HR 98</Text>
                <Text style={styles.textStyleEleven}>Avg HR 98</Text>
                <Text style={styles.textStyleEleven}>Avg HR 98</Text>
              </View>
            </View>
          </View>

          <View style={styles.viewStyleEight}>
            <View style={styles.viewStyleNine}>
              <FontAwesome5 name="running" size={24} color="#fff" />
              <Text style={styles.textStyleNine}>Running</Text>
            </View>
            <View style={styles.viewStyleTen}>
              <Text style={styles.textStyleTen}>1:16:03 Duration</Text>
              <View>
                <Text style={styles.textStyleEleven}>Avg HR 98</Text>
                <Text style={styles.textStyleEleven}>Avg HR 98</Text>
                <Text style={styles.textStyleEleven}>Avg HR 98</Text>
              </View>
            </View>
          </View>
        </View>
        <BottomTabs />
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
    marginBottom: 10,
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
    paddingRight: 12,
    paddingLeft: 12,
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
  viewStyleFive: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  textStyleFive: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textStyleSix: {
    color: "#1cafde",
    fontSize: 25,
  },
  viewStyleSix: {
    marginTop: 20,
  },
  viewStyleSeven: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textStyleSeven: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textStyleEight: {
    fontSize: 25,
    color: "#1cafde",
  },
  viewStyleEight: {
    backgroundColor: "#1cafde",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
  },
  viewStyleNine: {
    flexDirection: "row",
  },
  viewStyleTen: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textStyleTen: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    width: 110,
  },
  textStyleEleven: {
    fontSize: 25,
    color: "#fff",
    margin: 5,
  },
  textStyleNine: {
    marginHorizontal: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default DetailTwoScreen;
