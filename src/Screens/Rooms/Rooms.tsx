import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { AppText, Avatar, Button, Divider } from "../../components";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../types";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { RoomAvatar } from "./components";

interface Props {
  navigation: StackNavigationProp<StackParamList, "room">;
}
const Rooms = ({ navigation }: Props) => {
  const {
    colors: { background },
  } = useTheme();
  const { height } = useWindowDimensions();
  const transfromY = useSharedValue(height);
  const [isFocused, setIsFocused] = useState(false);

  const animatedRoomStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: withTiming(transfromY.value, { duration: 500 }) },
    ],
  }));
  const animatedHeaderStyle = useAnimatedStyle(() => ({
    opacity: interpolate(transfromY.value, [height, 0], [0, 1]),
    backgroundColor: background,
    padding: 20,
  }));
  const startClosingAnimation = () => {};

  const handleBackNavigation = () => {
    transfromY.value = height;
    setTimeout(() => {
      navigation.goBack();
    }, 500);
  };
  useFocusEffect(
    useCallback(() => {
      transfromY.value = 0;
      setIsFocused(true);
    }, [])
  );
  useEffect(() => {
    navigation.addListener("beforeRemove", () => {});

    return () => navigation.removeListener("beforeRemove", () => {});
  }, []);

  return (
    <View style={[styles.container]}>
      <Animated.View style={[styles.flexItems, animatedHeaderStyle]}>
        <Entypo
          name="chevron-down"
          size={30}
          color="black"
          style={{ flex: 1 }}
          onPress={handleBackNavigation}
        />
        <View style={styles.flexItems}>
          <Ionicons name="md-document-outline" size={30} color="black" />
          <Divider size={20} variant="horizontal" />
          <Avatar size={35} />
        </View>
      </Animated.View>
      <Animated.View style={[styles.rooms, animatedRoomStyle]}>
        <View style={{ flex: 1 }}>
          {isFocused ? (
            <FlatList
              data={[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23,
              ]}
              renderItem={() => <RoomAvatar />}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "space-between",
                padding: 10,
              }}
              keyExtractor={(item) => item.toString()}
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator
                animating={true}
                size={"large"}
                color={"green"}
              />
            </View>
          )}
        </View>
      </Animated.View>
    </View>
  );
};

export default Rooms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexItems: {
    flexDirection: "row",
    alignItems: "center",
  },
  rooms: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  iconCircle: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
});
