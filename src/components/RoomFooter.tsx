import React, { useEffect } from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAppDispatch, useAppSelector } from "../store";
import AppText from "./AppText";
import Divider from "./Divider";
import Avatar from "./Avatar";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "../types";
import { leaveRoom } from "../features";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/**
 * This component is rendered when a room is active and the user is in it.
 * It is also rendered when the user is in a room and minimizes it.
 */
const RoomFooter = () => {
  const animatedValue = useSharedValue(0);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<StackParamList, "hallway">>();
  const [activeRoom, isRoomUiOpen] = useAppSelector((state) => [
    state.room.activeRoomId,
    state.ui.isRoomUiOpen,
  ]);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(
          interpolate(animatedValue.value, [1, 0], [0, 46]),
          { duration: 500 }
        ),
      },
    ],
    opacity: withTiming(animatedValue.value, { duration: 500 }),
  }));

  const animatedButtonStyle = useAnimatedStyle(() => ({
    opacity: withTiming(interpolate(animatedValue.value, [0, 1], [1, 0]), {
      duration: 500,
    }),
    transform: [
      {
        translateY: withTiming(
          interpolate(animatedValue.value, [0, 0.8, 1], [0, 0, 100]),
          { duration: 500 }
        ),
      },
    ],
  }));

  const animatedContainerStyle = useAnimatedStyle(() => ({
    marginBottom: withTiming(activeRoom ? 0 : -60, { duration: 250 }),
  }));

  useEffect(() => {
    animatedValue.value = isRoomUiOpen ? 0 : 1; // triggers animation when the room opens of closes
  }, [isRoomUiOpen, activeRoom]);

  const handleRoomExit = () => {
    dispatch(leaveRoom());
    //navigate back if the room screen is focused ie the room is open and not minimized
    isRoomUiOpen && navigation.goBack();
  };

  return (
    <AnimatedPressable
      style={[styles.container, styles.flexItem, animatedContainerStyle]}
      onPress={() => {
        navigation.navigate("room", {
          id: activeRoom || "",
        });
      }}
    >
      {/* <Animated.View style={[animatedButtonStyle]}> */}
      <AnimatedPressable
        style={[styles.flexItem, styles.button, animatedButtonStyle]}
        onPress={handleRoomExit}
      >
        <FontAwesome name="hand-peace-o" size={24} color="brown" />
        <Divider size={10} variant="horizontal" />
        <AppText
          size="small"
          color="red"
          weight="semiBold"
          style={{ fontSize: 15 }}
        >
          Leave quietly
        </AppText>
      </AnimatedPressable>
      {/* </Animated.View> */}
      <View style={styles.flexItem}>
        <Avatar size={40} />
        <View style={{ marginLeft: -5 }}>
          <Avatar size={40} />
        </View>
        <View style={[styles.circleSurface, { marginLeft: -5, padding: 10 }]}>
          <AppText>+23</AppText>
        </View>
      </View>

      <View style={styles.flexItem}>
        <Animated.View style={[animatedIconStyle]}>
          <TouchableOpacity onPress={handleRoomExit}>
            <FontAwesome
              name="hand-peace-o"
              size={24}
              color="brown"
              style={styles.circleSurface}
            />
          </TouchableOpacity>
        </Animated.View>
        <Divider size={10} variant="horizontal" />
        <TouchableOpacity onPress={() => console.log("the plus sign")}>
          <MaterialIcons
            name="add"
            size={24}
            color="black"
            style={styles.circleSurface}
          />
        </TouchableOpacity>
        <Divider size={10} variant="horizontal" />
        <TouchableOpacity>
          <Ionicons
            name="ios-hand-left-outline"
            size={24}
            color="darkgray"
            style={styles.circleSurface}
          />
        </TouchableOpacity>
      </View>
    </AnimatedPressable>
  );
};

export default RoomFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 10,
    height: 60,
  },
  button: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "#E5E5E5",
    padding: 10,
    marginLeft: 10,
    borderRadius: 20,
  },
  flexItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleSurface: {
    backgroundColor: "rgba(0,0,0,0.1)",
    alignSelf: "flex-end",
    padding: 8,
    borderRadius: 40,
  },
});
