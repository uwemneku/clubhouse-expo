import { Portal } from "@gorhom/portal";
import { useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useEffect, useRef } from "react";
import {
  FlatList as RootFlatList,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { AppFooter, AppText, Button, Divider } from "../../components";
import { StackParamList } from "../../types";
import { ActiveRoooms, HallwayScreenHeader, SearchBar } from "./components";
import PopularClubs from "./PopularClubs";
import { FontAwesome } from "@expo/vector-icons";
interface Props {
  navigation: StackNavigationProp<StackParamList, "hallway">;
}
const FlatList = Animated.createAnimatedComponent(RootFlatList);
const Hallway: FC<Props> = ({ navigation }) => {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const searchBarOffset = useSharedValue<number>(0);

  const isSwipeListnerEnabled = useRef<boolean>(true);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);

  const animatedStyle = useAnimatedStyle(() => ({
    width,
    backgroundColor: colors.background,
    marginTop: searchBarOffset.value,
  }));

  useEffect(() => {}, [searchBarOffset.value]);
  const flatListScrollHandler = useAnimatedScrollHandler<{ prev: number }>({
    onBeginDrag: ({ contentOffset }, ctx) => {
      ctx.prev = searchBarOffset.value;
    },
    onScroll: ({ contentOffset }, ctx) => {
      const { y } = contentOffset;
      const scrollDirection = Math.abs(y) > Math.abs(ctx.prev) ? "up" : "down";
      if (scrollDirection === "up") {
        searchBarOffset.value = withTiming(-50, { duration: 250 });
      } else {
        searchBarOffset.value = withTiming(0, { duration: 250 });
      }
      ctx.prev = y;
    },
  });

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HallwayScreenHeader navigation={navigation} />
      <ScrollView
        horizontal={true}
        centerContent={true}
        pagingEnabled={true}
        contentOffset={{ x: width, y: 0 }} //scroll to hallway when the component mounts
      >
        <View style={{ width }}></View>
        <View>
          <Animated.View style={[styles.searchBarContainer, animatedStyle]}>
            <SearchBar />
          </Animated.View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            fadingEdgeLength={50}
            bounces={false}
            alwaysBounceVertical={false}
            initialNumToRender={10}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={[styles.rooms, { width }]}
            showsVerticalScrollIndicator={false}
            onScroll={flatListScrollHandler}
            onTouchStart={({ nativeEvent: { pageX } }) => {
              // When the swipe is disabled, the position of the finger along the x axis is not stored
              touchStartRef.current = isSwipeListnerEnabled.current ? pageX : 0;
            }}
            onTouchCancel={({ nativeEvent: { pageX } }) => {
              touchEndRef.current = pageX;
              const diff = touchStartRef.current - touchEndRef.current;

              if (diff > 10) {
                console.log("Swipe Right");
                setTimeout(() => {
                  navigation.navigate("messages");
                }, 50);
              }
            }}
            ItemSeparatorComponent={() => (
              <Divider size={25} variant="vertical" />
            )}
            renderItem={({ index }) =>
              index !== 2 ? (
                <ActiveRoooms />
              ) : (
                <View
                  onTouchStart={() => (isSwipeListnerEnabled.current = false)} // disable swipe listner when scrolling popular clubs
                  onTouchCancel={() => (isSwipeListnerEnabled.current = true)} // enable swipe listner immdiately the user stop scrolling
                >
                  <PopularClubs />
                </View>
              )
            }
          />
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Button
          label={
            <AppText weight="bold" size="medium">
              + Start a room
            </AppText>
          }
          variant="filled"
          color="primary"
          onPress={() => navigation.navigate("createRoom")}
          style={styles.footerButton}
        />
        <FontAwesome
          name="paper-plane-o"
          size={24}
          color="black"
          style={{ transform: [{ rotate: "-25deg" }] }}
        />
      </View>
      <Portal>
        <Pressable onPress={() => navigation.navigate("room")}>
          <AppFooter />
        </Pressable>
      </Portal>
    </View>
  );
};

export default Hallway;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rooms: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 100,
  },
  searchBarContainer: {
    paddingHorizontal: 20,
    position: "absolute",
    zIndex: 1,
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    paddingVertical: 10,
  },
  footerButton: {
    padding: 10,
    paddingHorizontal: 20,
  },
});
