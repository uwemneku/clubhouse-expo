import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { AppText, Avatar } from "../../../components";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

interface Props {
  isSpeaking: boolean;
  isMuted: boolean;
  isAdmin: boolean;
}
const RoomAvatar = ({ isMuted, isSpeaking }: Props) => {
  const animatedBorderStyle = useAnimatedStyle(() => ({
    borderColor: isSpeaking ? "darkgray" : "transparent",
    borderWidth: 2,
    padding: 5,
    borderRadius: 40,
  }));
  return (
    <View style={styles.container}>
      <Animated.View style={[animatedBorderStyle]}>
        <Avatar size={80} />
        {isMuted && <MicIcoon />}
      </Animated.View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
      >
        <AdminIcon />
        <AppText weight="meduim" size="small">
          {" "}
          Valeeta
        </AppText>
      </View>
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

const AdminIcon = () => {
  const {
    colors: { primary },
  } = useTheme();
  return (
    <View style={[{ backgroundColor: primary }, styles.greenIcon]}>
      <Ionicons name="md-star" size={10} color="white" />
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
    paddingVertical: 0,
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
  greenIcon: {
    borderRadius: 2000,
    padding: 2,
  },
});
