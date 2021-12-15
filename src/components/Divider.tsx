import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  /**Set the direction of the space to be provided by this component */
  variant: "vertical" | "horizontal";
  /**The amount of space that will be provided */
  size: number;
}

/**This component is used to to insert space between components.
 * In Flatlists, it can serve as an item sperator
 */
const Divider: FC<Props> = ({ size, variant }) => {
  return (
    <View
      style={
        variant === "vertical"
          ? { height: size }
          : variant === "horizontal"
          ? { width: size }
          : {}
      }
    />
  );
};

export default React.memo(Divider);

const styles = StyleSheet.create({});
