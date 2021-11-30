import { useTheme } from "@react-navigation/native";
import React, { useRef } from "react";
import { FlatList, StyleSheet, useWindowDimensions, View } from "react-native";
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler } from "react-native-reanimated";
import { Divider } from "../../components";
import { ActiveRoooms, Header, Search } from "./components";

const Hallway = () => {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const ref = useRef(null);
  const animatedEvent = useAnimatedGestureHandler({
    onActive: ({ translationY }) => {
      console.log(translationY);
    },
  });
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header />
      <ScrollView
        horizontal={true}
        snapToInterval={width}
        scrollEventThrottle={16}
        centerContent={true}
        disableIntervalMomentum={true}
        waitFor={ref}
      >
        <View style={{ width }}></View>
        <PanGestureHandler
          ref={ref}
          activeOffsetY={[-width, width]}
          onGestureEvent={animatedEvent}
        >
          <Animated.View>
            <FlatList
              fadingEdgeLength={100}
              ItemSeparatorComponent={() => (
                <Divider size={30} variant="vertical" />
              )}
              contentContainerStyle={[styles.rooms, { width }]}
              data={[1, 2, 3, 4]}
              renderItem={() => <ActiveRoooms />}
              keyExtractor={(item) => item.toString()}
              showsVerticalScrollIndicator={false}
            />
          </Animated.View>
        </PanGestureHandler>
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
  },
});
