import { Foundation } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";

/**Renders the green clubhouse Icon */
const ClubIcon = () => {
  const { colors } = useTheme();
  return <Foundation name="home" size={15} color={colors.primary} />;
};

export default React.memo(ClubIcon);
