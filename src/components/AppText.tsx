import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  View,
} from "react-native";

interface Props extends TextProps {
  size?: "small" | "medium" | "large";
  weight?: "normal" | "meduim" | "semiBold" | "bold";
  color?: string;
  textAlign?: TextStyle["textAlign"];
}
const AppText: FC<Props> = ({
  size,
  weight,
  children,
  color,
  textAlign,
  ...props
}) => {
  const fontSize =
    size === "small" ? 14 : size === "medium" ? 18 : size === "large" ? 20 : 14;
  const fontWeight: TextStyle["fontWeight"] =
    weight === "normal"
      ? "normal"
      : weight === "meduim"
      ? "500"
      : weight == "semiBold"
      ? "700"
      : weight === "bold"
      ? "bold"
      : "normal";
  return (
    <Text
      style={[{ fontSize, fontWeight, color, textAlign }, props.style]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({});