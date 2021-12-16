import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Avatar, Divider } from "../../components";
import { RouteProp, useFocusEffect, useTheme } from "@react-navigation/native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../types";
import { FlatList } from "react-native-gesture-handler";
import { RoomAvatar } from "./components";
import { useAppDispatch, useAppSelector } from "../../store";
import { joinRoom } from "../../features";

interface Props {
  navigation: StackNavigationProp<StackParamList, "room">;
  route: RouteProp<StackParamList, "room">;
}
const Rooms = ({ navigation, route }: Props) => {
  const { id } = route.params;
  const activeRoomId = useAppSelector((state) => state.room.activeRoomId);
  const {
    colors: { background },
  } = useTheme();
  const dispatch = useAppDispatch();
  const { height } = useWindowDimensions();
  const transfromY = useSharedValue(height);
  const [isFocused, setIsFocused] = useState(true);
  const isNewRoom = id !== activeRoomId;
  const [isRoomLoaded, setIsRoomLoaded] = useState(!isNewRoom);

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

  const handleBackNavigation = () => {
    transfromY.value = height;
  };
  useFocusEffect(
    useCallback(() => {
      transfromY.value = 0;
      setIsFocused(true);
    }, [])
  );

  // useEffect(() => {}, [loa]);
  useEffect(() => {
    isNewRoom && handleLoadNewRoom();
    navigation.addListener("beforeRemove", handleBackNavigation);
    return () =>
      navigation.removeListener("beforeRemove", handleBackNavigation);
  }, []);

  const handleLoadNewRoom = () => {
    dispatch(joinRoom(id));
    //TODO: add api call to load new room data
    //note that this place holder logic is just for demo as state can be updated even when this component is not unmounted leading to errors
    const timeoutId = setTimeout(() => {
      setIsRoomLoaded(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  };

  return (
    <View style={[styles.container]}>
      <Animated.View style={[styles.flexItems, animatedHeaderStyle]}>
        <Entypo
          name="chevron-down"
          size={30}
          color="black"
          style={{ flex: 1 }}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.flexItems}>
          <Ionicons name="md-document-outline" size={30} color="black" />
          <Divider size={20} variant="horizontal" />
          <Avatar size={35} />
        </View>
      </Animated.View>
      <Animated.View style={[styles.rooms, animatedRoomStyle]}>
        <View style={{ flex: 1 }}>
          {isRoomLoaded ? (
            <FlatList
              data={[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23,
              ]}
              renderItem={() => <RoomAvatar />}
              numColumns={3}
              initialNumToRender={10}
              viewabilityConfig={{
                viewAreaCoveragePercentThreshold: 10,
              }}
              ItemSeparatorComponent={() => (
                <Divider size={0} variant="vertical" />
              )}
              columnWrapperStyle={{
                justifyContent: "space-between",
                alignContent: "flex-start",
                padding: 10,
              }}
              removeClippedSubviews={true}
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
