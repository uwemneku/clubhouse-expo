import React, { FC } from "react";
import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { avatarImage } from "../constant";

interface Props {
  size: number;
}
const Avatar: FC<Props> = ({ size }) => {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2.5 },
      ]}
    >
      <Image source={avatarImage} style={styles.image} />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
