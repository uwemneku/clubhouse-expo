import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

interface Props {
  /**Set the style of the button */
  variant: "filled" | "outlined";
  /**Text content of the button */
  label: string | JSX.Element;
  /**Alter the size of the button */
  scale?: number; //Todo : Remove this prop
  /**Set the color based on the theme of the app */
  color: "primary" | "secondary";
  /**Function called when the button is pressed */
  onPress?: () => void;
}

/**Renders a button with rounded edges */
const Button: FC<Props> = ({ variant, color, label, onPress, scale = 1 }) => {
  const {
    colors: { primary, card },
  } = useTheme();

  const themeColor = color === "primary" ? primary : card;
  const backgroundColor =
    variant === "filled"
      ? themeColor
      : variant === "outlined"
      ? "transparent"
      : "";

  const textColor =
    variant === "filled" ? "white" : variant === "outlined" ? themeColor : "";

  const borderColor = variant === "outlined" ? themeColor : "transparent";

  return (
    <TouchableOpacity
      onPress={() => onPress && onPress()}
      activeOpacity={0.8}
      style={[
        styles.container,
        { backgroundColor, transform: [{ scale }], borderColor },
      ]}
    >
      <AppText textAlign="center" weight="semiBold" color={textColor}>
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

export default React.memo(Button);

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 30,
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 1.5,
    padding: 5,
  },
});
