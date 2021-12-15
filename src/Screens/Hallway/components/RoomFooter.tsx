import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppText, Avatar, Divider } from "../../../components";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAppSelector } from "../../../store";

const RoomFooter = () => {
  const isRoomOpen = useAppSelector((state) => state.ui.isRoomUiOpen);
  const animatedValue = useSharedValue(0);

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
  useEffect(() => {
    animatedValue.value = isRoomOpen ? 0 : 1;
  }, [isRoomOpen]);
  return (
    <View style={[styles.container, styles.flexItem]}>
      {isRoomOpen ? (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.flexItem, styles.button]}
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
        </TouchableOpacity>
      ) : (
        <View style={styles.flexItem}>
          <Avatar size={40} />
          <View style={{ marginLeft: -5 }}>
            <Avatar size={40} />
          </View>
          <View style={[styles.circleSurface, { marginLeft: -5, padding: 10 }]}>
            <AppText>+23</AppText>
          </View>
        </View>
      )}

      <View style={styles.flexItem}>
        <Animated.View style={[animatedIconStyle]}>
          <TouchableOpacity>
            <FontAwesome
              name="hand-peace-o"
              size={24}
              color="brown"
              style={styles.circleSurface}
            />
          </TouchableOpacity>
        </Animated.View>
        <Divider size={10} variant="horizontal" />
        <TouchableOpacity>
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
    </View>
  );
};

export default RoomFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 10,
  },
  button: {
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 10,
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
