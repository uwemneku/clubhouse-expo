import { FontAwesome, Fontisto } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { AppText, Button } from "../../../components";
import { StackParamList } from "../../../types";

interface Props {
  parentScrollValue: Animated.SharedValue<number>;
  parentScrollViewRef: React.RefObject<Animated.ScrollView>;
}

const Footer = ({ parentScrollValue, parentScrollViewRef }: Props) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<StackParamList, "hallway">>();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          parentScrollValue.value,
          [0, width * 0.8],
          [width, 0]
        ),
      },
    ],
  }));

  const handleGridIconClick = () => {
    parentScrollViewRef.current?.scrollTo({
      animated: true,
      x: 0,
      y: 0,
    });

    // parentScrollViewRef.current?.getNode()?.addListenerOn(9, )
  };

  return (
    <Animated.View style={[styles.footerContainer, animatedStyle]}>
      <View>
        <Fontisto
          name="nav-icon-grid-a"
          size={24}
          color="black"
          onPress={handleGridIconClick}
        />
      </View>
      <Button
        label={
          <AppText weight="bold" size="medium">
            + Start a room
          </AppText>
        }
        variant="filled"
        color="primary"
        // onPress={() => navigation.navigate("createRoom")}
        style={styles.footerButton}
      />
      <FontAwesome
        name="paper-plane-o"
        size={24}
        color="black"
        style={{ transform: [{ rotate: "-25deg" }] }}
        onPress={() => navigation.navigate("backChanel")}
      />
    </Animated.View>
  );
};

export default Footer;

const styles = StyleSheet.create({
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
    paddingHorizontal: 40,
  },
});
