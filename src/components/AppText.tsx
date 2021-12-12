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
  weight?:
    | "Thin"
    | "normal"
    | "meduim"
    | "semiBold"
    | "bold"
    | "Light"
    | "ExtraLight"
    | "ExtraBold"
    | "Black";
  color?: string;
  style?: StyleProp<TextStyle>;
  textAlign?: TextStyle["textAlign"];
}
const AppText: FC<Props> = ({
  size,
  weight,
  children,
  color,
  textAlign,
  style,
  ...props
}) => {
  const fontSize =
    size === "small" ? 12 : size === "medium" ? 16 : size === "large" ? 20 : 12;
  const fontFamily =
    weight === "Thin"
      ? "Inter_100Thin"
      : weight === "ExtraLight"
      ? "Inter_200ExtraLight"
      : weight === "Light"
      ? "Inter_300Light"
      : weight === "normal"
      ? "Inter_400Regular"
      : weight === "meduim"
      ? "Inter_500Medium"
      : weight == "semiBold"
      ? "Inter_600SemiBold"
      : weight === "bold"
      ? "Inter_700Bold"
      : weight === "ExtraBold"
      ? "Inter_800ExtraBold"
      : weight === "Black"
      ? "Inter_900Black"
      : "Inter_400Regular";

  return (
    <Text
      style={[
        {
          fontSize,
          fontFamily,
          color,
          textAlign,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default React.memo(AppText);

const styles = StyleSheet.create({});
