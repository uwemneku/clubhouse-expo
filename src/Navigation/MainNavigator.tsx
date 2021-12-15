import React from "react";
import { StyleSheet } from "react-native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { StackParamList } from "../types";
import {
  HallwayScreen,
  Messages,
  Profile,
  RecentlyListenedTo,
  Rooms,
  Settings,
} from "../Screens";
import { Explore } from "../Screens/Explore";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch } from "../store";
import { toggleRoomUiDisplayState } from "../features";

const { Navigator, Screen } = createStackNavigator<StackParamList>();

const MainNavigator = () => {
  const {
    colors: { background },
  } = useTheme();

  const dispatch = useAppDispatch();
  return (
    <Navigator
      screenOptions={({ route: { name } }) => ({
        headerShown: false,
        presentation: "transparentModal",
        cardStyle: {
          backgroundColor: name === "room" ? "transparent" : background,
        },
        cardStyleInterpolator:
          name === "settings"
            ? CardStyleInterpolators.forBottomSheetAndroid
            : CardStyleInterpolators.forHorizontalIOS,
      })}
    >
      <Screen name="hallway" component={HallwayScreen} />
      <Screen name="messages" component={Messages} />
      <Screen
        name="explore"
        component={Explore}
        options={{
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              transform: [
                {
                  translateX: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 0],
                  }),
                },
              ],
            },
          }),
        }}
      />
      <Screen name="recentlyListenedTo" component={RecentlyListenedTo} />
      <Screen name="profile" component={Profile} />
      <Screen name="settings" component={Settings} />
      <Screen
        name="room"
        component={Rooms}
        options={{
          cardStyle: {
            backgroundColor: "transparent",
          },
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        }}
        listeners={{
          beforeRemove: () => dispatch(toggleRoomUiDisplayState()),
          focus: () => dispatch(toggleRoomUiDisplayState()),
        }}
      />
    </Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  j: {
    transform: [{ translateX: 0 }],
  },
});
