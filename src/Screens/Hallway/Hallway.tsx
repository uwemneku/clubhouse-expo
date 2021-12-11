import { PortalHost } from "@gorhom/portal";
import { useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useRef } from "react";
import {
  FlatList as RootFlatList,
  StyleSheet,
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

  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HallwayScreenHeader navigation={navigation} />
      {/* <ScrollView
        horizontal={true}
        snapToInterval={width}
        scrollEventThrottle={16}
        centerContent={true}
        disableIntervalMomentum={true}
        waitFor={ref}
        contentOffset={{ x: width, y: 0 }}
      >
        <View style={{ width }}></View> */}
      <Animated.View>
        <FlatList
          onTouchStart={({ nativeEvent: { pageX } }) => {
            touchStartRef.current = pageX;
          }}
          onTouchCancel={({ nativeEvent: { pageX } }) => {
            touchEndRef.current = pageX;
            const diff = touchStartRef.current - touchEndRef.current;
            // console.log(diff);

            if (diff > 10) {
              console.log("Swipe Right");
              setTimeout(() => {
                navigation.navigate("messages");
              }, 1000);
            }
          }}
          fadingEdgeLength={100}
          ItemSeparatorComponent={() => (
            <Divider size={30} variant="vertical" />
          )}
          contentContainerStyle={[styles.rooms, { width }]}
          data={[1, 2, 3, 4]}
          renderItem={({ index }) =>
            index !== 2 ? <ActiveRoooms /> : <PopularClubs />
          }
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </Animated.View>
      {/* </ScrollView> */}
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
