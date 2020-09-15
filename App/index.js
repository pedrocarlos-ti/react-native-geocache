import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import List from "./screens/List";
import Details from "./screens/Details";

import { AddButton } from "./components/Navigation";

const Stack = createStackNavigator();

const AppWithContainer = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#3A8552" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Caches"
        component={List}
        options={({ navigation }) => ({
          headerRight: () => <AddButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          title: route.params?.title,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const App = () => (
  <React.Fragment>
    <StatusBar style="light" />
    <AppWithContainer />
  </React.Fragment>
);

export default App;
