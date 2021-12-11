import React, { FC } from "react";
import {
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  View,
} from "react-native";

interface Props extends TextProps {
  /**Set the font size of the text */
  size?: "small" | "medium" | "large";
  /**Set the font weight of the text */
  weight?: "normal" | "meduim" | "semiBold" | "bold";
  /**Set the color of the text */
  color?: string;
  /**Set the horizontal alignment of the text */
  textAlign?: TextStyle["textAlign"];
  /**Extend or oviride component styles with your own styles*/
  style?: StyleProp<TextStyle>;
}

/**This component extends the Text component from react native nad exposes a few styles as props */
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
      style={[{ fontSize, fontWeight, color, textAlign }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default React.memo(AppText);

