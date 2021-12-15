import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { AppText, Avatar } from "../../../components";
import { Ionicons } from "@expo/vector-icons";

const RoomAvatar = () => {
  1;
  const animatedBorderStyle = useAnimatedStyle(() => ({
    overflow: "visible",
  }));
  return (
    <View style={styles.container}>
      <Animated.View style={[animatedBorderStyle]}>
        <Avatar size={80} />
        <MicIcoon />
      </Animated.View>
      <AppText weight="meduim" size="small" style={{ marginTop: 5 }}>
        Valeeta
      </AppText>
    </View>
  );
};

export default React.memo(RoomAvatar);

const MicIcoon = () => {
  return (
    <View style={styles.mic}>
      <Ionicons name="md-mic-sharp" size={20} color="black" />
      <View style={styles.redLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    padding: 5,
  },
  mic: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    elevation: 2,
    position: "absolute",
    bottom: -10,
    right: -5,
  },
  redLine: {
    backgroundColor: "red",
    width: 2,
    elevation: 2,
    borderRadius: 20,
    borderWidth: 0.2,
    borderColor: "white",
    height: "100%",
    position: "absolute",
    transform: [{ rotate: "-45deg" }],
  },
});
