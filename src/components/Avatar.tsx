import React, { FC } from "react";
import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { avatarImage } from "../constant";

interface Props {
  /** Size of the Avatar */
  size: number;
  /**The uri of the image */
  uri?: string;
}

/**This component is used to render user avatar through out the entire app */
const Avatar: FC<Props> = ({ size }) => {
  // Todo : Remove placeholder image from image source and replace with URI from component props
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

export default React.memo(Avatar);

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
