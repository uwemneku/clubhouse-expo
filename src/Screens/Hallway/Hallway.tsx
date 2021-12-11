import { PortalHost } from "@gorhom/portal";
import { useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useRef } from "react";
import {
  FlatList as RootFlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { Divider } from "../../components";
import { mainStackRoutes } from "../../types";
import {
  ActiveRoooms,
  HallwayClubSnippet,
  HallwayScreenHeader,
} from "./components";
import PopularClubs from "./PopularClubs";

interface Props {
  navigation: StackNavigationProp<mainStackRoutes, "hallway">;
}
const FlatList = Animated.createAnimatedComponent(RootFlatList);
const Hallway: FC<Props> = ({ navigation }) => {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const ref = useRef(null);

  const isSwipeListnerEnabled = useRef<boolean>(true);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HallwayScreenHeader navigation={navigation} />
      <ScrollView
        horizontal={true}
        snapToInterval={width}
        centerContent={true}
        disableIntervalMomentum={true}
        waitFor={ref}
        contentOffset={{ x: width, y: 0 }}
      >
        <View style={{ width }}></View>
        {/* <Animated.View> */}
        <FlatList
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
          fadingEdgeLength={100}
          ItemSeparatorComponent={() => (
            <Divider size={30} variant="vertical" />
          )}
          contentContainerStyle={[styles.rooms, { width }]}
          data={[1, 2, 3, 4]}
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
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
        {/* </Animated.View> */}
      </ScrollView>
    </View>
  );
};

export default Hallway;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rooms: {
    padding: 20,
    paddingBottom: 100,
  },
});
