import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import WorkoutScreen from "./src/screens/WorkoutScreen";
import DetailTwoScreen from "./src/components/DetailTwoScreen";
import GoalScreen from "./src/screens/GoalScreen";
import DetailOneScreen from "./src/components/DetailOneScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Workout: WorkoutScreen,
    Goal: GoalScreen,
    DetailOne: DetailOneScreen,
    DetailTwo: DetailTwoScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "PLATINUM FITNESS",
    },
  }
);

export default createAppContainer(navigator);
