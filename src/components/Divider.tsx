import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  variant: "vertical" | "horizontal";
  size: number;
}
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

export default Divider;

const styles = StyleSheet.create({});
