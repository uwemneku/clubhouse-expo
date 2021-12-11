import { Foundation } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";

const ClubIcon = () => {
  const { colors } = useTheme();
  return <Foundation name="home" size={15} color={colors.primary} />;
};

export default ClubIcon;
