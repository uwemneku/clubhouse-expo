import React, { FC } from "react";
import { StyleProp, Text, TextProps, TextStyle, View } from "react-native";

interface Props extends TextProps {
  /**Set the font size of the text */
  size?: "small" | "medium" | "large";
  /**Set the font weight of the text */
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
