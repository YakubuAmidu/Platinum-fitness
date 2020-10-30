import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const BottomTabs = () => {
  return (
    <View style={styles.viewStyleOne}>
      <View>
        <SimpleLineIcons name="screen-smartphone" size={24} color="black" />
        <Text>My Day</Text>
      </View>
      <View>
        <SimpleLineIcons name="screen-smartphone" size={24} color="black" />
        <Text>My Day</Text>
      </View>
      <View>
        <SimpleLineIcons name="screen-smartphone" size={24} color="black" />
        <Text>My Day</Text>
      </View>
      <View>
        <SimpleLineIcons name="screen-smartphone" size={24} color="black" />
        <Text>My Day</Text>
      </View>
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
});

export default BottomTabs;
