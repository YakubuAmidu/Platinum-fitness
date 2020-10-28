import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import WorkoutScreen from "./src/screens/WorkoutScreen";
import GoalScreen from "./src/screens/GoalScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Workout: WorkoutScreen,
    Goal: GoalScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "PLATINUM FITNESS",
    },
  }
);

export default createAppContainer(navigator);
