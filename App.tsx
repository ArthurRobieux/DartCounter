import { createContext, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Homepage } from "./src/modules/homepage/Homepage";
import { CreateGame } from "./src/modules/creategame/CreateGame";
import { Scores } from "./src/modules/scores/Scores";
import { Game } from "./src/modules/game/Game";
import { RootTabParamList, Team } from "./src/types";
import { TabBarIcon } from "./src/common-ui";
import { Context } from "./src/context";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  const [teams, setTeams] = useState([
    {
      players: [""],
    },
  ]);

  return (
    <SafeAreaProvider>
      <Context.Provider value={{ teams, setTeams }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Root"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Game"
              component={Game}
              options={{ title: "Partie en cours" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    </SafeAreaProvider>
  );
}

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={Homepage}
        options={{
          title: "Accueil",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="CreateGame"
        component={CreateGame}
        options={{
          title: "Nouvelle partie",
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Scores"
        component={Scores}
        options={{
          title: "Scores",
          tabBarIcon: ({ color }) => <TabBarIcon name="trophy" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
