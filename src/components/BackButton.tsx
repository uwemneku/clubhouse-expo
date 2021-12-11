import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Ionicons
      name="chevron-back"
      size={40}
      color="black"
      onPress={() => navigation.goBack()}
    />
  );
};

export default React.memo(BackButton);
